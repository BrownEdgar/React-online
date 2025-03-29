
export const initialValue = {
  data: [],
  lastAction: '',
  loading: false,
}

export const ACTIOINTYPES = {
  SAVE: "SAVE",
  SETLOADING: 'SETLOADING'
}


function reducer(state = initialValue, action) {
  switch (action.type) {
    case ACTIOINTYPES.SAVE:
      return { ...state, loading: false, data: action.payload, lastAction: action.type }
    case ACTIOINTYPES.SETLOADING:
      return { ...state, loading: action.payload }
    default: throw new Error("unknown action type")
  }
}


export default reducer;
