import './App.css'
import Upload from './components/upload'
import Uploading from './components/uploading'
import Uploaded from './components/uploaded'
import { Route, Switch } from "wouter";
import { BrowserRouter } from 'react-router-dom';

function App() {  

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' ><Upload /></Route>
          <Route path='/uploading'><Uploading /></Route>
          <Route path='/uploaded'><Uploaded /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

