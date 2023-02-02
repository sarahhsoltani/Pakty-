import React from 'react'
import "./styles/style.css";
import { FcGoogle } from "react-icons/fc";
import { AiFillEyeInvisible } from "react-icons/ai";
import {  Link } from "react-router-dom";
function Signup() {
  return (
    <div>
      
    <section className="vh-100">
<div className="  h-100">
  <div className="row d-flex h-100">
   
 
  <div className="col-md-12  pt-4 col-lg-5 col-xl-5 col-sm-12  col-12 offset-xl-1">
  <div className="container text-center">
     
      <img  className='d-flex pb-5' alt="logo"  preview={false} src={require('../../../assets/img/logo.png')} />
   <div >
   <h3 className="welcome-signUp d-flex">Sign up to pakty</h3>
       <p className="para-welcome  para-welcome-signUp d-flex">Sign up for free and be a member of pakty
community</p>
   </div>
      <form>
      
        <div className="form-outline mb-2">
          <input type="email" id="form1Example13" className="form-control  input-signUp form-control-lg" placeholder="Full name"/>

        </div>
        <div className="form-outline mb-2">
          <input type="email" id="form1Example13" className="form-control  input-signUp form-control-lg" placeholder="Email Address"/>

        </div>
        
        <div className="form-outline mb-2">
        <div className="input-group mb-2">

<input type="password" id="form1Example23" className="form-control input-signUp form-control-lg execption-form" placeholder="password" />
<span className="input-group-text icon-visibility" id="basic-addon1"><AiFillEyeInvisible className='icon-show'/></span>
</div>

        </div>
        <div className="form-outline mb-2">
        <div className="input-group mb-2">

<input type="password" id="form1Example23" className="form-control input-signUp form-control-lg execption-form" placeholder="Confirm password" />
<span className="input-group-text icon-visibility" id="basic-addon1"><AiFillEyeInvisible className='icon-show'/></span>
</div>

        </div>
       
        <button type="submit" className="btn btn-primary btn-lg btn-block mt-2 button-signup">Sign up</button>
        <p className="new-account pt-2 mb-2"> You have an account?
        <Link  to='/' className="sign-for-free"  >  Login</Link> </p>
        <div className="divider d-flex align-items-center mb-2">
          <p className="text-center fw-bold mx-3 mb-0 text-muted">or</p>
        </div>
        
         
        <a className=" login-google btn  btn-lg btn-block"   href="hh"
          role="button">
          
          <FcGoogle/> Log in with Google
        </a>
        
      </form>
    </div>
  </div>
    <div className="col-md-12 col-lg-7 col-xl-6 col-sm-12  col-12 bloc-img">
    
        <img  className='img-fluid '  alt='img' preview={false} src={require('../../../assets/img/img_signup.png')} />
    </div>
  </div>
</div>
</section>
  </div>
  )
}
export default Signup