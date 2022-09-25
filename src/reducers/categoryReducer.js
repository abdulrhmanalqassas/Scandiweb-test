 
 const categoryReducer = (state = { category :"all"},action) => {
    const newState = {...state};

    if (action.type === "change" ) {
        newState.category = action.value
    }
    // switch (action.type){
    //     case "change" : return state.category = "tech" 
       
    // }
    return newState   
}

export default categoryReducer ;
