import React from 'react';
import './Newstitle.css';

const Newstitle = props => {
    return (
        <div className='lil-news-promo'>
            <a href={props.url}>
                <h4>{props.title}</h4>
                <small>{props.author}</small>
            </a>
        </div>
    )
};

export default Newstitle;