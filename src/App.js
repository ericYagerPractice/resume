import React from 'react';
import './App.css'
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <div style={styles.appContainer}>
      <Header />
        <main className="mainContent" style={styles.postHeader}>
        <Routes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

const styles = {
  appContainer: {
    paddingTop: 0,
  },
  postHeader: {
    marginTop: '5.5rem'
  },
}

export default App;
