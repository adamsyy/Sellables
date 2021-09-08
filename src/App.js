import React from 'react';
import './App.css';
import Create from './Pages/Create'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import ViewPost from './Pages/ViewPost'
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import onAuthStateChanged from "firebase/auth";
import Post from './store/PostContext';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {user,setUser}=useContext(AuthContext);
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
console.log(user);
firebase.auth().onAuthStateChanged((user)=>{
  setUser(user)
})
  })
  return (
    <div>
      <Post>
      <Router>
        <Route exact path="/" > <Home />   </Route>
        <Route path="/signup" > <Signup/> </Route>
        <Route path="/login" > <Login/> </Route>
        <Route path="/create" > <Create/> </Route>
        <Route path="/view" ><ViewPost/> </Route>
      </Router>

      </Post>
      
    </div>
  );
}

export default App;
