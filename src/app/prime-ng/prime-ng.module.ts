import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabViewModule } from "primeng/tabview";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { TooltipModule } from "primeng/tooltip";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  exports: [
    CommonModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ]
})
export class PrimeNgModuleCustom {}
