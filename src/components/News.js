import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    const capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
   



    const uppdateNews = async ()=> {
        props.setProgress(20);
        const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        props.setProgress(40);
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(60);
        let parsedData = await data.json();
        console.log(parsedData);
        props.setProgress(80);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
         document.title = `NewsGreen - ${capitalizeFirstLetter(props.category)} News `;
         setPage(page+1);
        uppdateNews();
       
        
    }, [])


        
       const handlePrevBtn = async ()=>{

            setPage(page-1);
            uppdateNews();
        }

       const handleNextBtn = async ()=>{

            setPage(page+1)
            uppdateNews();

        }

        const fetchMoreData = async () => {
            setPage(page+1)
            const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
            
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            setArticles(articles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults);
          };


    return (
      <>
      
        <h1 className='text-center text-dark' style={{margin: '80px 0px 30px'}}>NewsGreen - Top {capitalizeFirstLetter(props.category)} Headlines </h1>
        {loading && <Loader />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Loader />}
        >
            <div className="container">
        <div className="row">

            
        { articles.map((element)=>{
              return   <div className="col-md-4" key= {element.url}>
                 <NewsItem title = {element.title?element.title: ""} description ={element.description?element.description.slice(0,80):"Description Not available"}
                 imageUrl ={element.urlToImage? element.urlToImage: "https://static.independent.co.uk/2023/05/29/14/fd49eabdbb2548078c3b4c57b1a7f2e1.jpg?quality=75&width=1200&auto=webp"}
                 newsUrl ={element.url} author={element.author? element.author.slice(0,13):"Unknown"} date={element.publishedAt}
                 source={element.source.name} />
             </div>
        })}
           
        </div>
        </div>

        </InfiniteScroll>
{/* 
        <div className="container d-flex justify-content-between">
            <button disabled={page <= 1} type='button' className="btn btn-lg btn-dark" onClick={handlePrevBtn}>&larr; Previous</button>
            <button disabled={Math.ceil(page >= totalResults/props.pageSize)} type='button' className="btn btn-lg btn-dark" onClick={handleNextBtn}>Next &rarr;</button>
        </div> */}
        
      </>
    )
}

News.defaultProps ={
    country: 'in',
    pageSize: 6,
    category: 'general'

}

News.propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

}

export default News
