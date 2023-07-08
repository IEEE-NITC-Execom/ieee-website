import image1 from './assets/posters/post1.jpg'
import image2 from './assets/posters/post2.jpg'
import image3 from './assets/posters/post3.jpg'
import image4 from './assets/posters/post4.jpg'
import image5 from './assets/posters/post5.jpg'
import image6 from './assets/posters/post6.jpg'
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import './events.css'
import { useState } from 'react'

const { Meta } = Card;

const EventsPart = () => {

    const [active, setActive] = useState(0);
    const [open, setOpen] = useState(false);

    const Handlered = (index) => {
        setActive(index);
        setOpen(!open)
    }

  

    return (
        <div>
            <div className="text-area">
                <h1 className="head-gallery">PAST EVENTS</h1>
            </div>
            <div className='main-cards'>
                <div className='card-section' 
                        onClick={() => Handlered(1)}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={image1}  className='img-card'/>}
                        className='each-card'
                    >
                        <Meta title="Stem.py by IEEE EdSoc" description="June 5"  className='card-desc'/>
                    </Card>

                    <div className={ active === 1 && open ? "show-text" : "hide-text"}>
                        <div className='poster-desc'>
                            IEEE SIGHT Kerala Section in collaboration with IEEE Education Society Kerala Chapter and IEEE SB NIT, Calicut is delighted to announce the opulent fruition of
                            ✨STEM.py✨ <br/><br/>
                            16 hour python power up for high school and higher secondary students ✨<br/><br/>

                            After 6 online sessions and 1 full day offline session, STEM.py has brought a whole new meaning to STEM education by building enthusiasm, wisdom and determination amongst participants

                            <br/><br/>Thank you all for everything! And we will be back with another bang,
                            <br/>Till then, Byeee👋🏾
                        </div>
                    </div>
                </div>

                <div className='card-section' 
                        onClick={() => Handlered(2)}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={image2} className='img-card'/>}
                        className='each-card'
                    >
                        <Meta title="How to Write and Present Your Research" description="June 18"  className='card-desc'/>
                    </Card>

                    <div className={active === 2 && open? "show-text" : "hide-text"}>
                        <div className='poster-desc'>
                            We are excited to invite you to a highly informative and engaging session
                            organised by IEEE SB NITC and taken by Neha Agrawal, the renowned founder of Wiseup
                            Communications.The session, titled "How to Write and Present Your Research," is designed
                            to cater to the needs of students, researchers, and professionals, aiming to enhance their
                            research writing and presentation skills.
                            <br /><br />
                            Date: 18th June<br />
                            Time: 6:00 PM to 7:00 PM
                            <br /><br />
                            During this session, Neha Agrawal will share valuable insights and practical
                            tips that will empower you to excel in research writing and presentation.
                        </div>
                    </div>
                </div>

                <div className='card-section' 
                        onClick={() => Handlered(3)}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={image3} className='img-card'/>}
                        className='each-card'
                    >
                        <Meta title="What's the Q?" description="May 19"  className='card-desc'/>
                    </Card>

                    <div className={active === 3 && open? "show-text" : "hide-text"}>
                        <div className='poster-desc'>
                            📢 Calling all quiz enthusiasts! 🧠🤔 <br /><br />Get ready for an exhilarating online
                            quiz experience with "What's the Q?" conducted by IEEE SB NITC , IEEE SB KMCTE and I
                            EEE SB KMCTCEW under IEEE Malabar Hub Revamp Compete Cluster 2! 🎉 <br /><br />

                            📅 Mark your calendars for 19th May 2023 at 7 PM and join us for an evening
                            filled with brain-teasing questions and exciting challenges! 🕖🔥

                        </div>
                    </div>
                </div>

                <div className='card-section' 
                        onClick={() => Handlered(4)}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={image4} className='img-card'/>}
                        className='each-card'
                    >
                        <Meta title="AI and Emerging Tech Quiz" description="May 19"  className='card-desc'/>
                    </Card>

                    <div className={active === 4 && open? "show-text" : "hide-text"}>
                        <div className='poster-desc'>
                            Participate in the "AI and Emerging Tech Quiz" conducted by IEEE SB NITC ,
                            IEEE SB KMCTE and IEEE SB KMCTCEW under IEEE Malabar Hub Revamp Compete Cluster 2! 🎉<br /><br />

                            🗓 Mark your calendars for 19th May 2023 at 7:30 PM, as we bring you
                            an exciting online quiz that will put your knowledge of Artificial Intelligence
                            and emerging technologies to the test! 🤖💡
                        </div>
                    </div>
                </div>

                <div className='card-section' 
                        onClick={() => Handlered(5)}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={image5} className='img-card'/>}
                        className='each-card'
                    >
                        <Meta title="IEEE Carnival" description="March 7"  className='card-desc'/>
                    </Card>

                    <div className={active === 5  && open? "show-text" : "hide-text"}>
                        <div className='poster-desc'>
                            A Carnival of exhilarating games ranging from Darts to Sudoku
                            to Memory tiles to Blind coding, that keep you in your toes reaching
                            out to victory. As well as the mind-blowing matches of FIFA and Mortal
                            Kombat awaits. Don't miss out on the opportunity to enjoy and win as the
                            Carnival lights lie in wait for your arrival at the Creative zone
                            on 7th March from 5.30pm onwards.
                        </div>
                    </div>
                </div>

                <div className='card-section' 
                        onClick={() => Handlered(6)}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={image6} className='img-card'/>}
                        className='each-card'
                    >
                        <Meta title="Solar OFFGRID Workshop" description="March 5"  className='card-desc'/>
                    </Card>

                    <div className={active === 6  && open? "show-text" : "hide-text"}>
                        <div className='poster-desc'>
                            Explore and discover the solar off grid system as in the
                            Anakkampoyil Solar Digital Hub Project, a HAC-Sight initiative along with Abhinav R,
                            Junior Research Fellow, Indian Institute of Technology Palakkad, who is also a certified
                            Home Energy Auditor under Energy Management Center, Kerala. <br /><br />
                            Embark on the journey to chance upon the way to working with solar
                            this Sunday from 9.30am to 4.30pm.

                        </div>
                    </div>
                </div>
            </div>
            


            <Link to="/events" className='link-nav'>
                <button className="button-events">
                    <p className="button-events-spl" >See More</p>
                </button>
            </Link>
        </div>
    )
}

export default EventsPart