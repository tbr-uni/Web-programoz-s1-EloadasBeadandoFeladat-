
class Pizza {
    constructor(nev, kategorianev) {
        this.nev = nev;
        this.kategorianev = kategorianev;
    }

    
    megjelenit() {
        
        const col = document.createElement('div');
        col.className = 'col-md-4 d-flex align-items-stretch';

        
        const card = document.createElement('div');
        card.className = 'pizza-card w-100'; 

        
        card.innerHTML = `
            <h4 class="text-primary">${this.nev}</h4>
            <hr>
            <p><strong>Kategória:</strong> ${this.kategorianev}</p>
            <div class="mt-auto">
                <span class="badge bg-secondary">Hagyományos</span>
            </div>
        `;

        col.appendChild(card);
        return col;
    }
}


class VegetarianusPizza extends Pizza {
    constructor(nev, kategorianev, jelzes) {
        
        super(nev, kategorianev);
        this.jelzes = jelzes; 
    }

    
    megjelenit() {
       
        const elem = super.megjelenit();
        const card = elem.querySelector('.pizza-card');

        
        card.classList.add('vegi-card');
        
        
        const badgeContainer = card.querySelector('.mt-auto');
        badgeContainer.innerHTML = `<span class="badge-vegi">${this.jelzes}</span>`;

        return elem;
    }
}


async function initApp() {
    const listaKontener = document.getElementById('pizza-lista');

    try {
        
        const response = await fetch('api.php?t=pizza');
        const result = await response.json();
        const pizzak = result.readData;

        
        listaKontener.innerHTML = "";

        
        pizzak.forEach(adat => {
            let pizzaObjektum;

            
            if (adat.vegetarianus == 1) {
                
                pizzaObjektum = new VegetarianusPizza(
                    adat.nev, 
                    adat.kategorianev, 
                    "Vegetáriánus "
                );
            } else {
                
                pizzaObjektum = new Pizza(adat.nev, adat.kategorianev);
            }

           
            const kartyaElem = pizzaObjektum.megjelenit();
            listaKontener.appendChild(kartyaElem);
        });

    } catch (error) {
        console.error("Hiba történt az OOJS alkalmazás futása során:", error);
        listaKontener.innerHTML = `
            <div class="alert alert-danger">
                Hiba az adatok betöltésekor. Ellenőrizd az api.php-t és az adatbázist!
            </div>
        `;
    }
}


document.addEventListener('DOMContentLoaded', initApp);