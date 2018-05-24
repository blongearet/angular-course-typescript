import * as chai from 'chai';
var expect = chai.expect;

import { logConstructor, logMethod } from './decorators/log';

describe('about decorators', () => {
  var calculator: Calculator,
    logStack: string[] = [];

  console.info = (...args: any[]) => logStack.push(...args);

  @logConstructor
  class Calculator {
    @logMethod
    public double(n: number): number {
      return n * 2;
    }
  }

  beforeEach(() => calculator = new Calculator());

  it('1-should log constructor', () => {
    /** Ennoncé
    expect(logStack).to.eql( _ );
     */
    expect(logStack).to.eql(['Create constructor Calculator']);
  });

  it('2-should log methods', () => {
    /** Ennoncé
    calculator.double(2);
    expect(logStack).to.eql([]);
    */
    calculator.double(2);
    expect(logStack).to.eql([
      'Create constructor Calculator',
      "Call: double(2) => 4"
    ]);
  });
});
