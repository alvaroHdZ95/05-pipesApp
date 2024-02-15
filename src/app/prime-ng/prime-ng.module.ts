import { NgModule } from '@angular/core';

// import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { TableModule } from "primeng/table";
import { ToolbarModule } from "primeng/toolbar";

//* El objetivo de este módulo es exportar todos los módulo de PrimeNG que voy a necesitar

@NgModule({
  declarations: [],
  exports: [
    // MenuModule,
      ButtonModule,
      CardModule,
      FieldsetModule,
      MenubarModule,
      PanelModule,
      TableModule,
      ToolbarModule
    ]
})
export class PrimeNgModule { }
