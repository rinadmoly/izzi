const initialState = {
  items: []
}
const reducer = (state = initialState, action) =>{

  switch(action.type){
    case 'DATA_LOADED':
      return {
        items: action.payload
      }

    default:
      return state;
    }  
};  


export default reducer;