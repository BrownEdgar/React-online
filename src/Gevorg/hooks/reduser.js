

export const initialValue = [];

export const ACTIONTYPES = {
  ADD: "ADD",
  DELETE: "DELETE",
  RANDOM: "RADOM"
}

function reduser(state, action) {
  switch (action.type) {
    case ACTIONTYPES.ADD: return addItem(state, action.payload)
    case ACTIONTYPES.DELETE: return deleteItem(state)
    case ACTIONTYPES.SORT: return sortItem(state)
    default: return state
  }
}



const deleteItem = (state) => {
  const min = Math.min(...state);
  return state.filter(num => num !== min)
}

const addItem = (state, item) => {
  const add = [...state]
  add.push(item)
  return add

}

const sortItem = (state) => {

  return state.toSorted((a, b) => a - b)
}

export default reduser;