export default function shoppingListItemReducer(state = {items: []}, action) {
  console.log('Action: ', action)
  let items
  let proposedstate
  switch(action.type) {
    case 'GET_COUNT_OF_ITEMS':
      items = state.items.concat(state.items.length + 1)
      proposedstate = Object.assign({}, {items: items})
      console.log('Incremented State: ', proposedstate)
      return proposedstate
    default:
      console.log('Same State: ', state)
      return state
  }
}
