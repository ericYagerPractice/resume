import { Auth } from 'aws-amplify'

/* CheckAuth.js will house all functions intended to check a user's status.  This includes "Check User" which will set Auth Dispatch to the user's information
or push a console error. */

async function checkUser(dispatch) {
    try {
      const user = await Auth.currentAuthenticatedUser()
      dispatch({ type: 'setUser', user })
    } catch (err) {
      if(err !== "The user is not authenticated"){
        console.log('err: ', err)
      }
      dispatch({ type: 'loaded' })
    }
  }

  function reducer (state, action) {
    switch(action.type) {
      case 'setUser':
        return { ...state, user: action.user, loading: false }
      case 'loaded':
        return { ...state, loading: false }
      default:
        return state
    }
  }
  
export default checkUser;
export {reducer};