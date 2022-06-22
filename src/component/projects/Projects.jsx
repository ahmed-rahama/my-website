import React from 'react';
import { motion } from 'framer-motion';
import './projects.css';
import { TiHtml5 } from 'react-icons/ti';

import { IoLogoJavascript } from 'react-icons/io';
import { SiCsswizardry } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { BsFillBootstrapFill } from 'react-icons/bs';

let projectArr = [
  {
    header: ' HTML',
    icon: <TiHtml5 />,
    info: ' HyperText Markup Language (HTML) is the basic scripting language used by web browsers to render pages on the world wide web.',
    rotate: false,
  },
  {
    header: ' Javascript ',
    icon: <IoLogoJavascript />,
    info: ' JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages ',
    rotate: false,
  },
  {
    header: ' CSS ',
    icon: <SiCsswizardry />,
    info: ' Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML ',
    rotate: false,
  },
  {
    header: 'Node.js ',
    icon: <FaNodeJs />,
    info: '  Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat',
    rotate: false,
  },
  {
    header: 'MongoDB ',
    icon: <DiMongodb />,
    info: ' The MongoDB database has a flexible data model that enables you to store unstructured data ',
    rotate: false,
  },
  {
    header: 'React ',
    icon: <FaReact />,
    info: ' React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. ',
    rotate: false,
  },
  {
    header: 'SASS ',
    icon: <FaSass />,
    info: 'Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS) ',
    rotate: false,
  },
  {
    header: 'Bootstrap ',
    icon: <BsFillBootstrapFill />,
    info: ' Bootstrap is a free and open source front end development framework for the creation of websites and web apps. ',
    rotate: false,
  },
];

export default function Projects() {
  let [arrset, setArrset] = React.useState(projectArr);

  // let handelRotate = (index) => {
  //   let result = projectArr.find((item, i) => i === index);
  // };
  return (
    <motion.div
      className="projects-container"
      intial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      {' '}
      {arrset.map((item, i) => (
        <div className="card-main">
          {' '}
          <motion.div
            className="card-icon"
            animate={{
              rotate: item.rotate ? 360 : 0,
              transition: { duration: 1 },
            }}
            onClick={(e) => {
              console.log(arrset);
              const newArr = arrset.map((el, index) =>
                i === index ? { ...el, rotate: !el.rotate } : el
              );
              setArrset(newArr);
            }}
          >
            {' '}
            {item.icon}
          </motion.div>{' '}
          <div className="card-info">
            {' '}
            <h2> {item.header}</h2> <p> {item.info}</p>
          </div>{' '}
        </div>
      ))}
    </motion.div>
  );
}
