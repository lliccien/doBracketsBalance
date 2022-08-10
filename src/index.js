
const doBracketsBalance = (input) => {
    const brackets = '{}[]()'
    const balance = []

    for (let bracket of input) {
        let bracketsIndex = brackets.indexOf(bracket)

        if (bracketsIndex === -1) {
            continue
        }

        if (bracketsIndex % 2 === 0) {
            balance.push(bracketsIndex+1)
        } else {
            if (balance.length === 0 || balance.pop() !== bracketsIndex) {
                return false
            }
        }
    }

    return balance.length === 0
}

module.exports = doBracketsBalance