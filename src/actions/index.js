export function selectBook(book){
  // selectBook is an ActionCreator, it need to return an action, an object with type property
  return {
    type: 'BOOK_SELECTED', // always contain a type
    payload: book // more information about the action taken
  }
}
