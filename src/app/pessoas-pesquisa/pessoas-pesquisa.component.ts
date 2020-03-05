import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pessoas-pesquisa",
  templateUrl: "./pessoas-pesquisa.component.html",
  styleUrls: ["./pessoas-pesquisa.component.css"]
})
export class PessoasPesquisaComponent implements OnInit {
  pessoas = [
    {
      codigo: 1,
      nome: "Lucas Gabriel",
      cidade: "Uberlândia",
      estado: "MG",
      status: true
    },
    {
      codigo: 2,
      nome: "Thiago Henrique",
      cidade: "Uberlândia",
      estado: "MG",
      status: false
    },
    {
      codigo: 3,
      nome: "Tálita Rodrigues",
      cidade: "Rotterdam",
      estado: "NL",
      status: true
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  inativar(lancamento: any) {
    console.log(lancamento);
  }

  ativar(lancamento: any) {
    console.log(lancamento);
  }
}
