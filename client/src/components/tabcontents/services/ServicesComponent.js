import './ServicesComponent.css'
import service_image from '../../assets/images/animation_banner_image.png'
const ServicesComponent = ()=>{
    return (
    <div className='container'>
        <div className="row bgcolr">
            <div className="services-content container mar-t-50 wow bounceInLeft">
                <div className="col-md-4">
                    <img src={service_image} className="thumbnail img-responsive" alt=""></img>
                </div>
                <div className="col-md-8">
                    <p>Avvenire Solutions offers end-to-end IT services, from requirement gathering to implementation, delivery, and maintenance. We serve various industries, including Telecom, Finance, and more, offering solutions tailored to your business size and needs.</p>
                    <p>Our services help businesses reduce implementation costs while delivering scalable, optimized solutions to meet evolving customer demands.</p>
                    <p>We specialize in Application Development, DevOps, and Production Support, with consultants who bring deep technical expertise to each project.</p>
                    <p>Our team is committed to providing niche services, ensuring that every client benefits from our specialized knowledge and experience in diverse domains.</p>
                </div>
            </div>
        </div>
        <div className="row mar-t-50">
            <div className="col-md-12 mar-b-30 services">

                <div className="col-md-4 box">
                    <div className="icon-medium icon-bg round-full mar-b-15 r3"> 
                        <i className="fa fa-archive"></i>
                    </div>
                    <div className="desc">
                        <h3>Product and Application Development</h3>
                        <p>We design and develop products that balance client requirements with technology constraints, ensuring the best feature set while minimizing costs. Our engineers excel at transforming business needs into technical solutions.</p>
                    </div>
                </div>

                <div className="col-md-4 box">
                    <div className="icon-medium icon-bg round-full mar-b-15 r2"> 
                        <i className="fa fa-windows"></i> 
                    </div>
                    <div className="desc">
                        <h3>Enterprise Software Applications</h3>
                        <p>We provide scalable, high-performance enterprise applications that streamline operations and boost productivity. Our solutions are designed to meet the specific needs of your business while ensuring growth and efficiency.</p>
                    </div>
                </div>

                <div className="col-md-4 box">
                    <div className="icon-medium icon-bg round-full mar-b-15 r1">
                            <i className="fa fa-user"></i> 
                    </div>
                    <div className="desc">
                        <h3>Software Configuration & Release Management</h3>
                        <p>We manage version control, build infrastructure, and handle deployment processes. Our team specializes in continuous integration and high-quality release management, ensuring smooth deployment to QA and production environments.</p>
                    </div>
                </div>

            </div>
        </div>

        <div className='row mar-t-20'>
            <div className='col-md-12 mar-b-30 services'>
                <div className="col-md-4 box">
                    <div className="icon-medium icon-bg round-full mar-b-15 r4">
                        <i className="fa fa-check"></i>
                    </div>
                    <div className="desc">
                        <h3>Quality Assurance</h3>
                        <p>Our QA team ensures products meet the highest quality standards through thorough verification and validation. We utilize automated testing tools to enhance efficiency and ensure the reliability of your software.</p>
                    </div>
                </div>

                <div className="col-md-4 box">
                    <div className="icon-medium icon-bg round-full mar-b-15 r5">
                        <i className="fa fa-desktop"></i>
                    </div>
                    <div className="desc">
                        <h3>DevOps Administration</h3>
                        <p>We help integrate development and operations by implementing DevOps practices. Our consultants work with tools like Chef and Puppet to optimize infrastructure and support agile releases, improving collaboration between teams.</p>
                    </div>
                </div>

                <div className="col-md-4 box">
                    <div className="icon-medium icon-bg round-full mar-b-15 r6">
                        <i className="fa fa-cog"></i>
                    </div>
                    <div className="desc">
                        <h3>Data Warehousing and Business Intelligence</h3>
                        <p>We help organizations build data warehouses that enable smarter decision-making. Our solutions include designing data models and integrating business intelligence tools to support your company's growth and profitability.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='row mar-t-20'>
            <div className='col-md-12 mar-b-30 services'>
                <div className="col-md-4 box">
                    <div className="icon-medium icon-bg round-full mar-b-15 r7">
                        <i className="fa fa-code"></i>
                    </div>
                    <div className="desc">
                        <h3>Website Development</h3>
                        <p>We offer custom web and mobile application development, ensuring user-friendly interfaces and professional designs. Additionally, we provide logo design, branding materials, and marketing collateral to elevate your brand.</p>
                    </div>
                </div>

                <div className="col-md-4 box">
                    <div className="icon-medium icon-bg round-full mar-b-15 r8">
                        <i className="fa fa-users"></i>
                    </div>
                    <div className="desc">
                        <h3>Staffing Solutions</h3>
                        <p>We connect you with highly skilled professionals for direct hire or contract opportunities. Our staffing solutions ensure your business gets the right talent to drive growth and succeed in competitive markets.</p>
                    </div>
                </div>  
            </div>
        </div>
    </div>
    )
}


export default ServicesComponent