import React from 'react';
import './Slider.css';
import img from '../../../../assets/img/tmp-image-04.jpg'


const Slider = props => {
    return (
        props.news.length > 0 ?
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <h4>US tech headlines</h4>
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={props.news[0].urlToImage} alt="1"/>
                    <div className="carousel-caption d-md-block">
                        <a href={props.news[0].url}>
                            <h3>{props.news[0].title}</h3>
                            <span>{props.news[0].source.name}</span>
                            <p>{props.news[0].description}</p>
                        </a>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img className="d-block w-100" src={props.news[1].urlToImage} alt="2"/>
                    <div className="carousel-caption d-md-block">
                        <a href={props.news[1].url}>
                            <h3>{props.news[1].title}</h3>
                            <span>{props.news[1].source.name}</span>
                            <p>{props.news[1].description}</p>
                        </a>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img className="d-block w-100" src={props.news[2].urlToImage} alt="3"/>
                    <div className="carousel-caption d-md-block">
                        <a href={props.news[2].url}>
                            <h3>{props.news[2].title}</h3>
                            <span>{props.news[2].source.name}</span>
                            <p>{props.news[2].description}</p>
                        </a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={props.news[3].urlToImage} alt="4"/>
                    <div className="carousel-caption d-md-block">
                        <a href={props.news[3].url}>
                            <h3>{props.news[3].title}</h3>
                            <span>{props.news[3].source.name}</span>
                            <p>{props.news[3].description}</p>
                        </a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={props.news[4].urlToImage} alt="5"/>
                    <div className="carousel-caption d-none d-md-block">
                        <a href={props.news[4].url}>
                            <h3>{props.news[4].title}</h3>
                            <span>{props.news[4].source.name}</span>
                            <p>{props.news[4].description}</p>
                        </a>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div> : null
    )
};

export default Slider;