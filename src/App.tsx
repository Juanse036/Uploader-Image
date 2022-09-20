import './App.css'
import Upload from './components/upload'
import Uploading from './components/uploading'
import Uploaded from './components/uploaded'
import { Route, Switch } from "wouter";
import { BrowserRouter } from 'react-router-dom';

function App() {  

  return (
    <div className="App">
      <Upload />
    </div>
  )
}

export default App

