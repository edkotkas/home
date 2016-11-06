/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TictactwoComponent } from './tictactwo.component';

describe('TictactwoComponent', () => {
  let component: TictactwoComponent;
  let fixture: ComponentFixture<TictactwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TictactwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TictactwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
