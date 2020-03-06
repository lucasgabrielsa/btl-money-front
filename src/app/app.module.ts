import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PrimeNgModuleCustom } from "./prime-ng/prime-ng.module";
import { LancamentosPesquisaComponent } from "./lancamentos-pesquisa/lancamentos-pesquisa.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PessoasPesquisaComponent } from "./pessoas-pesquisa/pessoas-pesquisa.component";
import { LancamentoCadastroComponent } from "./lancamento-cadastro/lancamento-cadastro.component";
import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavBarComponent,
    PessoasPesquisaComponent,
    LancamentoCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModuleCustom,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgxCurrencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
