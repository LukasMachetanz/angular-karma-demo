import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import {ChildComponent} from '../child/child.component';
// import { ttransform } from '@ttransformer/core';
import {ReactiveFormsModule} from '@angular/forms';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {MockBuilder, MockComponent, MockInstance, MockRender, ngMocks} from 'ng-mocks';
import {ttransform, Ttransformer} from '@ttransformer/core';
import {By} from '@angular/platform-browser';
// import {FooCmp, FooCmp_Impl, Here, setFooCmp} from './test';

// ttransform(ChildComponent);

/*
class Test {
  constructor(private name: string) {
  }
}

function create(Type: any) {
  return new Type("Lukas");
}

describe('ParentComponent', () => {


  it('', () => {
    console.log(create(Test));
  });
});
*/

/*
describe('ParentComponent', () => {
  beforeEach(() => MockBuilder(ParentComponent).mock(ChildComponent));

  beforeEach(() => {
    MockInstance(ChildComponent, 'functionTest', () => 'fake');
  });

  it('', () => {
    const test = MockRender(ParentComponent);
    test.componentInstance.test();
  });
});
 */

ttransform(ChildComponent);

// Attention with fdescribe
describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent, ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('', () => {
    const childComponent = Ttransformer.getInstance(ChildComponent);
    // console.log(childComponent);

    // const instance = fixture.debugElement.query(By.directive(ChildComponent)).componentInstance;
    // instance.functionTest();

    // expect(instance.functionTest).toHaveBeenCalled();

    childComponent?.functionTest();

    // console.log(childComponent?.functionTest());

    expect(childComponent?.inputTest).toBe('input-test');
    expect(childComponent?.setterTest).toBe('setter-test');
    expect(childComponent?.functionTest).toHaveBeenCalled();
  });

  /*
  it('', () => {

  });
   */


  /*
  it('', () => {
    setFooCmp(Here);
    const instance = new FooCmp();
    console.log(instance);

    instance.myFunction();
    instance.mySetter = "LOL";

    (instance as any).myGetter.and.returnValue('GETTER');

    console.log(instance.myGetter);


    expect((instance as any).myFunction).toHaveBeenCalled();
    // expect((instance as any).mySetter).toHaveBeenCalled();


    expect(true).toBe(true);
  });
   */

  /*
  it('should create', () => {

    const childComponent = Ttransformer.getInstance(ChildComponent);

    // const child = new ChildComponent();


    childComponent?.functionTest('function-test');
    expect(childComponent?.functionTest).toHaveBeenCalledWith('function-test');

    expect(true).toBe(true);

    childComponent?.functionTest('function-test');

    expect(childComponent?.inputTest).toBe('input-test');
    expect(childComponent?.setterTest).toBe('setter-test');
    expect(childComponent?.functionTest).toHaveBeenCalledWith('function-test');
  });

  it("", () => {


    class Test {
      public set lol(here: any) {}

      public test() {}
    }

    const here: jasmine.SpyObj<Test> = jasmine.createSpyObj(Test, ["test"]);

    here.lol = '';

    expect(here.lol).toBe('');

  });

  it('', () => {
    expect(true).toBe(true);
  });
  */
});
