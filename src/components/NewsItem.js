import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className='my-3'>
                <div className="card " >
                    <span className="position-absolute top-0   badge rounded-pill bg-danger" style={{zIndex:1, right: '-2%'}}>
                        {source}</span>
                        <img src={imageUrl} className="card-img-top" style={{ height: "200px" }} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title d-flex align-items-center justify-content-center" style={{ height: '9rem' }}>{title}</h5>
                            <p className="card-text" style={{ height: "4.6rem" }}>{description}...</p>
                            <p className="card-text" style={{ height: '3rem' }}><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Know More!</a>
                        </div>
                </div>
            </div>
        )
}

export default NewsItem
