import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTrumbowygModule } from 'ngx-trumbowyg';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTrumbowygModule.withConfig({
      lang: 'hu',
      svgPath: '/assets/ui/icons.svg',
      removeformatPasted: true,
      autogrow: true,
      btns: [
        ['formatting'],
        ['strong', 'em', 'del'],
        ['superscript', 'subscript'],
        ['link'],
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
        ['unorderedList', 'orderedList'],
        ['horizontalRule'],
        ['removeformat'],
        ['fullscreen']
      ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
