import React from 'react';
import { motion } from 'framer-motion';
import './about.css';
export default function AboutMe() {
  return (
    <motion.div
      className="about"
      intial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      {' '}
      <div className="main">
        <img src={require('../../assets/aboutme.jpg')} />
        <div className="about-text">
          <h1>about-me</h1>{' '}
          <h4>
            developer <span className="aboutme-span">& Designer </span>{' '}
          </h4>{' '}
          <p>
            {' '}
            I am afront end web developer , i can provide clean cods and pixel
            perfect design , also i can make the website more & more interactive
            with web animations . A responsive design makes your website
            accessible to all users
          </p>{' '}
          <h4>
            work <span className="aboutme-span">& Projects </span>
          </h4>
          <p>
            {' '}
            <span className="num-span">1-</span> It is true that i am a beginner
            in programming , but i am ready to develop and learn more <br></br>{' '}
            <span className="num-span">2-</span> Also this Portofolio is one
            greate experiances and many of code challenges that i enjoyed doing
            it<br></br> <span className="num-span">3-</span> Working in Problem
            Solving it is not just in programming world but i also worked in
            repearing the Medical equipment for long period and now for many
            reasons i try to solve the problems in another field
          </p>
        </div>
      </div>{' '}
    </motion.div>
  );
}
