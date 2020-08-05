import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY>100){
        handleShow(true)
      } else handleShow(false);
    })
    return () => {
      window.removeEventListener('scroll');
    }
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
        className="nav__logo"/>

        <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Avatar"
        className="nav__avatar"/>

    </div>
  )
}

export default Nav;

/*
Notice that the navbar's background changes as one scrolls down.
We use useEffect here to change the style in the nav bar.
It sets a listener to listen for the scroll on the Y axis (up/down)
if the scroll is greater than 100px, then set handleShow to true
else it's false

the return statement then removes the listener, because otherwise
react would set one up in every re-render

the current state of handle show is stored in useState

There is a conditional statement in the rendering, have
nav class always active, but when show is true, add also
nav__black class.
*/

