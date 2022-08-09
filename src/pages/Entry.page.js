import React , {useState} from 'react'
import "./entry.style.css"

import { LoginForm } from '../components/login/Login.comp'
import { ResetPassword } from '../components/password-reset/ResetPassword'
export const EntryPage = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formLoad, setFormLoad] = useState('login');

  const formSwitcher = formType =>{
    setFormLoad(formType);
  }
  const handleOnChange = (event) =>{
    const {name, value} = event.target;

    switch(name)
    {
      case'email': setEmail(value);
      break;

      case 'password' : setPassword(value);
      break;

      default:
        break;


    }
    
  }

  const handleOnSubmit = (event)=>{
    event.preventDefault()

    if(!email || !password)
    {
      return alert("Fill email and password")
    }

    //Api Call
    console.log(email, password);
  }

  const handleOnResetSubmit = (event)=>{
    event.preventDefault()

    if(!email)
    {
      return alert("Fill email")
    }

    //Api Call
    console.log(email);
  }
  return (
    <div className="entry-page bg-warning">
        <div className='Jumbotron form-box text-center' style={{backgroundColor:"white", padding:"5px", borderRadius:"3%"}}>
          {formLoad==='login' && <LoginForm 
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
          />}

          {formLoad==='reset' && <ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />}
        </div>
    </div>
  )
}

