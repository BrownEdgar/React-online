

export const initialValue = [154, 42, 1, 87, 695, 36, 2, 10, 39, 9];

export const ACTIONTYPES = {
    ADD: "ADD",
   DELETE: "DELETE",
    ZERO: "ZERO",
    RANDOM: "RADOM"
}

function reduser(state, action) {
switch(action.type) {
case ACTIONTYPES.ADD:  return addItem()
case ACTIONTYPES.DELETE: return deleteItem()
case ACTIONTYPES.ZERO: return 0
case ACTIONTYPES.SORT: return sortItem()
default: return state
}
}



const deleteItem = () => {
    const min = Math.min(...initialValue);
    return initialValue.filter(num => num !== min)
}

const addItem = () => {
    
   const add = [...initialValue].push()
    return add
    
}

const sortItem = () => {
   const sort = [...initialValue].sort((a, b) => a - b)
   return sort
}

export default reduser;