const attributeReducer = (state = { ids :{}},action) => {
    const newState = {...state};
    let attributes = {}
   if (action.type === "AddAttribute"){
    //    (action.value) 
    
    attributes[action.value.name] = action.value.displayValue
    Object.keys(newState.ids).includes(action.value.id)=== false ?
    newState.ids[action.value.id]={attributes} :
    newState.ids[action.value.id].attributes[action.value.name] = action.value.displayValue
    }

    return newState   
}

export default attributeReducer ;
