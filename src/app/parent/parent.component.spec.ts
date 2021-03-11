import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import {ttransform, Ttransformer } from '@ttransformer/core';
import {ChildComponent} from '../child/child.component';

ttransform(ChildComponent);

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  // let spy: SpyObj<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent, ChildComponent ]
    })
    .compileComponents();
  });

  /*
  it('', () => {
    const instance = Ttransformer.getInstance<ChildComponent>(ChildComponent);
    expect(true).toBe(true);
  });
   */

  it('should create', () => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const instance = Ttransformer.getInstance<ChildComponent>(ChildComponent);

    expect(instance?.test).toBe('test');

    component.lol();

    expect(instance?.greetMe).toHaveBeenCalled();

    expect(component).toBeTruthy();
  });
});
