import React from 'react';
import Pdf1 from './certi1.pdf';
import Pdf2 from './certi2.pdf';

const Achievements = () => {
    return (
        <div>
            <h2 className="pv4">Achievements</h2>
            <embed src={Pdf1} width="1000px" height="800px"/>
            <embed src={Pdf2} width="1000px" height="800px"/><hr/>
        </div>
       
    )
}

export default Achievements;