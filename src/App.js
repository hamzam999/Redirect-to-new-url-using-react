import './App.css'
import logo from './logo.svg'
import { React, useEffect } from 'react'

function App() {

  const url = process.env.REACT_APP_REDIRECT_URL

  useEffect(()=>{
    let pathname = window.location.pathname
      console.log(url+pathname)
      window.open(url+pathname,'_self')
    },[])

  return (
      <div  className="not_found">

            <div>
              <img
                src={logo}
                alt="logo"
                className="img-fluid mb-4"
              />
               <p>Please wait...</p>
            <p>You will be redirected soon...</p>

            </div>
           
      </div>
  )
}

export default App
