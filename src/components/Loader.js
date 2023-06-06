import React from 'react'
import loader from './loader.gif'

const Loader = () => { 

    return (
      <div className='d-flex justify-content-center align-items-center ' style={{height: '75vh'}}>
        <img src={loader} alt="loading" style={{width:'150px'}} />
      </div>
    )
}

export default Loader
