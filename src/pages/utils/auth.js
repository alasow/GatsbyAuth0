import auth0 from 'auth0-js'
// import dotenv from 'dotenv'

// dotenv.config()
export const isBrowser = typeof window !== "undefined"

// const tokens = {
//   idToken: false,
//   accessToken: false,
// }

// let user = {}

// export const isAuthenticated = () => {
//   return tokens.idToken !== false
// }

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: "http://localhost:8000/callback",
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}

  export const login = () => {
   
  
    auth.authorize()
  }
  