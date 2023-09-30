document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  const resultadoDiv = document.getElementById("resultado");
  const prestacaoMensal = document.getElementById("prestacao-mensal");
  const custoTotal = document.getElementById("custo-total");
  const agradecimento = document.getElementById("agradecimento");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const renda = parseFloat(document.getElementById("renda").value);
    const valorEmprestimo = parseFloat(
      document.getElementById("valor-emprestimo").value
    );
    const prazoEmprestimo = parseInt(
      document.getElementById("prazo-emprestimo").value
    );

    const taxaJuros = 0.005;
    const prestacao =
      (valorEmprestimo * taxaJuros) /
      (1 - Math.pow(1 + taxaJuros, -prazoEmprestimo));
    const custo = prestacao * prazoEmprestimo;

    prestacaoMensal.textContent = `Valor das prestações mensais: R$${prestacao.toFixed(
      2
    )}`;
    custoTotal.textContent = `Custo total do empréstimo: R$${custo.toFixed(2)}`;
    resultadoDiv.classList.remove("hidden");

    agradecimento.textContent = `Obrigado, ${nome}, por usar nossa Calculadora Financeira!`;
  });
});
