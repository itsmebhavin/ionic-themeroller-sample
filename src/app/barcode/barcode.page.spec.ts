import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodePage } from './barcode.page';

describe('BarcodePage', () => {
  let component: BarcodePage;
  let fixture: ComponentFixture<BarcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
