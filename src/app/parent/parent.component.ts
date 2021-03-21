import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from '../child/child.component';
import {Ttransformer} from '@ttransformer/core';

export function TestDoublee() {
  return (OriginalComponent: any) => {

    const originalComponentCopy = { ...OriginalComponent };

    Object.defineProperty(OriginalComponent, 'ctorParameters', {
      get(): any {
        if (Ttransformer.isInTransformContext()) {
          return () => [];
        } else {
          return originalComponentCopy.ctorParameters;
        }
      }
    });

    const originalComponentDefinition = { ... OriginalComponent.ɵcmp };
    const testDoubleComponentDefinition = { ...OriginalComponent.ɵcmp };

    testDoubleComponentDefinition.template = (rf: any, ctx: any) => {
      if (!Ttransformer.isInTransformContext()) {
        originalComponentDefinition.template(rf, ctx);
      }
    };

    Object.defineProperty(OriginalComponent, 'ɵcmp', {
      get(): any {
        if (Ttransformer.isInTransformContext()) {
          return testDoubleComponentDefinition;
        } else {
          return originalComponentDefinition;
        }
      },
    });

    /*
    const propertyNames = Object.getOwnPropertyNames(OriginalComponent.prototype).filter((propertyName) => {
      return propertyName !== 'constructor';
    });
    console.log(propertyNames);
    const spyObj: any = jasmine.createSpyObj(OriginalComponent, propertyNames);


    Object.defineProperty(OriginalComponent, 'ɵfac', {
      get(): any {
        return () => {
          console.log("FAKE")
          Ttransformer.register(OriginalComponent, spyObj);
          return spyObj;
          // return new OriginalComponent();
        };
      }
    });

    const testDoubleComponentDefinition: any = { ...OriginalComponent.ɵcmp };
    testDoubleComponentDefinition.template = () => {};

    Object.defineProperty(OriginalComponent, 'ɵcmp', {
      get(): any {
        return testDoubleComponentDefinition;
      },
    });
     */

    // console.dir(testDoubleComponentDefinition);
    console.dir(OriginalComponent);

    return OriginalComponent;
  };
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  @ViewChild(ChildComponent)
  public childComponent: ChildComponent | undefined;

  constructor() { }

  public lol(): void {
    this.childComponent?.greetMe();
  }

}
