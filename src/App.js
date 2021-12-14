import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import './bootstrap.min.css'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <>
      <Header/>
        <Container>
          <HomeScreen/>
        </Container>
      <Footer/>

    </>
  )
}

export default App
