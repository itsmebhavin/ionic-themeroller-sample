import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TododetailPage } from './tododetail.page';

describe('TododetailPage', () => {
  let component: TododetailPage;
  let fixture: ComponentFixture<TododetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TododetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TododetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
