import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandGrandChildComponent } from './grand-grand-child.component';

describe('GrandGrandChildComponent', () => {
  let component: GrandGrandChildComponent;
  let fixture: ComponentFixture<GrandGrandChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandGrandChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
