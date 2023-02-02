import React from 'react'
import "./styles/style.css";
import {  Link } from "react-router-dom";
 function ResetPassword() {
  return (
    <div>
      
    <section className="vh-100">
<div className="  h-100">
  <div className="row d-flex h-100">
   
 
  <div className="col-md-12  pt-4 col-lg-5 col-xl-5 offset-xl-1">
  <div className="container text-center">
  <img  className='d-flex pb-5' alt="logo"  preview={false} src={require('../../../assets/img/logo.png')} />
   <div className="mb-3">
   <h3 className="welcome-signUp d-flex">Have you forgotten
your password ?</h3>
       <span className="para-welcome pb-2 para-welcome-signUp d-flex">If you've forgotten your password, 
       
</span>
<span className="para-welcome pb-2 para-welcome-signUp d-flex">enter your e-mail address and we'll send 
you an e-mail </span>
   </div>
      <form>
      
       
        <div className="form-outline mb-4">
          <input type="email" id="form1Example13" className="form-control input-signIn" placeholder="Email Address"/>

        </div>
   
      
       
        <button type="submit" className="btn btn-primary btn-lg btn-block  button-login button-reset">RESET PASSWORD</button>
        <p className="new-account pt-3"> Back to
        <Link  to='/' className="sign-for-free"  >  Login</Link> </p>
        
         
      
        
      </form>
    </div>
  </div>
    <div className="col-md-12 col-lg-7 col-xl-6 bloc-img">
    <img  className='img-fluid ' alt='img' preview={false} src={require('../../../assets/img/img-resetPassword.png')} />
      
    </div>
  </div>
</div>
</section>
  </div>
  )
}
export default ResetPassword