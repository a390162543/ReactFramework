const ActionBinder = {
 bind: (type, actionCreator) => {
  return {
   type: {
    default: type,
    request: type + '_REQUEST',
    success: type + '_SUCCESS',
    failure: type + '_FAILURE',
   },
   action: actionCreator,
  }
 }
}

export default ActionBinder
