import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';

//* El objetivo de este módulo es exportar todos los módulos que voy a necesitar

@NgModule({
  declarations: [],
  exports: [
      MenuModule,
    ]
})
export class PrimeNgModule { }
