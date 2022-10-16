const categoryReducer = (state = { category: "all" }, action) => {
  const newState = { ...state };

  if (action.type === "change") {
    newState.category = action.value;
  }

  return newState;
};

export default categoryReducer;
