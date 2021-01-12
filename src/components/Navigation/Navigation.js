import React from 'react';
import './Navigation.css';

const Navigation = () => {
    function clickContact() {
        global.scrollTo(4500, 4500);
    }
    function clickAbout() {
        global.scrollTo(650, 650);
    }
    function clickResume() {
        global.scrollTo(1400, 1400);
    }
    return (
        <div>
            <div className="name pv4 f1 b">ABHISHEK KUMAR<br/></div> 
            <ul className="bar pa3">
                <li className="rel" onClick={clickAbout}>ABOUT</li>
                <li className="rel" onClick={clickResume}>RESUME</li>
                <li className="rel">PROJECTS</li>
                <li className="rel" onClick={clickContact}>CONTACT</li>
            </ul>
        </div>
    )
}

export default Navigation;