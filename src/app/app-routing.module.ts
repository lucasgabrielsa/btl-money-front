import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';


const routes: Routes = [
  { path: '*', component: LancamentoCadastroComponent },
  { path: 'lancamentos/cadastro', component: LancamentoCadastroComponent },
  { path: 'lancamentos/pesquisa', component: LancamentosPesquisaComponent },
  { path: 'pessoas/cadastro', component: PessoasCadastroComponent },
  { path: 'pessoas/pesquisa', component: PessoasPesquisaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
