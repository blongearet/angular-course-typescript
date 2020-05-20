export function logConstructor(constructor: Function) {
  console.info(`Create constructor ${constructor['name']}`);
}

export function logMethod(target: any, key: string, descriptor: TypedPropertyDescriptor<any>): any {
  if(descriptor === undefined) {
    descriptor = Object.getOwnPropertyDescriptor(target, key);
  }

  let originalMethod = descriptor.value;
  descriptor.value = (...args: any[]) => {
    var a = args.map(function (a) { return JSON.stringify(a); }).join();
    // note usage of originalMethod here
    var result = originalMethod.apply(this, args);
    var r = JSON.stringify(result);
    console.info("Call: " + key + "(" + a + ") => " + r);
    return result;
  };
  
  return descriptor;
}