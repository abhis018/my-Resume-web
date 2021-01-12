import React from 'react';
import './Body.css';
import img from './dp.jpeg';

const Body = () => {
    function clickAchievements() {
        global.scrollTo(2700, 2700);
    }
    function clickSkills() {
        global.scrollTo(4500, 4500);
    }
    return (
        <div className="body">
            <div className="about">
                <div className="text1 b i">Hello,<br/><span className="i">a bit about me:</span></div>
                <ul className="personal">
                    <li className="circle1" onClick={clickAchievements}>ACHIEVEMENTS</li>
                    <li className="circle2" onClick={clickSkills}><a>MY SKILLS</a></li>
                </ul>
                <div className="text2 i">
                    <p>To work with an organisation where i can develop in terms of knowledge,skills and
                        attitude. To ensure effective utilization of my analytical abilities and to feed my
                        curiosity by working in competitive and challenging environment.</p><hr/>
                </div>
            </div>
            <img src={img} alt="dp"/>
        </div>
    )
}

export default Body;