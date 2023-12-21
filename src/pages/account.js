import React from "react";
import {Router} from '@reach/router'
import { login} from './utils/auth'
const Home = () => <p>Home</p>
const Settings = () => <p>Settings</p>
const Logout = () => <p>Logout</p>
const Billing = () => <p>Billing</p>


const Account = () => {
    login()
   return (
    <Router>
 <Settings path="/account/settings" />
 <Logout path="/account/logout" />

 <Billing path="/account/billing" />
 <Home path="/account/" />
    </Router>
)
   }
export default Account