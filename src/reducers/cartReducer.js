 const curincyReducer = (state = { curincy :"USD"},action) => {
    const newState = {...state};

    if (action.type === "switchCurincy" ) {
        newState.curincy = action.value
    }

    return newState   
}

export default curincyReducer ;
