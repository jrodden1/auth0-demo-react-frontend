# Getting React Frontend to Work with Auth0 

Helpful tutorials:
* https://auth0.com/docs/quickstart/spa/react/01-login  especially this one
* https://auth0.com/docs/quickstart/spa/react
* https://auth0.com/docs/architecture-scenarios/spa-api

1. I initially followed the steps in this doc: 
   https://auth0.com/docs/architecture-scenarios/spa-api
   1. First configured the Rails API in Auth0 (this enables the creation of the react part quicker)
   2. When I got to the "Implementation section" - at the Implement the SPA part, I then switched over to this [setup link](https://auth0.com/docs/quickstart/spa/react) and got it working just for authentication (not authorization yet)
   3. I should finish doing the steps in this section before switching back to the spa-api one
   4. Actually Looks like the directions go on to show how to call an API next 
2. I think I'll need to pop back over to the spa-api one to finish getting auth to work.  
3. I also would like to test the React app comms with the Rails app to see if I can fetch from the react (need to find out the token I got back - bearer; and the right scopes to make it work) so then I can make the request of the Rails API and see if I get anything back.  

Jan 11 UPDATE: ITS WORKING!  Got the communcations working with Authentication.  Yus!  

NEXT: need to work on testing out AUTHORIZATION

Also, I used this site to setup the Rails 5.2 part (as the auth0 directions won't work with 5.2) 
https://www.storyblok.com/tp/how-to-add-auth0-authentication-to-a-ruby-on-rails-api

This was also helpful for enabling HTTPS for yarn

https://create-react-app.dev/docs/using-https-in-development/

https://medium.com/@danielgwilson/https-and-create-react-app-3a30ed31c904