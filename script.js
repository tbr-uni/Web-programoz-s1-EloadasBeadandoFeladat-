var selectedIndex = null;
var array1 = [
    {"nev": "Áfonyás", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Babos", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Barbecue chicken", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Betyáros", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Caribi", "kategorianev": "apród", "vegetarianus": false},
    {"nev": "Country", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Csabesz", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Csupa sajt", "kategorianev": "lovag", "vegetarianus": true},
    {"nev": "Erdő kapitánya", "kategorianev": "apród", "vegetarianus": false},
    {"nev": "Erős János", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Excellent", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Főnök kedvence", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Francia", "kategorianev": "főnemes", "vegetarianus": false},
    {"nev": "Frankfurti", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Füstös", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Gino", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Gombás", "kategorianev": "apród", "vegetarianus": true},
    {"nev": "Góré", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Görög", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Gyros pizza", "kategorianev": "király", "vegetarianus": false},
    {"nev": "HamAndEggs", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Hamm", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Hawaii", "kategorianev": "főnemes", "vegetarianus": false},
    {"nev": "Hellas", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Hercegnő", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Ilike", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Ínyenc", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Jázmin álma", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Jobbágy", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Juhtúrós", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Kagylós", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Kétszínű", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Kiadós", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Király pizza", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Kívánság", "kategorianev": "lovag", "vegetarianus": true},
    {"nev": "Kolbászos", "kategorianev": "apród", "vegetarianus": false},
    {"nev": "Lagúna", "kategorianev": "király", "vegetarianus": true},
    {"nev": "Lecsó", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Maffiózó", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Magvas", "kategorianev": "király", "vegetarianus": true},
    {"nev": "Magyaros", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Máj Fair Lady", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Mamma fia", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Mexikói", "kategorianev": "főnemes", "vegetarianus": false},
    {"nev": "Mixi", "kategorianev": "főnemes", "vegetarianus": true},
    {"nev": "Nikó", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Nordic", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Nyuszó-Muszó", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Pacalos", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Pástétomos", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Pásztor", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Pipis", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Popey", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Quattro", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Ráki", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Rettenetes magyar", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Röfi", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Sajtos", "kategorianev": "apród", "vegetarianus": true},
    {"nev": "So-ku", "kategorianev": "apród", "vegetarianus": false},
    {"nev": "Son-go-ku", "kategorianev": "főnemes", "vegetarianus": true},
    {"nev": "Sonkás", "kategorianev": "apród", "vegetarianus": false},
    {"nev": "Spanyol", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Spencer", "kategorianev": "főnemes", "vegetarianus": false},
    {"nev": "Szalámis", "kategorianev": "apród", "vegetarianus": false},
    {"nev": "Szardíniás", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Szerzetes", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Szőke kapitány", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Tenger gyümölcsei", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Tonhalas", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Törperős", "kategorianev": "lovag", "vegetarianus": false},
    {"nev": "Tündi kedvence", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Tüzes halál", "kategorianev": "király", "vegetarianus": false},
    {"nev": "Vega", "kategorianev": "lovag", "vegetarianus": true},
    {"nev": "Zöldike", "kategorianev": "főnemes", "vegetarianus": true}
];

window.onload = function() {
    printArray();
};

function printArray() {
    var table = document.getElementById("pizzaTable").getElementsByTagName('tbody')[0];
    table.innerHTML = "";
    for (var i = 0; i < array1.length; i++) {
        var newRow = table.insertRow(table.rows.length);
        newRow.insertCell(0).innerHTML = array1[i].nev;
        newRow.insertCell(1).innerHTML = array1[i].kategorianev;
        newRow.insertCell(2).innerHTML = array1[i].vegetarianus ? "Igen" : "Nem";
        
        newRow.insertCell(3).innerHTML = `
            <button onClick="onEdit(${i})">Szerkeszt</button> 
            <button onClick="onDelete(${i})">Töröl</button>`;
    }
}

function readFormData() {
    return {
        nev: document.getElementById("pizzaNev").value,
        kategorianev: document.getElementById("kategoria").value,
        vegetarianus: document.getElementById("isVega").checked
    };
}

function onEdit(index) {
    selectedIndex = index;
    var data = array1[index];
    document.getElementById("pizzaNev").value = data.nev;
    document.getElementById("kategoria").value = data.kategorianev;
    document.getElementById("isVega").checked = data.vegetarianus;
}

function resetForm() {
    document.getElementById("pizzaNev").value = "";
    document.getElementById("kategoria").value = "";
    document.getElementById("isVega").checked = false;
    selectedIndex = null;
}

function validate() {
    var isValid = true;
    if (document.getElementById("pizzaNev").value == "") {
        isValid = false;
        document.getElementById("nevValidationError").classList.remove("hide");
    } else {
        document.getElementById("nevValidationError").classList.add("hide");
    }
    return isValid;
}
