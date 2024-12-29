import { Link } from "react-router-dom"
import { useState } from "react" 
import { useContext } from "react" 
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from '../context/CaptainContext'
const CaptainLogin = () => {

  const [email, setEmail] = useState('')  
  const [password, setPassword] = useState('')

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate(); 

  const submitHandler = async (e) => {
    e.preventDefault();  
    const captain = {
      email: email, 
       password: password};
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

    if(response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);  // storing token in local storage for future use.
      navigate('/captain-home');
    }
    setEmail('');
    setPassword('');
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between  ">
      <div>
      <img className="w-20 mb-3" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
      <form onSubmit ={(e)=>{
        submitHandler(e)}}>
        <h3 className="text-lg font-medium mb-2">Whats your email</h3>
        <input 
        required 
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" 
        type="email" 
        name="email" 
        placeholder="email@example.com" />

        <h3 className="text-lg font-medium mb-2">Enter password</h3>
        <input 
        required 
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" 
        type="password" 
        name="password" 
        placeholder="Enter password" />

        <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base" type="submit">Login</button>

        <p className="text-center">Join a fleet? <Link to='/captain-signup' className="text-blue-600">Register as a Captain</Link> </p>
      </form> 
      </div>
      <div>
        <Link to="/login" className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign In as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin