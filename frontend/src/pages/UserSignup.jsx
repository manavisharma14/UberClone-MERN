import { Link } from "react-router-dom";
import { useState } from "react";

const UserSignup = () => {

    const [email, setEmail] = useState('')  
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            fullName: {
                firstName: firstName,
                lastName: lastName
            },
            email: email, 
            password: password,
        })

        console.log(userData);

        setEmail('');
        setPassword('');

        setFirstName('');
        setLastName('');
    }
  return (
    <div>
        <div className="p-7 h-screen flex flex-col justify-between  ">
      <div>
      <img className="w-20 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1600px-Uber_logo_2018.png" alt="" />
      <form onSubmit ={(e)=>{
        submitHandler(e)}}>
        
        <h3 className="text-base w-1/2 font-medium mb-5">Whats your name</h3>
        <div className="flex gap-4 mb-6">
            <input 
                required
                value={firstName}
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm" 
                type="text" 
                placeholder="First name" />
            
            <input 
                required  
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm" 
                type="text" 
                placeholder="Last name" />
        </div>

        <h3 className="text-base font-medium  mb-2">Whats your email</h3>
        <input 
        required 
        value={email}
        onChange={(e) => {
        setEmail(e.target.value);
        }}
        className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm" 
        type="email" 
        name="email" 
        placeholder="email@example.com" />

        <h3 className="text-base font-medium mb-2">Enter password</h3>
        <input 
        required  
        value={password}
        onChange={(e) => {
        setPassword(e.target.value);
        }}
        className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm" 
        type="password" 
        name="password" 
        placeholder="Enter password" />

        <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base" type="submit">Login</button>

        <p className="text-center">Already have a account? <Link to='/captain-signup' className="text-blue-600">Login here</Link> </p>
      </form> 
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
        Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
    </div>
  )
}

export default UserSignup