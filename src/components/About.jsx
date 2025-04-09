import "./../style/About.css";
import Me from "./../assets/me1.jpeg";

function About() {
    return (
        <div id="aboutContainer">
            <div id="aboutBody">
                <div id="leftHalf">
                    <div id="aboutImg"></div>
                    {/* <img src={Me}></img> */}
                </div>
                <div id="rightHalf">
                    <p id="titleAboutMe" >So, who am I?</p>
                    <p id='bodyAboutMe' className="paraPoints">Hey there! <b>I’m Somesh</b> — part developer, part movie enthusiast, and full-time survivor of the <b>“What should we watch tonight?”</b> struggle. <b className="paraExtra">This site is a mix of my love for development and storytelling</b>
                    <p className="paraPoints">With just a few clicks, you can get movie suggestions based on your preferred genres and language — <b className="paraExtra">no more endless scrolling or flipping a coin between two mediocre options.</b></p>
                    <p className="paraPoints paraExtra">Apart from coding, I enjoy exploring new tools and technologies, and yes, catching the occasional binge-worthy series.</p>   
                    <p className="paraPoints paraExtra">Thanks for visiting — I hope this platform adds value to your movie nights!</p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;