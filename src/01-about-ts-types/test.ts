import * as chai from 'chai';
let expect = chai.expect;

// The line below is just here to avoid TS error at compilation
const _: any = null
//

describe('about ts types', () => {
  it('1-should compile to plain javascript', () => {
    let boolean; // _
    let integer; // _
    let float; // _
    let foo; // _
    expect(boolean).to.be.true;
    expect(integer).to.equal(6);
    expect(float).to.equal(Math.PI);
    expect(foo).to.equal('bar');
  });

  it('2-should type arrays', () => {
    let list; // _
    expect(list.length).to.equal(2);
  });

  it('3-should type tuples', () => {
    let tupple; // _
    expect(tupple[0]).to.equal(42);
    expect(tupple[1]).to.equal('foo');
  });

  it('4-should type enums', () => {
    const myAwesomeEnum: any = null; // _
    expect(myAwesomeEnum.ACTIVE).to.equal(0);
    expect(myAwesomeEnum[2]).to.equal('INACTIVE');
  });

  it('5-should type null and undefined', () => {
    let nullVar; // _
    let undefinedVar;
    expect(nullVar).to.be.null;
    expect(undefinedVar).to.be.undefined;
  });

  it('6-should work in functions arguments too', () => {
    function sayHello(name) {
      return 'Hello '.concat(name);
    }
    expect(sayHello('TypeScript')).to.equal( _ ); // replace the _
  });

  it('7-should infer the type', () => {
    function add(a, b) {
      return a + b;
    }
    expect(add(17, '25')).to.equal( _ ); // replace the _
  });
});
