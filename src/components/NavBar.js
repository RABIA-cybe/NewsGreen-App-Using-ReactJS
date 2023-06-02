import React, { Component } from 'react'
import {Link} from "react-router-dom";
  

export class NavBar extends Component {
    addActiveClass = (event)=>{
        console.log("this is" +event);
        // element.currentTarget.hasClass("active")?element.currentTarget.classList.remove("active"):element.currentTarget.classList.add("active");
        // element.currentTarget.classList.add("active");
        const links = document.querySelectorAll('.nav-link');
        links.forEach((link) => {
          link.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
    }
    render() {
        return (
            <div>
                <nav className="navbar bg-dark border-bottom border-bottom-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">NewsGreen</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase active" onClick={this.addActiveClass} aria-current="page" to="/">home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" onClick={this.addActiveClass} to="/business">business</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" onClick={this.addActiveClass} to="/entertainment">entertainment</Link></li>
                              
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" onClick={this.addActiveClass} to="/health">health</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" onClick={this.addActiveClass} to="/science">science</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" onClick={this.addActiveClass} to="/sports">sports</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase" onClick={this.addActiveClass} to="/technology">technology</Link></li>


                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
