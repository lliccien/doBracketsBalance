const doBracketsBalance = require('../src/index.js')

const goodData = [
    '()',
    '{}',
    '[]',
    '()[]{}',
    '([{}])',
    'const addOne = value => { return value + 1; };'
]

describe.each(goodData)("is balanced", (input) => {
    test("should returns true for balance brackets", () => {
        expect(doBracketsBalance(input)).toEqual(true)
    })
})


const badData = [
    '(}',
    '{]',
    '[)',
    '([)]{}',
    '({[}])',
    'const addOne = value => { return value + 1; }};'
]

describe.each(badData)("is not balanced", (input) => {
    test("should returns false for balance brackets", () => {
        expect(doBracketsBalance(input)).toEqual(false)
    })
})
