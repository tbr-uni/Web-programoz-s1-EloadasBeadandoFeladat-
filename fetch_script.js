const api = "api.php";
let currentOffset = 0;

document.getElementById("orderForm").addEventListener("submit", saveOrder);

window.onload = function() {
    fetchPizzaList();
    fetchOrders(false);
};

function fetchPizzaList() {
    fetch(api + "?task=pizzas")
        .then(res => res.json())
        .then(data => {
            const select = document.getElementById("pizzanev");
            data.pizzas.forEach(pizza => {
                let option = document.createElement("option");
                option.value = pizza.nev;
                option.text = pizza.nev;
                select.appendChild(option);
            });
        });
}

function fetchOrders(append = false) {
    if (!append) currentOffset = 0;

    fetch(`${api}?offset=${currentOffset}`)
        .then(res => res.json())
        .then(data => {
            let rows = "";
            data.readData.forEach(order => {
                rows += `
                <tr>
                    <td>${order.az}</td>
                    <td><b>${order.pizzanev}</b></td>
                    <td>${order.darab} db</td>
                    <td><small>${order.felvetel}</small></td>
                    <td><small>${order.kiszallitas ? order.kiszallitas : "-"}</small></td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick='editOrder(${JSON.stringify(order)})'>Módosít</button>
                        <button class="btn btn-danger btn-sm" onclick='deleteOrder(${order.az})'>Töröl</button>
                    </td>
                </tr>`;
            });

            const tableBody = document.getElementById("orderTable");
            if (append) {
                tableBody.innerHTML += rows;
            } else {
                tableBody.innerHTML = rows;
            }

            document.getElementById("loadMoreBtn").style.display = (data.readData.length < 50) ? "none" : "block";
        });
}

function loadMore() {
    currentOffset += 50;
    fetchOrders(true);
}

function saveOrder(e) {
    e.preventDefault();
    const az = document.getElementById("az").value;
    const data = {
        az: az,
        pizzanev: document.getElementById("pizzanev").value,
        darab: document.getElementById("darab").value,
        felvetel: document.getElementById("felvetel").value,
        kiszallitas: document.getElementById("kiszallitas").value
    };

    fetch(api, {
        method: az ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        const msgEl = document.getElementById("message");
        if (data.status.includes("sikeresen")) {
            msgEl.innerText = data.status;
            msgEl.className = "text-success fw-bold";
            cancelEdit();
            fetchOrders(false);
        } else {
            msgEl.innerText = "HIBA: " + data.status;
            msgEl.className = "text-danger fw-bold";
        }
    });
}

function editOrder(order) {
    document.getElementById("addedit").innerHTML = "Szerkesztés: #" + order.az;
    document.getElementById("az").value = order.az;
    document.getElementById("pizzanev").value = order.pizzanev;
    document.getElementById("darab").value = order.darab;
    document.getElementById("felvetel").value = order.felvetel;
    document.getElementById("kiszallitas").value = order.kiszallitas;
    document.getElementById("cancelBtn").style.display = "inline-block";
    window.scrollTo(0, 0);
}

function cancelEdit() {
    document.getElementById("orderForm").reset();
    document.getElementById("az").value = "";
    document.getElementById("addedit").innerHTML = "Új rendelés felvétele";
    document.getElementById("cancelBtn").style.display = "none";
}

function deleteOrder(az) {
    if (!confirm("Biztosan törlöd a(z) " + az + " rendelést?")) return;
    fetch(api, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ az: az })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("message").innerText = data.status;
        fetchOrders(false);
    });
}
