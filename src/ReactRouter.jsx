import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Button from './components/Button'

class ReactRouter extends React.Component {
 render() {
  return (
   <BrowserRouter>
    <Switch>
     <Route path="/b" component={Button} />
     <Route path="/" component={App} />
    </Switch>
   </BrowserRouter>
  )
 }
}

export default ReactRouter
