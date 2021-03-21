function Spied(): (target: any, methodName: string, descriptor: PropertyDescriptor) => PropertyDescriptor {
  return (target, methodName: string, _: PropertyDescriptor): PropertyDescriptor => {
    return {
      value: jasmine.createSpy(methodName),
      writable: true
    };
  };
}

export function Solution() {
  console.log('SOLUTION');

  return <T extends new(...args: any[]) => {}>(target: T) => {
    const newClass = class extends target {
      constructor(...args: any[]) {
        super(...args);
        console.log('REGISTER');
      }
    };


    const propertyNames = Object.getOwnPropertyNames(target.prototype).filter((name) => name !== 'constructor');

    for (const key of propertyNames) {
      const originalDescriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

      if (originalDescriptor) {
        const newDescriptor = Spied()(target, key, originalDescriptor);
        Object.defineProperty(target.prototype, key, newDescriptor);
      }
    }

    return newClass;
  };

    /*
    const original = target;

    const f: any = (...args: any) => {
      console.log('REGISTER');
      return new original(...args);
    };

    f.prototype = original.prototype;

    return f;
  };
     */

  /*
  return (target) => {
    for (const key of Object.getOwnPropertyNames(target.prototype)) {
      const originalDescriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

      if (originalDescriptor) {
        const newDescriptor = Spied()(target, key, originalDescriptor);
        Object.defineProperty(target.prototype, key, newDescriptor);
      }
    }

    console.dir(target);
  };
   */
}
