import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps ={
        country: 'in',
        pageSize: 6,
        category: 'general'

    }

    static propTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    }

    capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
   

    constructor (props){
        super(props);
        console.log("I am a constructor from news component");
        this.state ={
            articles: [],
            loading: false,
            page: 1
        }

        document.title = `NewsGreen - ${this.capitalizeFirstLetter(this.props.category)} News `;
    }

    async uppdateNews() {
        const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f37eb6d921ff4ca287b3e54573aa50b8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles,
             totalResults: parsedData.totalResults,
            loading:false});
    }

        async componentDidMount (){
            // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f37eb6d921ff4ca287b3e54573aa50b8&page=1&pageSize=${this.props.pageSize}`;
            // this.setState({loading:true});
            // let data = await fetch(url);
            // let parsedData = await data.json();
            // console.log(parsedData);
            // this.setState({articles: parsedData.articles,
            //      totalResults: parsedData.totalResults,
            //     loading:false});
            this.uppdateNews();
        }
        
        handlePrevBtn = async ()=>{
            // console.log("Prev")

            // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f37eb6d921ff4ca287b3e54573aa50b8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            // this.setState({loading:true});
            // let data = await fetch(url);
            // let parsedData = await data.json();
            // console.log(parsedData);
            // this.setState({
            //     articles: parsedData.articles, 
            //     page: this.state.page - 1,
            //     loading:false});

            this.setState({ page: this.state.page - 1,});
            this.uppdateNews();
        }

        handleNextBtn = async ()=>{
            // console.log("Next")

            // if (!Math.ceil(this.state.page >= this.state.totalResults/this.props.pageSize)){

            //     let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f37eb6d921ff4ca287b3e54573aa50b8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            //     this.setState({loading:true});
            //     let data = await fetch(url);
            //     let parsedData = await data.json();
            //     console.log(parsedData);
            //     this.setState({
            //         articles: parsedData.articles, 
            //         page: this.state.page + 1,
            //         loading:false});
            // }

            this.setState({ page: this.state.page + 1,});
            this.uppdateNews();

        }
    
  render() {
    return (
      <div className='container my-3 '>
        <h1 className='text-center text-dark'>NewsGreen - Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h1>
        {this.state.loading && <Loader />}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
              return   <div className="col-md-4" key= {element.url}>
                 <NewsItem title = {element.title?element.title: ""} description ={element.description?element.description.slice(0,80):"Description Not available"}
                 imageUrl ={element.urlToImage? element.urlToImage: "https://static.independent.co.uk/2023/05/29/14/fd49eabdbb2548078c3b4c57b1a7f2e1.jpg?quality=75&width=1200&auto=webp"}
                 newsUrl ={element.url} author={element.author? element.author.slice(0,13):"Unknown"} date={element.publishedAt}
                 source={element.source.name} />
             </div>
        })}
           
        </div>

        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type='button' className="btn btn-lg btn-dark" onClick={this.handlePrevBtn}>&larr; Previous</button>
            <button disabled={Math.ceil(this.state.page >= this.state.totalResults/this.props.pageSize)} type='button' className="btn btn-lg btn-dark" onClick={this.handleNextBtn}>Next &rarr;</button>
        </div>
        
      </div>
    )
  }
}

export default News
