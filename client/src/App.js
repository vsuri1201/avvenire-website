import './App.css';
import template_logo from './images/templatemo_logo.png';
import model1 from './images/model1.png';
import model2 from './images/model2.png';
import model3 from './images/model3.png';
import model4 from './images/model4.png';

function App() {
  return (
    <>
      <div className="templatemo-top-bar">
        <div className="container">
          <div className="subheader">
            <div className="socicons pull-left">
              <ul>
                <li> <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-lg"></i></a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-lg"></i></a></li>
                <li><a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-lg"></i></a></li>
                <li><a href="https://plus.google.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus fa-lg"></i></a></li>
              </ul>
            </div>
            <div className="pull-right">
              <ul className="email">
                <li><i className="fa fa-phone fa-lg"></i> Call Us: 919-656-7976 or 919-491-2179</li>
                <li className="bor-none"><i className="fa fa-envelope fa-lg"></i>
                  <a href="mailto:hr@avveniresolutions.com">hr@avveniresolutions.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="templatemo-top-menu">
        <div className="container">
          <div className="navbar navbar-default" role="navigation">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html" rel="Avvenire Solutions">
                  <img src={template_logo} alt="logo" />
                </a>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right" style={{ marginRight: "40px" }}>
                  <li className="active"><a href="index.html">Home </a></li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="services.html">Services </a></li>
                  <li><a href="training.html">Training</a></li>
                  <li><a href="solutions.html">Solutions</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                  <li><a href="carrer.html">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="carousel">
          <br /> {/* Self-close the <br> tag */}
          <div>
            <div>
              <br />Avvenire Consultants providing DevOps services at Fresenius Medical Care by partnering with Xduce.
              <br />Avvenire Consultants providing Java Tech Solutions and QA Automation Services at Kaiser Permanente via Gavs
              Technologies and Fidelity via Beacon Hill Technologies.
              <div className="scrolling-text">
                Avvenire Consultants providing DevOps services...
              </div>
            </div>
          </div>
          <div id="da-slider" className="da-slider">
            <div className="da-slide">
              <p style={{ paddingTop: '90px' }}>
                <h2 style={{ textAlign: 'center', fontSize: '50px' }}>AVVenire Solutions</h2>
                <h2 className="pad-t-60" style={{ fontSize: '35px', textAlign: 'center' }}>Strive for Excellence</h2>
              </p>

              <div className="da-img">
                <img src={model1} alt="image01" />
              </div>
            </div>

            <div className="da-slide">
              <p>Avvenire solutions is a consulting and IT services Company. A technology solutions provider company located in the heart of Silicon Valley.</p>
              <div className="da-img">
                <img src={model2} alt="image01" />
              </div>
            </div>

            <div className="da-slide">
              <p>Avvenire solutions have a passion to train individuals for their best career & provide services to our customers with due diligence.</p>
              <div className="da-img">
                <img src={model3} alt="image01" />
              </div>
            </div>

            <div className="da-slide">
              <p>Avvenire solutions offer industry-specific and customized end-to-end solutions that help clients. As a diverse end-to-end IT solution provider, Avvenire solutions believes in experienced and quality services to our customers for long-term solutions.</p>
              <div className="da-img">
                <img src={model4} alt="image01" />
              </div>
            </div>

            <nav className="da-arrows">
              <span className="da-arrows-prev"></span>
              <span className="da-arrows-next"></span>
            </nav>
          </div>
          <br /> {/* Self-close the <br> tag */}
        </div>
      </div>
    </>
  );
}

export default App;
