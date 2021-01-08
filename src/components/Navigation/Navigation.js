import React from 'react';
import './Navigation.css';

const Navigation = () => {
    function clickHandler() {
        global.scrollTo(1000, 1000);
    }
    return (
        <div>
            <div className="name pv4 f1 b">ABHISHEK KUMAR<br/><span className="f3 i">Fresher(Pass out in 2020)</span></div> 
            <ul className="bar pa3">
                <li><a className="rel">ABOUT</a></li>
                <li><a className="rel">RESUME</a></li>
                <li><a className="rel">PROJECTS</a></li>
                <li className="rel" onClick={clickHandler}>CONTACT</li>
            </ul>
        </div>
    )
}

export default Navigation;