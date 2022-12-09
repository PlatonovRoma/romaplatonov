import React from "react";
import './SectionItem.css'
import { useState } from "react";


const SectionItem = (props) => {
    const [active, setActive] = useState(false);
    return (
        <div className="sectionItem">

            <div className={active ? 'front active' : 'front'} 
                onClick={() => setActive(true)}>

                <div className="sectionItem_icon">{props.icon}</div>
                <div className="sectionItem_title">{props.title}</div>
            </div>

            <div className={active ? 'back active' : 'back'}
                onClick={() => setActive(false)}>
                    {props.title}<br/> <br/>{props.text}
            </div>
        </div>
    )
}

export default SectionItem;