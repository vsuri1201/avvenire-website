import './TrainingComponent.css'
import training_image from '../../assets/images/animation_banner_image.png'
import java_logo from '../../assets/images/java_j2ee.jpg'
import oracle_logo from '../../assets/images/oracle.jpg'
import dotnet_logo from '../../assets/images/dotnet.jpg'
import change_mgmt_logo from '../../assets/images/change_mgmt.jpg'
import devops_logo from '../../assets/images/devops.jpg'
import big_data_logo from '../../assets/images/big_data.jpg'

const TrainingComponent = ()=>{

    return (
    <>
        <div className="row bgcolr training-content-info">
            <div className="container mar-t-20 wow bounceInRight">
                <div className="col-md-offset-1 col-md-3 box">
                    <img src={training_image} className="thumbnail img-responsive mar-t-30" alt=""></img>
                </div>
                <div className="col-md-7 mar-t-15 box">
                    <p>At <strong>Avvenire Solutions</strong>, we offer <strong>customized training programs</strong> designed to enhance the skills and expertise of your workforce. Our training spans <strong>technical skills</strong>, <strong>leadership development</strong>, and <strong>industry-specific knowledge</strong>, ensuring your team is equipped to meet current challenges and future opportunities.</p>
                    <ul>
                        <li><strong>Technology Training</strong>: Hands-on sessions covering the latest in <strong>cloud technologies</strong>, <strong>DevOps</strong>, <strong>software development</strong>, and <strong>cybersecurity</strong>.</li>
                        <li><strong>Leadership & Soft Skills</strong>: We help develop key leadership qualities, <strong>communication skills</strong>, and <strong>project management</strong> capabilities.</li>
                        <li><strong>Industry-Specific Training</strong>: Tailored to sectors like <strong>finance</strong>, <strong>healthcare</strong>, and <strong>retail</strong>, ensuring relevance and real-world application.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="training-content container mar-t-20">
                <div className="col-md-offset-1 col-md-10">
                    <div className="row">
                        <div className="col-md-4 falling-column">
                            <div className="box">
                                <div className="custom-thumbnail round">
                                    <img alt="Java/J2EE" className="img-responsive" src={java_logo}></img>
                                    <div className="custom-caption">
                                        <a href="http://www.oracle.com/technetwork/java/index-jsp-135888.html" target="_blank"><button className="btn btn-default pull-right">Know More</button></a>
                                        <h3>JAVA/J2EE</h3>
                                        <p>Learn Java and J2EE technologies through Oracle University’s expert-led courses. Whether you're a beginner or looking to advance your skills, gain the expertise to build scalable, secure applications.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="custom-thumbnail round">
                                    <img alt="DevOps" className="img-responsive" src={devops_logo}></img>
                                    <div className="custom-caption">
                                        <a className="btn btn-default pull-right" href="https://en.wikipedia.org/wiki/DevOps" target="_blank">Know more</a>
                                        <h3>DevOps</h3>
                                        <p>Master DevOps methodologies that emphasize collaboration between development and IT operations. Learn how to automate the software delivery process, manage infrastructure, and improve system reliability.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 falling-column">
                            <div className="box">
                                <div className="custom-thumbnail round">
                                    <img alt=".NET" className="img-responsive" src={dotnet_logo}></img>
                                    <div className="custom-caption">
                                        <a className="btn btn-default pull-right" href="https://en.wikipedia.org/wiki/.NET_Framework" target="_blank">Know more</a>
                                        <h3>Microsoft .NET</h3>
                                        <p>Explore web development with Microsoft .NET. This training covers server-side development using C#, MVC, HTML5, and JavaScript, empowering you to build modern web applications using the latest technologies.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="custom-thumbnail round">
                                    <img alt="Change Management" className="img-responsive" src={change_mgmt_logo}></img>
                                    <div className="custom-caption">
                                        <a className="btn btn-default pull-right" href="https://en.wikipedia.org/wiki/Change_management" target="_blank">Know more</a>
                                        <h3>Change Management</h3>
                                        <p>Develop the skills needed to manage organizational change. Learn strategies to lead individuals and teams through transitions, adapt to new processes, and mitigate resistance for smoother transformation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 falling-column">

                            <div className="box">
                                <div className="custom-thumbnail round">
                                    <img alt="Oracle" className="img-responsive" src={oracle_logo}></img>
                                    <div className="custom-caption">
                                        <a className="btn btn-default pull-right" href="http://education.oracle.com/pls/web_prod-plq-dad/db_pages.getpage?page_id=3" target="_blank">Know more</a>
                                        <h3>Oracle</h3>
                                        <p>Take Oracle University’s comprehensive courses to deepen your understanding of Oracle technologies. Learn database management, cloud solutions, and enterprise applications directly from the experts.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="box">
                                <div className="custom-thumbnail round">
                                    <img alt="Big Data" className="img-responsive" src={big_data_logo}></img>
                                    <div className="custom-caption">
                                        <a className="btn btn-default pull-right" href="http://bigdatauniversity.com/" target="_blank">Know more</a>
                                        <h3>Big Data</h3>
                                        <p>Unlock the potential of Big Data with hands-on training in Hadoop, Spark, and data analytics. Learn how to manage, process, and analyze large datasets to gain actionable insights that drive business growth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default TrainingComponent