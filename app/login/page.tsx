import React from 'react';
import LoginForm from '../_components/LoginForm';
import Link from 'next/link';

const Loginpage = () => {
  return (
    <div className='max-w-md mx-auto bg-white p-8 rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold mb-6'>Login</h1>
      <LoginForm/>
      <p>Don`t have account ? <Link href='/register' className='text-blue-500 hover:underline'>Register</Link> </p>
    </div>
  )
}

export default Loginpage