export const initialState = [];


export const ACTIONTYPES = {
  SAVE: "SAVE",
  SORT: "SORT",
  DELETE_USER: "DELETE_USER",
}


function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTIONTYPES.SAVE:
      return payload;
    case ACTIONTYPES.DELETE_USER:
      return deleteUserById(state, payload.id);
    case ACTIONTYPES.SORT:
      return sortArray(state, payload)
    default:
      return state;
  }
};


const deleteUserById = (state = [], id = 1) => {
  return state.filter(user => user.id !== id)
}

const sortArray = (state = [], { field }) => {
  return state.toSorted((a, b) => a[field].localeCompare(b[field]))
}


export default reducer