import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chatmessage2Component } from './chatmessage2.component';

describe('Chatmessage2Component', () => {
  let component: Chatmessage2Component;
  let fixture: ComponentFixture<Chatmessage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chatmessage2Component]
    });
    fixture = TestBed.createComponent(Chatmessage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
