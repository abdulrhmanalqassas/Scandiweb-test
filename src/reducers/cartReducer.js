const cartReducer = (state = { ids: {}, total: 0 }, action) => {
  const newState = { ...state };

  if (action.type === "add") {
    newState.ids[action.value] = { quantity: 1 };
  } else if (action.type === "delete") {
    delete newState.ids[action.value];
  } else if (action.type === "increase") {
    newState.ids[action.value.id].quantity = action.value.value;
  } else if (action.type === "decrease") {
    newState.ids[action.value.id].quantity = action.value.value;
  }
  newState.total = 0;
  let a = Object.keys(newState.ids).map((id) => {
    return newState.ids[id].quantity;
  });
  for (const element of a) {
    newState.total = newState.total + element;
  }
  return newState;
};

export default cartReducer;
