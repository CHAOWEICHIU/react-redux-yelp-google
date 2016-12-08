import { ADD_ONE } from '../actions/types'

export default (state=0,action)=>{
  switch (action.type) {
    case ADD_ONE:
      return state + 1
    default:
      return state
  }
}
