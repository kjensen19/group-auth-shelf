const shelfReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ITEMS':
        console.log('IN SHELF REDUCER:', action.payload)
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default shelfReducer;