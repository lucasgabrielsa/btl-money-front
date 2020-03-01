import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lancamentos-pesquisa",
  templateUrl: "./lancamentos-pesquisa.component.html",
  styleUrls: ["./lancamentos-pesquisa.component.css"]
})
export class LancamentosPesquisaComponent implements OnInit {
  lancamentos = [
    {
      codigo: 1,
      descricao: "Macarrão Quatro Queijo",
      dataVencimento: "2020-02-25",
      dataPagamento: "2020-02-25",
      valor: 28.9,
      tipo: "RECEITA",
      categoria: "Alimentação",
      pessoa: "Lucas Gabriel"
    },
    {
      codigo: 2,
      descricao: "Academia",
      dataVencimento: "2020-02-25",
      dataPagamento: "2020-02-25",
      valor: 28.9,
      tipo: "DESPESA",
      categoria: "Saúde",
      pessoa: "Lucas Gabriel"
    },
    {
      codigo: 3,
      descricao: "Supermercado",
      dataVencimento: "2020-02-26",
      dataPagamento: "2020-02-26",
      valor: 1289,
      tipo: "DESPESA",
      categoria: "Compras",
      pessoa: "Lucas Gabriel"
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
