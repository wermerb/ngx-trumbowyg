import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTrumbowygComponent } from './ngx-trumbowyg.component';

describe('NgxTrumbowygComponent', () => {
  let component: NgxTrumbowygComponent;
  let fixture: ComponentFixture<NgxTrumbowygComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTrumbowygComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTrumbowygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
