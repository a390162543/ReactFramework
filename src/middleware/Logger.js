import { createLogger } from 'redux-logger'
import { Iterable } from 'immutable'

const Logger = createLogger({
 stateTransformer: (state) => {
  if (Iterable.isIterable(state))
   return state.toJS()
  else
   return state
 }
})

export default Logger
