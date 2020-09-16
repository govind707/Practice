const intialState = {
    person: []
}

const reducer = (state = intialState, action)=>{
    if(action.type === 'AddPerson'){
        return {
            ...state,
            person: this.state.person.concat({name: 'Master', age: action.age, id: action.id})
        }
    }
    if(action.type=== 'Delete'){
        const updatedArray = state.person.filter(result => result.id !== action.eleId)
            return {
                ...state,
                results: updatedArray
            } 
    }

    return state;
}

export default reducer;