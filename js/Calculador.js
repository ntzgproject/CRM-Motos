function Contado(precio) {
    let Casco = 50000;
    let Arancel = precio * 1.8 / 100;
    console.log("Arancel: " +  Arancel)
    let DGR = precio * 1.5 / 100;
    console.log("DGR: " +  DGR)
    let precioFinal = precio + Arancel + DGR + Casco;
    console.log("Precio Final: " +  precioFinal)
}

// Contado(3414000)
console.log("-----")
console.log("Financiado")

function Financiado(precio){
    const Casco = 62500;
    const Arancel = (precio * 1.8 / 100) * 25 / 100 + (precio * 1.8 / 100);
    console.log("Arancel: " +  Arancel)
    
    const DGR = (precio + Arancel + Casco) * 0.015;
    console.log("DGR: " +  DGR)

    const DGR2 = DGR * 0.25;
    console.log("DGR2: " +  DGR2)

    const DGRFinal = DGR + DGR2;
    console.log("DGRFinal: " +  DGRFinal)

    const precioFinal = Math.round(precio + Arancel + Casco + DGRFinal);
    console.log("Precio Final: " +  precioFinal)
    
}

// Financiado(3414000)

const ContadoDiv = document.getElementById("Contado");

const formatoPesos = new Intl.NumberFormat("es-AR", {
    maximumFractionDigits: 0
});

// Input

const precioInput = document.getElementById("precio");

precioInput.addEventListener("change", (e) => {
    e.preventDefault();
    const precio = parseInt(e.target.value);

    if (isNaN(precio)) {
        return;
    } else {
        ContadoDiv.innerHTML = "";
        renderContado(precio);
        renderFinanciado(precio); 
    }
});


// Contado Render
const renderContado = (precio) => {

    const Casco = 50000;
    const Arancel = precio * 1.8 / 100;
    const DGR = precio * 1.5 / 100;
    const precioFinal = precio + Arancel + DGR + Casco;

    ContadoDiv.innerHTML = `
        <h2>Contado</h2>
        <h3>Precio unidad: $${formatoPesos.format(precio)}</h3>
        <h3>Arancel: $${formatoPesos.format(Arancel)}</h3>
        <h3>DGR: $${formatoPesos.format(DGR)}</h3>
        <h3>Casco: $${formatoPesos.format(Casco)}</h3>
        <h3 class="total">Precio Final: $${formatoPesos.format(precioFinal)}</h3>
    `
}

// Financiado Render

const FinanciadoDiv = document.getElementById("Financiado");

const renderFinanciado = (precio) => {
    const Casco = 62500;
    const Arancel = (precio * 1.8 / 100) * 25 / 100 + (precio * 1.8 / 100);
    const DGR = Math.round((precio + Arancel + Casco) * 0.015);
    const DGR2 = DGR * 0.25;
    const DGRFinal = DGR + DGR2;
    const precioFinal = Math.round(precio + Arancel + Casco + DGRFinal);

    FinanciadoDiv.innerHTML = `
        <h2>Financiado</h2>
        <h3>Precio unidad: $${formatoPesos.format(precio)}</h3>
        <h3>Arancel: $${formatoPesos.format(Arancel)}</h3>
        <h3>DGR: $${formatoPesos.format(DGR)}</h3>
        <h3>DGR2: $${formatoPesos.format(DGR2)}</h3>
        <h3>DGR Total: $${formatoPesos.format(DGRFinal)}</h3>
        <h3>Casco: $${formatoPesos.format(Casco)}</h3>
        <h3 class="total">Precio Final: $${formatoPesos.format(precioFinal)}</h3>
    `
}