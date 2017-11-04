import ActionBinder from './ActionBinder'

export const test = ActionBinder.bind('TEST', () => {
 return {
  type: test.type,
  call: () => fetch('http://www.baidu.com', {
   method: 'GET',
  }),
 }
})
