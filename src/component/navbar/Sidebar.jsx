import React from 'react'

import { AiOutlineMail} from "react-icons/ai";
import { AiFillInfoCircle} from "react-icons/ai";
import { ImHome} from "react-icons/im";
export  const Sidebar = [
    {
        title: "Home",
        path: "/",
        icon: <ImHome/>,
        cName: "nax-text",
    },
    {
        title: "Aboutme",
        path: "/aboutme",
        icon: <AiFillInfoCircle/>,
        cName: "nax-text",
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <AiOutlineMail/>,
        cName: "nax-text",
    },
    
]
