import React from 'react'
import { Link } from 'react-router-dom';

function Home(props){
  return (
    <div className='bg-purple-300 h-screen w-screen text-center absolute align-center'>
     
     <div className='mt-10 '>
      <h1 className='mx-auto text-white bg-purple-700 px-4 py-2 w-40 font-bold text-xl rounded-xl '>
        <Link to="/login">Login</Link>
      </h1>
     <br />
     
      <h1 className='mx-auto text-white bg-purple-700 px-4 py-2 w-40 font-bold text-xl rounded-xl'>
        <Link to="/signup">Sign Up</Link>
      </h1>
     </div>

<br />
<br />
<br />
    <h2 className='text-3xl'>{ props.name ? `Welcome - ${props.name}` : "Login please"}</h2>

    </div>
  );
}

export default Home
