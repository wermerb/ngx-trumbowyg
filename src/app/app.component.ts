import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription, of } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { TrumbowygOptions } from 'ngx-trumbowyg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  form: FormGroup;

  options: TrumbowygOptions;

  model = '';

  modelWithContent = 'fooBar';

  lazyContent: string;

  private _sub: Subscription;

  constructor(private _fb: FormBuilder) {
    this.options = { lang: 'en' };
    this.form = this._fb.group({
      foo: [{ value: '', disabled: false }]
    });
  }

  ngAfterViewInit(): void {
    this._sub = of('fooBar')
      .pipe(delay(1000))
      .subscribe(string => {
        this.lazyContent = string;
      });
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  toggleDisabled(): void {
    const control = this.form.get('foo');
    if (control.disabled) {
      control.enable();
    } else {
      control.disable();
    }
  }
}
