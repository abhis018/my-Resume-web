import React from 'react';
import Pdf from './res.pdf';
//import './Resume.css';


const Resume = () => {
    return (
        <div>
            <h2 className="pv4">Resume</h2>
            <embed src={Pdf} width="810px" height="1050px"/><hr/>
        </div>
       
    )
}

export default Resume;