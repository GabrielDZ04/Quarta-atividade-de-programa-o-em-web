const precos = {
    gasolina: 6.69,
    etanol: 5.80,
    diesel: 6.20
};

const combustivel = document.getElementById("combustivel");
const litros = document.getElementById("litros");
const resultado = document.getElementById("resultado");
const form = document.getElementById("formCombustivel");

const formatarMoeda = (valor) => {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
};

const calcularAbastecimento = (precoCombustivel, quantidadeLitros) => {
    const valorTotal = precoCombustivel * quantidadeLitros;
    resultado.textContent = formatarMoeda(valorTotal);
};

const atualizarValor = () => {
    const tipo = combustivel.value;
    const valorLitros = litros.value.trim();
    const quantidadeLitros = Number(valorLitros);

    if (tipo === "" && valorLitros === "") {
        resultado.textContent = "R$ 0,00";
        return;
    }

    if (tipo === "") {
        alert("Selecione o tipo de combustível.");
        resultado.textContent = "R$ 0,00";
        return;
    }

    if (valorLitros === "") {
        alert("Digite a quantidade de litros.");
        resultado.textContent = "R$ 0,00";
        return;
    }

    if (isNaN(quantidadeLitros) || quantidadeLitros < 0) {
        alert("Digite um número válido maior ou igual a zero.");
        resultado.textContent = "R$ 0,00";
        return;
    }

    const precoPorLitro = precos[tipo];

    if (precoPorLitro === undefined) {
        alert("Escolha uma opção válida.");
        resultado.textContent = "R$ 0,00";
        return;
    }

    calcularAbastecimento(precoPorLitro, quantidadeLitros);
};

combustivel.addEventListener("change", atualizarValor);
litros.addEventListener("input", atualizarValor);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    atualizarValor();
});
