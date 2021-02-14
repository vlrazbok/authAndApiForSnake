import React, {useContext, useState} from 'react'
import {useHttp} from '../hooks/http.hook'

import {AuthContext} from '../context/AuthContext'

export const AuthPage = () =>{
  const auth = useContext(AuthContext)
  const {loading, request} = useHttp()

  const [form, setForm] = useState({name: ''})

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const loginHandler = async () => {
      try {
        
        const data = await request('/api/auth/login', 'POST', {...form})
        console.log("Data: ", data )
        auth.login(data.token, data.userId)
      } catch (e) {}
    
  }
  return(
    <div className="auth">
      <form className="login-form">
      <input
        placeholder="Enter login"
        id="name"
        type="text"
        name="name"
        className="login-input"
        value={form.name}
        onChange={changeHandler}
       />
        <button
          className="login-button"
          disabled={loading}
          onClick={loginHandler}
        >
          StartGame
        </button>
      </form>
      
    </div>
  )
}