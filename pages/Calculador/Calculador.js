const ContadoDiv = document.getElementById("Contado");

const formatoPesos = new Intl.NumberFormat("es-AR", {
    maximumFractionDigits: 0
});

// Input Contado

const precioContadoInput = document.getElementById("precio-contado");

precioContadoInput.addEventListener("change", (e) => {
    e.preventDefault();
    const precio = parseInt(e.target.value);

    if (isNaN(precio)) {
        return;
    } else {
        ContadoDiv.innerHTML = "";
        renderContado(precio);
    }
});

// Input Financiado

const precioFinanciadoInput = document.getElementById("precio-financiado");

precioFinanciadoInput.addEventListener("change", (e) => {
    e.preventDefault();
    const precio = parseInt(e.target.value);

    if (isNaN(precio)) {
        return;
    } else {
        FinanciadoDiv.innerHTML = "";
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


                // Calculador Tarjetas de credito

const tarjetaInput = document.getElementById("tarjeta-input");

tarjetaInput.addEventListener("change", (e) => {
    e.preventDefault();
    const precio = parseInt(e.target.value);
    console.log(precio);

    if (isNaN(precio)) {
        renderNaranja(0);
        renderBancarizada(0);
        return;
    } else {
        renderNaranja(precio);
        renderBancarizada(precio);
    }
});

            // Render Tarjeta Naranja

const naranjaCuotaZ = document.getElementById("n-z-cuota");
const naranjaLimiteZ = document.getElementById("n-z-limite");

const naranjaCuota6 = document.getElementById("n-6-cuota");
const naranjaLimite6 = document.getElementById("n-6-limite");

const naranjaCuota8 = document.getElementById("n-8-cuota");
const naranjaLimite8 = document.getElementById("n-8-limite");

const naranjaCuota10 = document.getElementById("n-10-cuota");
const naranjaLimite10 = document.getElementById("n-10-limite");

const naranjaCuota12 = document.getElementById("n-12-cuota");
const naranjaLimite12 = document.getElementById("n-12-limite");

const naranjaCuota18 = document.getElementById("n-18-cuota");
const naranjaLimite18 = document.getElementById("n-18-limite");


 const renderNaranja = (precio) => {

    const limiteZ = (precio * 0.09) + precio;
    const cuotaZ = Math.round(limiteZ / 3);

    naranjaCuotaZ.innerHTML = `$${formatoPesos.format(cuotaZ)}`;
    naranjaLimiteZ.innerHTML = `$${formatoPesos.format(limiteZ)}`;

    const limite6 = (precio * 0.11) + precio;
    const cuota6 = Math.round(limite6 / 6);

    naranjaCuota6.innerHTML = `$${formatoPesos.format(cuota6)}`;
    naranjaLimite6.innerHTML = `$${formatoPesos.format(limite6)}`;

    const limite8 = (precio * 0.15) + precio;
    const cuota8 = Math.round(limite8 / 8);

    naranjaCuota8.innerHTML = `$${formatoPesos.format(cuota8)}`;
    naranjaLimite8.innerHTML = `$${formatoPesos.format(limite8)}`;

    const limite10 = (precio * 0.15) + precio;
    const cuota10 = Math.round(limite10 / 10);

    naranjaCuota10.innerHTML = `$${formatoPesos.format(cuota10)}`;
    naranjaLimite10.innerHTML = `$${formatoPesos.format(limite10)}`;

    const limite12 = (precio * 0.16) + precio;
    const cuota12 = Math.round(limite12 / 12);

    naranjaCuota12.innerHTML = `$${formatoPesos.format(cuota12)}`;
    naranjaLimite12.innerHTML = `$${formatoPesos.format(limite12)}`;

    const limite18 = (precio * 0.38) + precio;
    const cuota18 = Math.round(limite18 / 18);

    naranjaCuota18.innerHTML = `$${formatoPesos.format(cuota18)}`;
    naranjaLimite18.innerHTML = `$${formatoPesos.format(limite18)}`;
};


// Render Tarjeta Bancarizada

const bancarizadaCuota3 = document.getElementById("b-3-cuota");
const bancarizadaLimite3 = document.getElementById("b-3-limite");

const bancarizadaCuota6 = document.getElementById("b-6-cuota");
const bancarizadaLimite6 = document.getElementById("b-6-limite");

const bancarizadaCuota9 = document.getElementById("b-9-cuota");
const bancarizadaLimite9 = document.getElementById("b-9-limite");

const bancarizadaCuota12 = document.getElementById("b-12-cuota");
const bancarizadaLimite12 = document.getElementById("b-12-limite");

const bancarizadaCuota18 = document.getElementById("b-18-cuota");
const bancarizadaLimite18 = document.getElementById("b-18-limite");

const bancarizadaCuota24 = document.getElementById("b-24-cuota");
const bancarizadaLimite24 = document.getElementById("b-24-limite");

const renderBancarizada = (precio) => {

    const limite3 = (precio * 0.0971) + precio;
    const cuota3 = Math.round(limite3 / 3);

    bancarizadaCuota3.innerHTML = `$${formatoPesos.format(cuota3)}`;
    bancarizadaLimite3.innerHTML = `$${formatoPesos.format(limite3)}`;

    const limite6 = (precio * 0.1592) + precio;
    const cuota6 = Math.round(limite6 / 6);

    bancarizadaCuota6.innerHTML = `$${formatoPesos.format(cuota6)}`;
    bancarizadaLimite6.innerHTML = `$${formatoPesos.format(limite6)}`;

    const limite9 = (precio * 0.242) + precio;
    const cuota9 = Math.round(limite9 / 9);

    bancarizadaCuota9.innerHTML = `$${formatoPesos.format(cuota9)}`;
    bancarizadaLimite9.innerHTML = `$${formatoPesos.format(limite9)}`;

    const limite12 = (precio * 0.3351) + precio;
    const cuota12 = Math.round(limite12 / 12);

    bancarizadaCuota12.innerHTML = `$${formatoPesos.format(cuota12)}`;
    bancarizadaLimite12.innerHTML = `$${formatoPesos.format(limite12)}`;

    const limite18 = (precio * 0.4697) + precio;
    const cuota18 = Math.round(limite18 / 18);

    bancarizadaCuota18.innerHTML = `$${formatoPesos.format(cuota18)}`;
    bancarizadaLimite18.innerHTML = `$${formatoPesos.format(limite18)}`;

    const limite24 = (precio * 0.625) + precio;
    const cuota24 = Math.round(limite24 / 24);

    bancarizadaCuota24.innerHTML = `$${formatoPesos.format(cuota24)}`;
    bancarizadaLimite24.innerHTML = `$${formatoPesos.format(limite24)}`;


};