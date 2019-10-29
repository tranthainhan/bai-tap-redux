let initialState = false;

const reducer = (state = initialState, action) => {
    return action.type === 'toggleModal' ? !state : state 
}
export default reducer;