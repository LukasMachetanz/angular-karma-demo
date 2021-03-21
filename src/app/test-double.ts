import { Ttransformer } from '@ttransformer/core';


export function Log<T extends new(...constructorArgs: any[]) => any>(constructorFunction: T) {
  /*
  const newConstructorFunction: any = (...args: any[]) => {
    const func: any = () => {
      return new constructorFunction(...args);
    };
    func.prototype = constructorFunction.prototype;
    const result: any = new func();
    return result;
  };

  newConstructorFunction.prototype = constructorFunction.prototype;

  return newConstructorFunction;
   */

  console.dir(constructorFunction);
}

/*
export function Log() {
  return (OriginalComponent: any) => {
    console.log("HEREEEE")
    console.dir(OriginalComponent);
  }
}
 */

export function TestDouble() {
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



/*
import { ɵComponentDef } from '@angular/core';
import { Ttransformer } from "@ttransformer/core";

type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export function TestDouble() {
  return (OriginalComponent) => {
    console.log("TestDouble");

    const propertyNames = Object.getOwnPropertyNames(OriginalComponent.prototype).filter((propertyName) => propertyName !== 'constructor')
    const spyObj = jasmine.createSpyObj(OriginalComponent, propertyNames);


    Object.defineProperty(OriginalComponent, 'ɵfac', {
      get(): any {
        return () => {
          if (Ttransformer.isInTransformContext()) {
            console.log("=== TestDouble ===");
            Ttransformer.register(OriginalComponent, spyObj);
            return spyObj;
          } else {
            console.log("=== Original ===")
            return new OriginalComponent();
          }
        };
      },
    });

    const propertyNames = Object.getOwnPropertyNames(OriginalComponent.prototype).filter((propertyName) => propertyName !== 'constructor');

    console.log(propertyNames);

    console.log(OriginalComponent);

    if (!propertyNames.includes('ngOnDestroy')) {
      propertyNames.push('ngOnDestroy');
    }

    const spyObj = jasmine.createSpyObj(OriginalComponent.name, propertyNames);

    Object.defineProperty(OriginalComponent, 'ɵfac', {
      get(): any {
        return () => {
          console.log("#ɵfac");
          if (Ttransformer.isInTransformContext()) {
            Ttransformer.register(OriginalComponent, spyObj);
            return spyObj;
          } else {
            return new OriginalComponent(); // TODO: What is with dependencies? Call original factory function ?!
          }
        };
      },
      set(_: any) {}
    });

    const originalComponentDefinition = { ... OriginalComponent.ɵcmp };
    // Writeable<ɵComponentDef<any>>
    const testDoubleComponentDefinition: any = { ...OriginalComponent.ɵcmp };
    testDoubleComponentDefinition.onDestroy = () => {
      Ttransformer.unregister(OriginalComponent, spyObj)
    };
    testDoubleComponentDefinition.template = (rf, ctx) => {
      if (Ttransformer.isInTransformContext()) {
        if (rf & 1) {}
      } else {
        originalComponentDefinition.template(rf, ctx);
      }
    };

    Object.defineProperty(OriginalComponent, 'ɵcmp', {
      get(): any {
        return testDoubleComponentDefinition; // TODO: return original component definition if not in transform context
      },
      set(_: any) {}
    });

    console.dir(OriginalComponent);

    return OriginalComponent;
  };

}
 */
