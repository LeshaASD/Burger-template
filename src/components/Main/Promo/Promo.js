import React from 'react';
import './Promo.css';
import Newstitle from "./Newstitle/Newstitle";
import UnderMenu from "./UnderMenu/UnderMenu";

const Promo = props => {
      return (
          props.news.length > 0 ?
          <div className='promo-block' style={{backgroundImage: `url(${props.background})`}}>
              <UnderMenu/>
                <div className='title-news'>
                    <a href={props.news[0].url}>
                    <h3>{props.news[0].title}</h3>
                    <p>{props.news[0].description}</p>
                    <small>{props.news[0].author}</small></a>
                </div>
                <div className='row'>
                    {props.news.slice(1, 5).map(news => <Newstitle key={news.publishedAt}
                    title={news.title} author={news.author} url={news.url}/>)}
                </div>

              }
          </div> : null
      )
};


export default Promo;