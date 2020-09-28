const printName = (name) => {
    return name;
}


describe("will give your name", () => {
    it("your name", () => {
        expect(printName("Govind")).to.equal("Govind");
    });
});