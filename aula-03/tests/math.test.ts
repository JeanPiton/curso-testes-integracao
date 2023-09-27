import calculator from "calculator"
describe("Calculator", ()=>{
    it("sum",()=>{
        expect(calculator.sum(1,2)).toBe(3)
    })
    it("sub",()=>{
        expect(calculator.sub(2,1)).toBe(1)
    })
    it("div",()=>{
        expect(calculator.div(4,2)).toBe(2)
    })
    it("mul",()=>{
        expect(calculator.mul(4,2)).toBe(8)
    })
})