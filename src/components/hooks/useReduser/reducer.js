
export const initialValue = 1

export const ACTIOINTYPES = {
  PLUS: "PLUS",
  MINUS: "ZERO",
  ZERO: "ZERO",
  RANDOM: "RANDOM",
}

//  action = { type: 'plus', payload: 3 }

function reducer(state = initialValue, action) {
  switch (action.type) {
    case ACTIOINTYPES.PLUS:
      return state + action.payload
    case ACTIOINTYPES.MINUS:
      return state - action.payload
    case ACTIOINTYPES.ZERO:
      return 0
    case ACTIOINTYPES.RANDOM: return getRandom()

    default: throw new Error("unknown action type")
  }
}

const getRandom = () => {
  return Math.round(Math.random() * 1e3)
}

export default reducer;
