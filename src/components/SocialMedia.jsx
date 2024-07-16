import React from 'react'
import {BsInstagram} from "react-icons/bs"
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {


  return (
    <div className='app__social'>
      <div>
        <BsInstagram/>
      </div>
      <div>
        <PiLinkedinLogoBold/>
      </div>
      <div>
        <FaFacebookF/>
      </div>
    </div>
  )
}

export default SocialMedia