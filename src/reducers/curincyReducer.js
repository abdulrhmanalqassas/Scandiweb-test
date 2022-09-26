 
 const curincyReducer = (state = { curincy :"USD"},action) => {
    const newState = {...state};

    if (action.type === "switchCurincy" ) {
        newState.curincy = action.value
    }

    // switch (action.type){
    //     case "change" : return state.category = "tech" 
       
    // }
    return newState   
}

export default curincyReducer ;
