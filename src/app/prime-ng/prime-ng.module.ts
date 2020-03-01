import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabViewModule } from "primeng/tabview";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    TableModule
  ],
  exports: [
    CommonModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    TableModule
  ]
})
export class PrimeNgModuleCustom {}
