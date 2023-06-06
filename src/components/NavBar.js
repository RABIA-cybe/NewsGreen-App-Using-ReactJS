import React from 'react'
import {Link} from "react-router-dom";
  

const NavBar = () => {
  const  addActiveClass = (event)=>{
        console.log("this is" +event);
        // element.currentTarget.hasClass("active")?element.currentTarget.classList.remove("active"):element.currentTarget.classList.add("active");
        // element.currentTarget.classList.add("active");
        const links = document.querySelectorAll('.nav-link');
        links.forEach((link) => {
          link.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
    }
        return (
            <div>
                <nav className="navbar bg-dark fixed-top border-bottom border-bottom-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">NewsGreen</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase active" onClick={addActiveClass} aria-current="page" to="/">home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" onClick={addActiveClass} to="/business">business</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" onClick={addActiveClass} to="/entertainment">entertainment</Link></li>
                              
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" onClick={addActiveClass} to="/health">health</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" onClick={addActiveClass} to="/science">science</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" onClick={addActiveClass} to="/sports">sports</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" onClick={addActiveClass} to="/technology">technology</Link></li>


                            </ul>

                        </div>

                        {/* <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Select Country
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/Japan">Japan</Link></li>
            <li><Link className="dropdown-item" to="/France">France</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/Russia">Russia</Link></li>
          </ul>
        </li>
        </ul> */}
                    </div>
                </nav>
            </div>
        )

}

export default NavBar
