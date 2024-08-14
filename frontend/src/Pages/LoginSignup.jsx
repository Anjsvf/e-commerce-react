import React, { useState } from "react";
import "./Css/LoginSignup.css";
const LoginSignup = () => {
  const [state, setState] =  useState('Login')
  const [formData,setFormData] = useState({
    username:"",
    password: "",
    email:""
  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login  = async ()=>{
    console.log("Login");
     let responseData 
    await fetch('http://localhost:4000/login',{
      method:"POST",
      headers:{
        Accept:"application/format-data",
        'Content-Type':'application/json'
      },
      body: JSON.stringify( formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace('/')
    }
    else{
      alert(responseData.errors)
    }
   
  }
  const signup  = async ()=>{
    console.log("Login");
     let responseData 
    await fetch('http://localhost:4000/signup',{
      method:"POST",
      headers:{
        Accept:"application/format-data",
        'Content-Type':'application/json'
      },
      body: JSON.stringify( formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace('/')
    }
    else{
      alert(responseData.errors)
    }
  }
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==='Sign Up'?<input type="text" name="username" value={formData.username} onChange={changeHandler} placeholder="seu nome" />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder=" endereço de email" />
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="senha" />
        </div>
        <button onClick={()=>{state==="Login"? login():signup()}}>continue</button>
        {state==="Sign Up"? <p className="loginsignup-login">
          já passui uma conta? <span onClick={()=>{setState("Login")}}>entre aqui</span>
        </p>: <p className="loginsignup-login">
          crie uma conta nova <span onClick={()=>{setState("Sign Up")}}>crique aqui</span>
        </p>}
       
       
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>para continuar concorde com os termos de uso</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
