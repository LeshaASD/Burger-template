import React, {Fragment} from 'react';
import './MyNewsBlockPrimary.css';

const MyNewsBlockPrimary = props => {
      return (
          props.news.length > 0 ?
              <Fragment>
                  <h1 className='forbes-news-title'>Forbes news</h1>
                  <div className="responsive">
                      {props.news.slice(0, 8).map(news => (
                          <a className="content" key={news.url} href={news.url}>
                              <img src={news.urlToImage} alt=""/>
                              <h4>{news.title}</h4>
                              <p>{news.description}</p>
                          </a>

                      ))}
                  </div>
              </Fragment>
              : null
      )
};

export default MyNewsBlockPrimary;