import React from 'react'
import { loginAction } from '../actions/auth'

const LoginForm = () => {
  return (
    <div>
        <form action={loginAction} className='space-x-4'>
            <div>
                <label className='block text-sm font-medium text-gray-700'>Email</label>
                <input type="email" placeholder='Enter your mail id' name='email' required 
                className='mt-1 mb-2 block w-full rounded-md border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'/>
            </div>
            <div>
                <label className='block text-sm font-medium text-gray-700'>Password</label>
                <input type="password" placeholder='Enter your Password' name='password' required 
                className='mt-1 mb-2 block w-full rounded-md border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'/>
            </div>
            <button type='submit' className='w-full bg-blue-500 py-2 rounded text-white flex justify-center'>Submit</button>
        </form>
    </div>
  )
}

export default LoginForm