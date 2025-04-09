import { Link } from "react-router-dom";
import './../style/Home.css'
import bg from "./../assets/bg.jpeg"

function Home() {
    return (
        <div id="mainContainerHome">
            {/* <img src = {bg} /> */}
            {/* <h1>Don't know what to see?</h1> */}
            <div id="content">
                <h1>Can't pick a movie?</h1>
                <h2 id="contentBody">You've come to the right place! </h2>
                <p>With just a few clicks, you can get movie suggestions based on your preferred genres and language</p>
                {/* <h2>just select the language and the genres you have in mind and we'll take care of the rest!!</h2> */}
                <Link to="/RandoMovie/movies" id="toMovies"><button>Let's Go</button></Link>
            </div>
        </div>
    );
}

export default Home;