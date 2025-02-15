import './HomeComponent.css'
import React, {useState} from 'react'
import about_image from '../../assets/images/animation_banner_image.png'
import training_image from '../../assets/images/training.jpg'
import services_image from '../../assets/images/services.jpg'
const HomeComponent = ({setActiveContent})=>{

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
      };

    return (
        <div className='home-content'>
            
            <div className="row bgcolr mb-4">
                <div className="container mar-t-50 wow bounceInLeft">

                    <div className="col-md-4">
                        <img src={about_image} className="thumbnail img-responsive" alt=""></img>
                    </div>
            
                    <div className="col-md-8">
                        <h2 className='h2-left'>Welcome to Avvenire Solutions</h2>
                        <p>Avvenire solutions is  a consulting and IT services
                        Company.  A technology solutions provider company located in the heart of
                        silicon valley.<br></br>We help the IT Organizations to run more efficient business by providing
                        the technology solutions.<br></br>Avvenire offers wide gamut of IT services customized to specific client
                        needs and helps through all the stages of Software Development Life Cycle</p>
                
                        <button className="btn btn-default pull-left" onClick={()=>{setActiveContent('About Us'); handleScrollToTop();}}>Read More</button>
                    </div>
                </div>
            </div>

            <div className="row mb-5">
                <div className="container">
            
                    <div className="col-md-4 wow bounceIn">
                        <div className="custom-thumbnail round">
                            <img src={training_image} className="img-responsive" alt="..."></img>
                            <div className="custom-caption">
                                <h3>Training </h3>
                                <p>Avvenire solutions have a passion to train the individuals for their best career & provide the services</p>
                                <button className="btn btn-default pull-right" onClick={()=>{setActiveContent('Training'); handleScrollToTop();}}>Read More</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4 wow bounceIn">
                        <div className="custom-thumbnail round">
                            <img src={services_image} className="img-responsive" alt="..."></img>
                            <div className="custom-caption">
                                <h3>Services </h3>
                                <p>Avvenire solutions has extensive industry experience in providing the IT services from requirements</p>
                                <button className="btn btn-default pull-right" onClick={()=>{setActiveContent('Services'); handleScrollToTop();}}>Read More</button>
                            </div>
                        </div>
                    </div>
            
            
                </div>
            </div>

            <div className = "row mb-4">
                <div className="marquee-wrapper">

                    <div className="marquee">
                        <p className='marquee-text'>
                            Our team is proficient in React, Node.js, Python, Java, and much more! &nbsp;
                            We have successfully delivered projects to clients worldwide. &nbsp;
                            Our core values are innovation, quality, and customer satisfaction! &nbsp;
                        </p>
                        <p className='marquee-text'>
                            Avvenire Consultants provided services at Qualcomm and SCIF by partnering with Alten Calsoft Labs & Latitude 36.
                            Avvenire partnered with Infinite for implementing IT Solutions to IBM.
                        </p>
                        <p className='marquee-text'>
                            Avvenire Consultants providing DevOps services at Fresenius Medical care by partnering with Xduce.
                        </p>
                        <p className='marquee-text'>
                            Avvenire Consultants providing  Java Tech Solutions and QA Automation Services at Kaiser Permanente via Gavs Technologies and Fidelity via Beacon Hill Technologies.
                        </p>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default HomeComponent