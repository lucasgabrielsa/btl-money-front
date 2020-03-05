import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabViewModule } from "primeng/tabview";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { TooltipModule } from "primeng/tooltip";
import { InputTextareaModule } from "primeng/inputtextarea";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule
  ],
  exports: [
    CommonModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule
  ]
})
export class PrimeNgModuleCustom {}
