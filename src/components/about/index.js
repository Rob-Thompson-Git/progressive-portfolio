import React from 'react';
import img1 from '../../images/me.jpeg';
import htmlIcon from '../../images/html5.png';
import cssIcon from '../../images/css.png'
import tailwind from '../../images/tailwindIcon.png'
import bootstrap from '../../images/bootstrap.png'
import javascript from '../../images/javascript.png'
import jquery from '../../images/jquery.png'
import react from '../../images/react.png'
import node from '../../images/node.png'
import heroku from '../../images/heroku.png'
import sql from '../../images/mysql.png'
import sequelize from '../../images/sequelize.png'
import mongodb from '../../images/mongodb.png'
import graphql from '../../images/graphql.png'


const About = () => {
    return(
<div name='skills' id='skills'>
<div className="bg-slate-900 px-10">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:items-center lg:gap-8">
          <div className="mt-8 gap-1 md:mt-0 md:grid md:grid-cols-2">
            <div className='col-span-1 flex'> 
            <img src={img1} className="rounded-full p-5 ml-auto mr-auto block" alt="rob thompson web development"/>
            </div>
            <div className='place-self-center left-0 my-10'>
                <h1 className='text-blue-400 text-4xl font-bold underline decoration-gray-50 pb-1'>Technologies</h1>
                <p className='text-gray-50 text-xl mt-2 mb-2'>On the front-end, I am experienced at creating semantic HTML structure to enhance accesssbiliity and SEO. My coding bootcamp instructor and several classmates tell me I have an eye for design, and I am very experienced with CSS and frameworks like Bootstrap, Tailwind CSS, Bulma, and UIkit. I am also experienced at JavaScript, jQuery, and React.js to traverse the DOM and manipulate data rendered to the client. </p>
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-2 px-8">
              <img
                className="max-h-20"
                src={htmlIcon}
                alt="Workcation"
              />
            </div>
            <div className="col-span-1 flex items-center justify-around gap-1 bg-gray-50 py-2 px-8">
              <img className="max-h-20" src={cssIcon} alt="css" />
              <img className="max-h-20" src={tailwind} alt="tailwindcss css tailwind ui" />
              <img className="max-h-16" src={bootstrap} alt="bootstrap" />

            </div>
            <div className="col-span-1 flex justify-around bg-gray-50 py-2 px-8">
              <img className="max-h-20" src={javascript} alt="js javascript es5 es6" />
              <img className="max-h-20" src={jquery} alt="jquery dom traversal" />
              <img className="max-h-20" src={react} alt="jquery dom traversal" />
            </div>
            <div className="col-span-1 flex justify-around bg-gray-50 py-4 px-8">
              <img className='max-h-20' src={node} alt="node node.js backend javacript"/>
              <img className='max-h-20' src={heroku} alt="node node.js backend javacript"/>
            </div>
            <div className="col-span-1 flex justify-around bg-gray-50 py-2 px-8">
              <img className="max-h-20" src={sql} alt="mysql database data"/>
              <img className="max-h-20" src={sequelize} alt="mysql database data"/>
            </div>
            <div className="col-span-1 flex justify-around bg-gray-50 py-2 px-8">
              <img className="max-h-20" src={mongodb} alt="mongodb data base nosql data"/>
              <img className="max-h-20" src={graphql} alt="query nosql apollo graph ql"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}


export default About;