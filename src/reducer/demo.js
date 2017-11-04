import ReducerBuilder from './ReducerBuilder'
import { Map } from 'immutable'
import { test } from '../action/demo'

export default ReducerBuilder
 .initialize(Map())
 .handler({
  type: test.type.success,
  handle: (state, ) => {
   return state.set('time', new Date())
  }
 })
 .handler({
  type: test.type.failure,
  handle: (state, ) => {
   return state.set('time', 'error')
  }
 })
 .build()
