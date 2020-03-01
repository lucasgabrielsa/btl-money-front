import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "btl-money-front";

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
}
