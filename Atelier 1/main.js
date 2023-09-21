const personnes = [
    ["yuba", "tinghir", 23],
    ["hamza", "iknioune", 18],
    ["hassan", "bomalne", 27],
];

function addPerson() {
    const nom = prompt("Entrez le nom:");
    const ville = prompt("Entrez la ville:");
    const age = parseInt(prompt("Entrez l'âge:"));

    if (nom && ville && !isNaN(age)) {
       
        personnes.push([nom, ville, age]);
        
       
        const tableauHTML = document.getElementById("table");
        tableauHTML.innerHTML = "";

        
        const table = document.createElement("table");
        
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");

        const headers = ["Prénom", "Ville", "Âge"];
        headers.forEach((headerText) => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement("tbody");

        personnes.forEach((personne) => {
            const row = document.createElement("tr");
            personne.forEach((valeur) => {
                const cell = document.createElement("td");
                cell.textContent = valeur;

                row.appendChild(cell);
            });

            tbody.appendChild(row);
        });

        table.appendChild(tbody);

        tableauHTML.appendChild(table);
    } else {
        alert("Veuillez saisir des valeurs valides.");
    }
}

document.getElementById("ajouterPersonne").addEventListener("click", addPerson);
