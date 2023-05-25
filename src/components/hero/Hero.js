import About from "../about/About"
import { useEffect } from "react";

const Hero = () => {
   
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        // h2ref.current.scrollIntoView();
      }, []);
    return (
        <>
          <section  className="hero">
            <div className="hero-main">
                <div className="hero-main-text">WE ARE INFINITY.</div>
                <h1>We Craft Stunning Digital Experiences.</h1>
            </div>
        </section>
        <About />
        </>
      
    )
}
export default Hero