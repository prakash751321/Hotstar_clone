"use client"
import Header from '@/components/ui/Header'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Login() {

  return (
    <div className='login_container'>
      {/* <div className="login_container_left"> */}
        <Image priority className='image_left' src="/images/hotstar.png" alt='' height={880} width={100} />
      {/* </div> */}

      <div className="login_container_right">
        <h1 className='login_container_right_head'>Log in or sign up to continue</h1>
        
          <div className='flex gap-2 items-center pt-4'>
            <p className='login_container_right_inpt'>+91</p>
            <input className='login_container_right_input_name' type="number" placeholder='Enter mobile number' />
          </div>
          
       

        <p className='login_container_right_input_p'>By proceeding you confirm that you are the above 18 years of age and agree to the <span>Privacy Policy & Terms of Use.</span></p>

        <button type='submit'>Get OTP  &#62;</button>
        <div className='login_container_right_help'>
          <p>Having trouble logging in? <a href="https://help.hotstar.com/in/en/support/search?term=login">Get Help</a></p>
        </div>
      </div>


    </div>
  )
}

export default Login