import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

//* El objetivo de este módulo es exportar todos los módulos que voy a necesitar

@NgModule({
  declarations: [],
  exports: [
      MenubarModule,
      MenuModule,
    ]
})
export class PrimeNgModule { }
