import { Directive, ElementRef, Inject, Input, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { EditorBase } from '../commons/editor-base';
import { TrumbowygOptions } from '../configs/trumbowyg-options';
import { TRUMBOWYG_OPTIONS } from '../configs/injection-token';

@Directive({
  selector: '[ngxTrumbowygEditor]'
})
export class EditorDirective extends EditorBase {
  @Input() options: TrumbowygOptions | null;

  @Input() placeholder: string | null;

  constructor(
    protected editorControl: NgControl,
    @Inject(TRUMBOWYG_OPTIONS)
    @Optional()
    protected _config: TrumbowygOptions,
    protected _editor: ElementRef
  ) {
    super(editorControl, _config);
  }
}
