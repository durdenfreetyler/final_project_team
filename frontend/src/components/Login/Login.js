import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthProvider';
import Background from '../front-page/background';
import NavBar from '../front-page/NavBar';
//import axios from './api/axios';

//const LOGIN_URL = '/auth';

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] =  useState('');
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus(); 
  // }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUser('');
    setPwd('');
    setSuccess(true);

    /*try{
      const response = await axios.post(LOGIN_URL, 
        JSON.stringify({user, pwd}), {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      setAuth({user, pwd, accessToken})
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
        if(!err?.response) {
          setErrMsg('No Server Response');
        } else if (err.response?.status === 400) {
            setErrMsg('Missing username or password');
        } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
        } else {
          setErrMsg('Login Failed');
        }
        errRef.current.focus(); 
    }*/
  }




  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/dashboard" >Go to Dashboard</a>
          </p>
        </section>
      ) : (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg} </p>
      {/* <h1> Sign in</h1> */}
      <Background/>
      <form className='bobs' onSubmit={handleSubmit}>
      <Background/>
      <div class='bold-line'></div>
      <Background/>
<div class='containersss'>
  <div class='window'>
    <div class='overlay'></div>
    <div class='content'>
      <div class='welcome'>Hello There!</div>
      <div class='subtitle'>We're almost done. Before using our services you need to create an account.</div>
      <div class='input-fields'>
        <input type='text' placeholder='Username' class='input-line full-width'></input>
        <input type='email' placeholder='Email' class='input-line full-width'></input>
        <input type='password' placeholder='Password' class='input-line full-width'></input>

      </div>
      <div class='spacing'>or continue with <span class='highlight'>Facebook</span></div>
      <div><button class='ghost-round full-width'>Create Account</button></div>
    </div>
  </div>
</div>
      </form>
      <p>
        Need an Account?<br />
        <span className='line'>
          {/*React router link */}
          <a href="">Sign Up</a>
        </span>
      </p>
      <NavBar/>
    </section>
    )}
  </>      
  )
}

export default Login;