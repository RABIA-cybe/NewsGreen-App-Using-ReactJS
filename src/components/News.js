import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = []

    constructor (){
        super();
        console.log("I am a constructor from news component");
        this.state ={
            articles: this.articles,
            loading: false,
            page: 1
        }
    }

        async componentDidMount (){
            let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=f37eb6d921ff4ca287b3e54573aa50b8&page=1&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
        }
        
        handlePrevBtn = async ()=>{
            console.log("Prev")

            let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=f37eb6d921ff4ca287b3e54573aa50b8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                articles: parsedData.articles, 
                page: this.state.page - 1});
        }

        handleNextBtn = async ()=>{
            console.log("Next")

            if (Math.ceil(this.state.page >= this.state.totalResults/this.props.pageSize)){

            }
            else{

                let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=f37eb6d921ff4ca287b3e54573aa50b8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
                let data = await fetch(url);
                let parsedData = await data.json();
                console.log(parsedData);
                this.setState({
                    articles: parsedData.articles, 
                    page: this.state.page + 1});
            }

        }
    
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsGreen - Top Headlines </h1>
        <div className="row">
        {this.state.articles.map((element)=>{
              return   <div className="col-md-4" key= {element.url}>
                 <NewsItem title = {element.title?element.title.slice(0,45): ""} description ={element.description?element.description.slice(0,88):""}
                 imageUrl ={element.urlToImage? element.urlToImage: "https://static.independent.co.uk/2023/05/29/14/fd49eabdbb2548078c3b4c57b1a7f2e1.jpg?quality=75&width=1200&auto=webp"}
                 newsUrl ={element.url} />
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
