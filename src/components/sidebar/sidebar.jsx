import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./sidebar.css";


function Sidebar() {
    const [author, setAuthor] = useState({
        name: 'Aditya Bayu Aji',
        imgUrl: 'https://avatars.githubusercontent.com/u/67412071?v=4'
    });
    
    return (
        <div className="sidebar d-flex flex-column">
            <i class="fa fa-bars mobile-nav-toggle d-none"></i>
            <div className="profile">
                <img src={author.imgUrl} alt={author.name} className="img-fluid" />
                <h1 className="text-light"><a href="index.html">{author.name}</a></h1>
                <ul className="social-links">
                    <li><a href="#" className="instagram"><i className="icon fas fa-brands fa-instagram"></i></a></li>
                    <li><a href="#" className="gmail"><i className="icon fas fa-envelope"></i></a></li>
                    <li><a href="#" className="linkedin"><i className="icon fas fa-brands fa-linkedin"></i></a></li>
                    <li><a href="#" className="github"><i className="icon fas fa-brands fa-github"></i></a></li>
                    <li><a href="#" className="whatsapp"><i className="icon fas fa-brands fa-whatsapp"></i></a></li>
                </ul>
            </div>
            <nav id="navbar" className="nav-menu navbar">
                <ul>
                    <li><a href="#hero" className="nav-link scrollto active"><i className="nav-icon fas fa-house"></i> <span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><i className="nav-icon fas fa-user"></i> <span>About</span></a></li>
                    <li><a href="#resume" className="nav-link scrollto"><i className="nav-icon fas fa-file-lines"></i> <span>Resume</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><i className="nav-icon fas fa-laptop-code"></i> <span>Portfolio</span></a></li>
                    <li><a href="#contact" className="nav-link scrollto"><i className="nav-icon fas fa-paper-plane"></i> <span>Contact</span></a></li>
                </ul>
            </nav>
        </div>
    );
}



export default Sidebar;