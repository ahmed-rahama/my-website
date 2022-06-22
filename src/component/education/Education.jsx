import React from 'react';

import './education.css';

let educationArr = [
  {
    image:
      'https://www.alsudaninews.com/ar/wp-content/uploads/2019/05/%D9%85%D8%AF%D8%A7%D8%B1%D8%B3-%D8%AE%D8%A7%D8%B5%D8%A9-%D8%A7%D9%84%D8%AE%D8%B1%D8%B7%D9%88%D9%85.jpg',
    title: 'Primary stage',
    subtitle:
      'it was a beautifull stage where it was the first step to learn how to learn ',
  },
  {
    image:
      'https://www.tagpress.net/wp-content/uploads/2020/09/EhuA-C2WAAAAwe3.jpeg',
    title: 'High school',
    subtitle:
      'high school was full og challenges also it was in my city Khartoum ',
  },
  {
    image: 'https://ust.edu.sd/ust_uploads/2021/10/USISs-1024x399.jpg',
    title: 'University',
    subtitle: 'i studied university in sudan in UTC it was nice experience ',
  },
  {
    image:
      'https://hyrd.de/images/companies/dci-digital-carrer-institute-logo.png',
    title: 'DCI',
    subtitle: 'i am studing now at the DCI so i hope i can make change  ',
  },
];
export default function Education() {
  return (
    <div className="education-container">
      <div className="education-info">
        {' '}
        <h1 className="head-text">My Education journey </h1>{' '}
        <div className="education-details">
          {' '}
          {educationArr.map((item, i) => (
            <div className="education-card" key={i}>
              <img src={item.image} alt="eduaction-img" />{' '}
              <div className="edu-content">
                {' '}
                <p className="title"> {item.title}</p> <p> {item.subtitle}</p>
              </div>
            </div>
          ))}{' '}
        </div>
      </div>
      <div className="education-img">
        <h3>The Future </h3>{' '}
        <div className="img-center">
          {' '}
          <img src="https://images.unsplash.com/photo-1632910138458-5bf601f3835e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" />{' '}
        </div>{' '}
      </div>
    </div>
  );
}
