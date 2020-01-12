import React from 'react';
import { useAuth0 } from "../react-auth0-spa";

const Home = () => {
   const {isAuthenticated} = useAuth0()
   debugger
   if (isAuthenticated) { 
      return (
         <div>
            <h1>Welcome to Demo Auth0 React Frontend!</h1>
            <p>Thanks for Logging In!</p>

         </div>
      );
   } else {
      return (
         <div>
            <h1>Welcome to Demo Auth0 React Frontend!</h1>
            <p>Proceed to Login</p>

         </div>
      );
   }
}

export default Home;
