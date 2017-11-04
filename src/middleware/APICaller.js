const APICaller = store => next => action => {
 const {
  type,
  call,
  shouldCall = () => true,
  payload = {}
 } = action

 const {
  dispatch,
  getState
 } = store

 if (typeof type === 'string') {
  // Normal action: pass it on
  return next(action)
 }

 if (
  typeof type !== 'object' || type.default == null
 ) {
  throw new Error('Expected an object with key default.')
 }

 if (typeof call !== 'function') {
  throw new Error('Expected callAPI to be a function.')
 }

 if (!shouldCall(getState())) {
  return
 }

 dispatch(Object.assign({}, payload, {
  type: type.request
 }))

 return call().then(
  response => dispatch(Object.assign({}, payload, {
   response,
   type: type.success
  })),
  error => dispatch(Object.assign({}, payload, {
   error,
   type: type.failure
  }))
 )
}

export default APICaller
