const initialState = {
};

function reducer(state, action) {
  switch (action.type) {
    case "RESET_STATE":
      return initialState;
    default:
      throw new Error();
  }
}

export { initialState, reducer };
