import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button } from 'material-ui'
import './App.css'

class App extends React.Component {
 render() {
  return (
   <AppBar position="static">
    <Toolbar>
     <IconButton color="contrast" aria-label="Menu">
     </IconButton>
     <Typography type="title" color="inherit">
      Title
     </Typography>
     <Button color="contrast">Login</Button>
    </Toolbar>
   </AppBar>
  )
 }
}

export default App
