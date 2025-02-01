import { useState } from 'react'
import AddJob from './components/AddJob';
import JobDisplay from './components/JobDisplay';
import './App.css'

function App() {

  return (
    <>
    <div className="background" id="main-content">
      <AddJob></AddJob>
      <JobDisplay></JobDisplay>
    </div>  
    </>
  )
}

export default App
