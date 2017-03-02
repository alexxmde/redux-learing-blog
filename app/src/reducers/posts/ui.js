let initialState = {
  errorMessage: '',
  activePage: '',
  items:'',
  showModal: false

}

export default function ui(state = initialState, action) {
  switch(action.type) {
    case 'SET_POSTS_ERROR_MESSAGE':
      return Object.assign({}, state, {errorMessage:action.errorMessage})
    case 'SHOW_MODAL':
      return Object.assign({}, state, {showModal: true})
    case 'HIDE_MODAL':
      return Object.assign({}, state, {showModal: false})
    case 'CLEAR_POSTS_ERROR_MESSAGE':
      return Object.assign({}, state, {errorMessage: ''})
    default:
      return state
  }
}
