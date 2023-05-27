import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ruleta6a12Component } from './ruleta6a12.component';

describe('Ruleta6a12Component', () => {
  let component: Ruleta6a12Component;
  let fixture: ComponentFixture<Ruleta6a12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ruleta6a12Component]
    });
    fixture = TestBed.createComponent(Ruleta6a12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
