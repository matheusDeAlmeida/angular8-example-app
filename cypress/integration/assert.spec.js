/// <reference types="cypress"/>

it("Equality", () => {
    const a = 1;

    expect(a).equal(1);
    expect(a).to.be.equal(1); //
    expect(a, 'deveria ser 1').not.to.be.equal(2);
})

it("Truthy", () => {
    const obj = {
        a: 1,
        b: 2
    }
    const a = true;
    expect(a).to.be.true;
    expect(obj).to.be.deep.equal({a:1, b:2})
})

it("arrays", () => {
    const arr = [1,2,3]
    expect(arr).to.have.members([1,2,3]);
})

it("types", () => {
    const num = 1;
    const str = 'String';

    expect(num).to.be.a("number");
    expect({}).to.be.an("object");
    expect(str).to.match(/^String/);
})