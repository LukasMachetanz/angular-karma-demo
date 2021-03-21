import {Ttransformer} from '@ttransformer/core';

/**
 * Rename the original class to OriginalClass_Original
 */

export class FooCmp_Impl {
  public myProperty: any;

  public myFunction(): void {}

  public set mySetter(value: any) {}

  public get myGetter(): number {
    return 0;
  }
}

/**
 * Add this statements underneath the class declaration
 */

export let FooCmp = FooCmp_Impl;

/**
 * This has to be called in the beforeEach / afterEach
 */
export function setFooCmp(impl = FooCmp_Impl) {
  FooCmp = impl;
}



function Log3(): (target: any, methodName: string, descriptor: PropertyDescriptor) => PropertyDescriptor {
  return (target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    console.log('Method decoratorrrrr!');

    return {
      value: jasmine.createSpy(methodName),
      writable: true
    };
  };
}

/**
 * Copy original class and apply this decorator
 * Rename the class to OriginalClass_TestDouble
 */
function TestDouble() {
  // tslint:disable-next-line:only-arrow-functions
  return (target: any) => {

    for (const key of Object.getOwnPropertyNames(target.prototype)) {
      const originalDescriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

      if (originalDescriptor) {
        const newDescriptor = Log3()(target, key, originalDescriptor);
        Object.defineProperty(target.prototype, key, newDescriptor);
      }
    }

    console.log(target);
    /*
    console.dir(OriginalComponent);

    // console.log(Object.getOwnPropertyNames(OriginalComponent));

    const propertyNames = Object.getOwnPropertyNames(OriginalComponent.prototype);
    console.log(propertyNames);

     */

  };
}

@TestDouble()
export class Here {
  public myProperty: any;

  public myFunction(): void {}

  public set mySetter(value: any) {}

  public get myGetter(): number {
    return 0;
  }
}
