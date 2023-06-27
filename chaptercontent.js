import image1 from './assets/chapters/cs.png';
import image2 from './assets/chapters/cass.png';
import image3 from './assets/chapters/ias.png';
import image4 from './assets/chapters/eds.png';
import image5 from "./assets/chapters/pes new.png"
import image6 from './assets/chapters/wie.png';
import image7 from './assets/chapters/sight.png';
import './chaptercontent.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';


const ChaptersPage = () => {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    
    return (
        <div className="main-chapter">

            <div className='top-chapter'>
                <p className='page-text'>CHAPTERS</p>
            </div>

            <div className='chapter-contents'>

                <motion.div className='soc-1' initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} id='cs'>
                    <img src={image1} alt='computer Society' className='chapter-image' />
                        <div className='soc-text'>
                            <p className='soc-title'>Computer Society</p>
                            <p className='soc-sub'>
                                Welcome to our Chapter of IEEE Computer Society! Driven by a passion for technology,
                                the Computer Society has always been on the forefront of the development and popularization of cutting edge
                                technology and software, working alongside giants in the industry as well as academia.
                                <br /><br />We focus
                                on promoting research and upskilling students in a number of emerging fields centred around IT and Computer Science.
                            </p>
                        </div>
                </motion.div>

                <motion.div className='soc-2'initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }} id='cass'>
                    <img src={image2} alt='Cass' className='chapter-image' style={{ height: '300px', width: '300px' }} />
                    <div className='soc-text'>
                        <p className='soc-title'>Circuits And Systems Society</p>
                        <p className='soc-sub'>
                            Welcome to our Chapter of IEEE Circuits and Systems Society !<br /><br />
                            A leading organization that promotes the advancement of the theory, analysis, design, tools and
                            implementation of algorithms for signal and information processing. The society brings engineers
                            and researchers involved in circuits and systems applications access to the industry's most essential
                            technical information, networking opportunities and career development tools.
                        </p>
                    </div>
                </motion.div>

                <motion.div className='soc-3'initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }} id='ias'>
                    <img src={image3} alt='ias' className='chapter-image' style={{ height: '300px', width: '300px' }}/>
                    <div className='soc-text'>
                        <p className='soc-title'>Industry Applications Society</p>
                        <p className='soc-sub'>
                            Welcome to our Chapter of IEEE Industry Applications Society ! <br /><br />
                            A society that is interested in the advancement of the theory and practice of electrical and electronic engineering
                            in the development, design, manufacture and application of electrical systems, apparatus,
                            devices and controls. <br /><br />
                            Through conferences, publications and technical activities, IAS provides a platform
                            for professionals and students
                            to collaborate, network and drive innovation in industries critical to modern society.
                        </p>
                    </div>
                </motion.div>

                
                <motion.div className='soc-4' initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }} id='eds'>
                    <img src={image4} alt='eds' className='chapter-image' style={{ height: '300px', width: '300px' }}/>
                    <div className='soc-text'>
                        <p className='soc-title'>Electron Devices Society</p>
                        <p className='soc-sub'>
                            Welcome to our Chapter of IEEE Electron Devices Society !<br /><br />
                            We bring together research in a number of fields fostering interest in all aspects
                            of Electron Devices, including but not limited to the engineering, physics,
                            theory and experimentation of electron and ion devices involving applications in bioelectronics,
                            MEMS, signal processing, computation, micro mechanics and a lot more ! <br /><br />
                            One of our objectives has always been to promote Electron Devices
                            amongst the larger crowd, which we achieve through a multitude of fun competitions
                            and workshops.
                        </p>
                    </div>
                </motion.div>

                <motion.div className='soc-5' initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }} id='pes'>
                    <img src={image5} alt='pes' className='chapter-image' style={{ height: '300px', width: '300px' }}/>
                    <div className='soc-text'>
                        <p className='soc-title'>Power And Energy Society</p>
                        <p className='soc-sub'>
                            Welcome to our Chapter of IEEE Power And Energy Society! <br /><br />
                            We promote power engineering education through the use of tutorial sessions, publications,
                            and other suitable programs.<br />
                            We aim to provide and promote the recognition of significant achievement, by individuals or groups,
                            in the technical areas under the Council’s scope.
                        </p>
                    </div>
                </motion.div>

                
                <div>
                    <p className='soc-title'>Special Interests And Affinity Groups</p>
                </div>

                <motion.div className='soc-6' initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }} id='wie'>
                    <img src={image6} alt='wie' className='chapter-image' style={{ height: '300px', width: '300px' }}/>
                    <div className='soc-text'>
                        <p className='soc-title'>Women In Engineering</p>
                        <p className='soc-sub'>
                            Welcome to our Chapter of IEEE Women in Engineering ! <br /><br />
                            IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to
                            promoting women engineers and scientists,
                            and inspiring girls around the world to follow their academic interests to a career in engineering.<br /><br />
                            With a plethora of events and workshops organized to maximize the participation of girls,
                            our team at WIE, NITC SB strives to up-skill female engineers from all around our campus and beyond.
                        </p>
                    </div>
                </motion.div>

                <motion.div className='soc-7' initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }} id='sight'>
                    <img src={image7} alt='sight' className='chapter-image' style={{ height: '300px', width: '300px' }}/>
                    <div className='soc-text'>
                        <p className='soc-title'>Special Interest Group on Humanitarian Technology </p>
                        <p className='soc-sub'>
                            Welcome to our Chapter of IEEE SIGHT ! <br /><br />
                            We are a global community of IEEE members dedicated to applying technology for social and
                            environmental impact. Through projects and collaborations, SIGHT addresses local challenges,
                            fosters sustainable development, and improves the quality of life of under - served communities.
                        </p>
                    </div>
                </motion.div>

            </div>

            <Link to="/">
                <button className="button-64">
                    <span className="button-64-span" >Back to Home</span>
                </button>
            </Link>
       </div>
    )
}

export default ChaptersPage