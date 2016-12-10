import { FETCH_PLACES } from '../../src/actions/types'

export default (state=[], action)=>{
  switch (action.type) {
    case FETCH_PLACES:
      return [...state, ...action.payload]
    default:
      return state
  }
}
