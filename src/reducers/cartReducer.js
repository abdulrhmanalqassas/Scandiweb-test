 const cartReducer = (state = { ids :[]},action) => {
    const newState = {...state};

    if (action.type === "add" ) {
        newState.ids.push(action.value)
    }

    return newState   
}

export default cartReducer ;
