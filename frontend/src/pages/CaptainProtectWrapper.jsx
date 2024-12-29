import React, {useContext, useEffect} from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate, Route } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading]  = useState(true);
    



    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
      }, [token] )

      axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        setCaptain(response.data.captain)

      })
        .catch(err=>{
            console.log(err)
            localStorage.removeItem('token') 
            navigate('/captain-login')
        })

      if(isLoading) {
        return 
        <div>Loading...</div>
      }

  return (
    <>
     {children}
    </>
  )
}

export default CaptainProtectWrapper