import React from 'react';
import './Technologyblock.css';
import Slider from "./Slider/Slider";
import FrontendNews from "./FrontendNews/FrontendNews";

const TechnologyBlock = props => {
    return (
        <div className='second-block-news'>
            {props.news.length > 0 ?
                <div className='title-tech'>
                    <h1>Technology</h1>
                </div>
                : null
            }
            <div className="row-tech">
                <FrontendNews news={props.frontnews}/>
                <div className="slider">
                    <Slider news={props.news}/>
                </div>
            </div>
        </div>
    )
};

export default TechnologyBlock;