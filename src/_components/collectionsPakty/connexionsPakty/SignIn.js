import React from "react";
import "./styles/style.css";
import { Input } from 'antd';
import { FcGoogle } from "react-icons/fc";
import { AiFillEyeInvisible } from "react-icons/ai";
import {  Link } from "react-router-dom";
function Login() {
  return (
    <div>
      
      <section className="vh-100">
  <div className="  h-100">
    <div className="row d-flex h-100">
     
   
    <div className="col-md-12  pt-4 col-lg-12 col-xl-5 col-sm-12 col-12 offset-xl-1">
    <div className="container text-center">
    <img  className='d-flex pb-5' alt="logo"  preview={false} src={require('../../../assets/img/logo.png')} />
        
     <div className="mb-2">
         <h3 className="welcome welcome-back d-flex">Welcome back</h3>
         <p className="para-welcome pb-2  d-flex">Welcome back! Please enter your details.</p>
     </div>
        <form>
        
          <div className="form-outline mb-2">
             <Input type="email" id="form1Example13" className="form-control  input-signIn" placeholder="Email Address"/>
          </div>
          <div className="form-outline mb-2">
          <div className="input-group mb-3">
  
        <input type="password" id="form1Example23" className="form-control input-signIn execption-form" placeholder="password" />
  <span className="input-group-text icon-visibility" id="basic-addon1"><AiFillEyeInvisible className='icon-show'/></span>
</div>
            
          </div>

          <div className="d-flex justify-content-around  mb-2">
       
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3"  />
              <label className="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <Link to="/resetPassword" className="forgot-password" >Forgot password?</Link>
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-block  button-login">Sign in</button>
          <p className="new-account pt-3">  Don't have an account?{" "} 
          <Link  to='/signup' className="sign-for-free"  >  Sign up for free </Link> </p>
          <div className="divider d-flex align-items-center my-2">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">or</p>
          </div>
          
           
          <a className=" login-google btn mt-2  btn-lg btn-block"   href="hh"
            role="button">
            
            <FcGoogle/> Log in with Google
          </a>
          
        </form>
      </div>
    </div>
      <div className="col-md-12 col-lg-12 col-xl-6 col-sm-12  col-12 bloc-img">
    
          <img  className='img-fluid ' alt='img'  preview={false} src={require('../../../assets/img/img-login.png')} />
          
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
export default Login