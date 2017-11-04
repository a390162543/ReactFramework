import { Map } from 'immutable'
const ReducerBuilder = {
 initialize: (initialState) => {
  const builder = {
   handlerChain: [],
   handler: (handler) => {
    builder.handlerChain.push(handler)
    return builder
   },
   build: () => {
    return (state = initialState, action) => {
     const handler = builder.handlerChain.find((obj) => (obj.type === action.type))
     if (handler != null) {
      return handler.handle(state, action)
     } else {
      return state || Map()
     }
    }
   }
  }
  return builder
 }
}

export default ReducerBuilder
