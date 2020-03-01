import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PrimeNgModuleCustom } from "./prime-ng/prime-ng.module";
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, LancamentosPesquisaComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule, PrimeNgModuleCustom],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
