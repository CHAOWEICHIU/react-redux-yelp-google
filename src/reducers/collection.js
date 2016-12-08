import { SAVE_TO_COLLECTION } from '../actions/types'

export default (state=[], action) => {
  switch (action.type) {
    case SAVE_TO_COLLECTION:
      return [...state, {...action.payload}]
    default:
      return state
  }
}
