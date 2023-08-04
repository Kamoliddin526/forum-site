import React from 'react'
import {signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';


const Logout = () => {
    const navigate = useNavigate()

    const logout = async () => {
        try {
          await signOut(auth);
          navigate("/");
    
        } catch (err) {
          console.log(err);
        }
      };
  return (
    <div>
        <button onClick={logout} className='logout'>Logout</button>
    </div>
  )
}

export default Logout