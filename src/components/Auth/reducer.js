export const initialState = {
  data: [],
  quantity: 0,
  loading: false,
};

export const ACTIONTYPES = {
  SAVE: "SAVE",
  JSONSAVE: "JSONSAVE"
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONTYPES.SAVE:
      return { ...state, data: [...state.data, payload] };
    case ACTIONTYPES.JSONSAVE:
      return { ...state, data: payload };

    default:
      return state;
  }
};
