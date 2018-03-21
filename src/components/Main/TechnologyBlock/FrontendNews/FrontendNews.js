import React from 'react';
import './FrontendNews.css';

const FrontendNews = props => {
    return (
        props.news ?
        <div className='front-news'>
            <h4 className='front-title'>Front-end, JS, React, Node</h4>
            <div className='front-block'>
                <ul className="list-group list-group-flush">
                    {props.news.map(news =>
                        <a href={news.url} key={news.url} className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h6 className="mb-1 h6-title">{news.title}</h6>
                            </div>
                            <p className="mb-1">{news.description}</p>
                            <small>{news.url}</small>
                        </a>
                    )}
                </ul>
            </div>
        </div> : null
    )
};

export default FrontendNews;