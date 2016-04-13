// state argument is not application, it is just a state that this reducer is responsible for ...
export default function(state = null, action) {

    switch(action.type){
      case 'BOOK_SELECTED' :
        return action.payload;
    }

  // return current state if this reducer doesnt concern about the action
  return state;

}
