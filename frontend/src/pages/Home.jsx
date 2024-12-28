import uberbg from '../assets/uberbg.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
      <div
          className="bg-cover bg-bottom h-screen pt-8 flex justify-between flex-col w-full bg-red-400"
          style={{ backgroundImage: `url(${uberbg})` }}
        >
        <img className="w-16 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1600px-Uber_logo_2018.png" alt="" />
          <div className="bg-white py-4 px-4 pb-7">
            <h2 className="text-3xl font-bold">Get started with Uber</h2>
            <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 ">Continue</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home