import React from "react";
import './home.css';
import Typed from "react-typed";
import 'react-typed/dist/animatedCursor.css';

function Home() {
    return (
        <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
            <div class="hero-container" data-aos="fade-in">
            <h1>Aditya Bayu Aji</h1>
            <p>I'm <span>
                <Typed className="job-reference"
                    strings={['UI Designer','Junior Front-End Developer','Freelancer']}
                    loop
                    typeSpeed= {100}
                    backSpeed= {50}
                    backDelay= {2000}
                />
                </span></p>
            </div>
        </section>
    );
}

export default Home;