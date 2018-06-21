import { NgModule, ModuleWithProviders } from '@angular/core';
import { TrumbowygOptions } from './configs/trumbowyg-options';
import { TRUMBOWYG_OPTIONS } from './configs/injection-token';
import { EditorDirective } from './directive/editor.directive';

@NgModule({
  declarations: [EditorDirective],
  exports: [EditorDirective]
})
export class NgxTrumbowygModule {
  static withConfig(options: TrumbowygOptions): ModuleWithProviders {
    return {
      ngModule: NgxTrumbowygModule,
      providers: [{ provide: TRUMBOWYG_OPTIONS, useValue: options }]
    };
  }
}
