import React, {Component} from 'react';
import './Main.css';
import axios from 'axios';
import Promo from "../../components/Main/Promo/Promo";
import TechnologyBlock from "../../components/Main/TechnologyBlock/TechnologyBlock";
import MyNewsBlockPrimary from "../../components/Main/MyNewsBlockPrimary/MyNewsBlockPrimary";

const API_KEY = '&apiKey=83c29036601745d3ac407b8a86897646';

class Main extends Component {
    state = {
        news: [],
        technologyNews: [],
        frontNews: [],
        primaryBlockNews: [],
        loading: false
    };

    componentDidMount() {
        axios.get('top-headlines?country=us' + API_KEY).then(response => {
            this.setState({news: this._makeNewsArray(response)})
        });
        axios.get('top-headlines?country=us&category=technology' + API_KEY).then(response => {
            this.setState({technologyNews: this._makeNewsArray(response)})
        });
        axios.get('everything?language=en&q=frontend,javascript,node,react' + API_KEY).then(response => {
            this.setState({frontNews: response.data.articles});
        });
        axios.get('everything?domains=forbes.ru' + API_KEY).then(response => {
            this.setState({primaryBlockNews: response.data.articles});
        })
    }


    _makeNewsArray = (object) => {
        const news = [];
        for (let i = 0; i < 5; i++) {
            news.push(object.data.articles[i]);
        }
        return news;
    };

    render() {
        return (
            <div className='main'>
                <Promo background={this.state.news.length > 0 ? this.state.news[0].urlToImage : null}
                news={this.state.news}/>
                <TechnologyBlock news={this.state.technologyNews} frontnews={this.state.frontNews}/>
                <MyNewsBlockPrimary news={this.state.primaryBlockNews}/>
            </div>
        )
    }
}

export default Main;