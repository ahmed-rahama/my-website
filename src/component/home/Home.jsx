import React from 'react'
import "./home.css"
import Typical from 'react-typical'

import { AiOutlineGithub} from 'react-icons/ai';
import {AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram} from 'react-icons/ai';

export default function Home() {
  return (
    <div className="home">
      <div className="profile-parent"> 
      <div className="profile-details"> 
      <div className="ahmed-soical-m">
      <div className="ahmed-soical-m-icons">

      <a href="https://github.com/ahmed-rahama"> <AiOutlineGithub/>
      </a>
      <a href="https://facebook.com/ahmed-mostafa.965580"> <AiFillFacebook/>
      </a>
      <a href="https://instagram.com/ahmed-mostafa.965580"> <AiFillInstagram/>
      </a>
      </div>
      </div>
      <div className="profile-details-name"> 
        <span className="primary-text"> Hi , I'm  <span className="highlighted-text">Ahmed</span> </span> </div>
        <div className="profile-details-description">
        <h1>
         
            <Typical loop={Infinity} wrapper="b" steps={["developer 💻",2000, "designer 📐 ",2000, "freelancer ⌚️ ",2000 ]}/>
        </h1>
        <span className="p-tagline" >building applications with front and back end with new ideas</span>
        </div>
        <div className="profile-btn">
          <button className="btn primary-btn"> Hire Me </button>
        </div>
        <div className="profile-pic"> <div className="profile-background"></div> </div>
    </div>
    </div>
    </div>
  )
}
