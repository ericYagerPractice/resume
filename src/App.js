import React, {useEffect, useState, useReducer} from 'react';
import './App.css'
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Hub } from 'aws-amplify'
import Header from './components/Header'
import Footer from './components/Footer'
import checkUser, {reducer} from './functions/userStatus';
import { withAuthenticator } from '@aws-amplify/ui-react'


const initialUserState = { user: null, loading: true }

function App() {
  const [userState, dispatch] = useReducer(reducer, initialUserState)
  const [formState, updateFormState] = useState('base')

  useEffect(() => {
    // set listener for auth events
    Hub.listen('auth', (data) => {
      const { payload } = data
      if (payload.event === 'signIn') {
        setImmediate(() => dispatch({ type: 'setUser', user: payload.data }))
        setImmediate(() => window.history.pushState({}, null, 'http://localhost:3000/'))
        updateFormState('base')
      }
      // this listener is needed for form sign ups since the OAuth will redirect & reload
      if (payload.event === 'signOut') {
        setTimeout(() => dispatch({ type: 'setUser', user: null }), 350)
      }
    })
    // we check for the current user unless there is a redirect to ?signedIn=true
    if (!window.location.search.includes('?signedin=true')) {
      checkUser(dispatch)
    }
  }, [])

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
