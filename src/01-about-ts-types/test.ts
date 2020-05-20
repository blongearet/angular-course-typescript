import * as chai from 'chai';
let expect = chai.expect;

// The line below is just here to avoid TS error at compilation
const _: any = null
//

describe('about ts types', () => {
  it('1-should compile to plain javascript', () => {
    /** Ennoncé
    var boolean; // _
    var integer; // _
    var float; // _
    var foo; // _
    expect(boolean).to.be.true;
    expect(integer).to.equal(6);
    expect(float).to.equal(Math.PI);
    expect(foo).to.equal('bar');
     */

    var boolean: boolean = true;
    var integer: number = 6;
    var float: number = Math.PI;
    var foo: string = 'bar';
    expect(boolean).to.be.true;
    expect(integer).to.equal(6);
    expect(float).to.equal(Math.PI);
    expect(foo).to.equal('bar');
  });

  it('2-should type arrays', () => {
    /** Ennoncé
    let list; // _
    expect(list.length).to.equal(2);
    */

    var list: number[] = [0, 1];
    expect(list.length).to.equal(2);
  });

  it('3-should type tuples', () => {
    /** Ennoncé
    let tupple; // _
    expect(tupple[0]).to.equal(42);
    expect(tupple[1]).to.equal('foo');
    */

    var tupple: [number, string] = [42, 'foo'];
    expect(tupple[0]).to.equal(42);
    expect(tupple[1]).to.equal('foo');
  });

  it('4-should type enums', () => {
    /** Ennoncé
    const myAwesomeEnum: any = null; // _
    expect(myAwesomeEnum.ACTIVE).to.equal(0);
    expect(myAwesomeEnum[2]).to.equal('INACTIVE');
    */

    enum myAwesomeEnum {
      ACTIVE, DELETED, INACTIVE
    }
    expect(myAwesomeEnum.ACTIVE).to.equal(0);
    expect(myAwesomeEnum[2]).to.equal('INACTIVE');
  });

  it('5-should type null and undefined', () => {
    /** Ennoncé
    let nullVar; // _
    let undefinedVar;
    expect(nullVar).to.be.null;
    expect(undefinedVar).to.be.undefined;
    */

    var nullVar: null = null;
    var undefinedVar: undefined = undefined;
    expect(nullVar).to.be.null;
    expect(undefinedVar).to.be.undefined;
  });

  it('6-should work in functions arguments too', () => {
    /** Ennoncé
    function sayHello(name) {
      return 'Hello '.concat(name);
    }
    expect(sayHello('TypeScript')).to.equal( _ ); // replace the _
    */

    function sayHello(name: string) {
      return 'Hello '.concat(name);
    }
    expect(sayHello('TypeScript')).to.equal( 'Hello TypeScript' );
  });

  it('7-should infer the type', () => {
    /** Ennoncé
    function add(a, b) {
      return a + b;
    }
    expect(add(17, '25')).to.equal( _ ); // replace the _
    */

    function add(a: any, b: any) {
      return a + b;
    }
    expect(add(17, '25')).to.equal( '1725' );
  });
});
