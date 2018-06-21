import { NgModule, ModuleWithProviders } from '@angular/core';
import { TrumbowygOptions } from './configs/trumbowyg-options';
import { TRUMBOWYG_OPTIONS } from './configs/injection-token';

@NgModule({
  declarations: [],
  exports: []
})
export class NgxTrumbowygModule {
  static withConfig(options: TrumbowygOptions): ModuleWithProviders {
    return {
      ngModule: NgxTrumbowygModule,
      providers: [{ provide: TRUMBOWYG_OPTIONS, useValue: options }]
    };
  }
}
