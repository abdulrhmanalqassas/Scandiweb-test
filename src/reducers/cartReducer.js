 const cartReducer = (state = { ids :{}},action) => {
    const newState = {...state};

    if (action.type === "add" ) {
        newState.ids[action.value] = 1 
    }
    else if (action.type === "delete"){
        delete newState.ids[action.value]
    }

    return newState   
}

export default cartReducer ;