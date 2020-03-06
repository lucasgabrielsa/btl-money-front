import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lancamento-cadastro",
  templateUrl: "./lancamento-cadastro.component.html",
  styleUrls: ["./lancamento-cadastro.component.css"]
})
export class LancamentoCadastroComponent implements OnInit {
  tiposLancamentos = [
    {
      label: "Receita",
      value: "RECEITA"
    },
    {
      label: "Despesa",
      value: "DESPESA"
    }
  ];

  categorias = [
    {
      label: "Transporte",
      value: 1
    },
    {
      label: "Saúde",
      value: 1
    }
  ];

  pessoas = [
    {
      label: "Thiago Henrique",
      value: 1
    },
    {
      label: "Lucas Gabriel Simão Alves",
      value: 1
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
