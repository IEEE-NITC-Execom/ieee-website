import React, { useState, useEffect } from 'react';
import '../eventcomponent.css'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import image1 from "../assets/posters/stempy.jpg"
import image2 from "../assets/posters/research_present.jpg"
import image3 from "../assets/posters/AI_qiuz.jpg"
import image4 from "../assets/posters/Whats_the_q.jpg"
import image5 from "../assets/posters/Carnival.jpg"
import image6 from "../assets/posters/Blind_coding.jpg"
import image7 from "../assets/posters/Dart_Game.jpg"
import image8 from "../assets/posters/Memory_tiles.jpg"
import image9 from "../assets/posters/Minute_to_win.jpg"
import image10 from "../assets/posters/Logic_Gate.jpg"
import image11 from "../assets/posters/Sudoku.jpg"
import image12 from "../assets/posters/Solar_off_grid.jpg"
import image13 from "../assets/posters/Speak_it_up.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageGallery = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  

  const images = [
    {
      src: image1,
      alt: 'Image ',
      heading:'Stem.py',
      description:'IEEE SIGHT Kerala Section in collaboration with IEEE Education Society Kerala Chapter and IEEE SB NIT, Calicut is delighted to announce the opulent fruition of STEM.py,  16 hour python power up for high school and higher secondary students  After 6 online sessions and 1 full day offline session, STEM.py has brought a whole new meaning to STEM education by building enthusiasm, wisdom and determination amongst participants.'
    },
    {
      src: image2,
      alt: 'Image ',
      heading:'How to Write and Present your Research',
      date:'18th June 2023',
      description: 'The "How to Write and Present Your Research" session organized by IEEE SB NITC and conducted by Neha Agrawal, founder of Wiseup Communications, was a highly informative and engaging event. Neha Agrawal shared valuable insights and practical tips on research writing and presentation skills, emphasizing the importance of clear communication and effective delivery. The interactive activities and networking opportunities provided a supportive learning environment and encouraged knowledge sharing among participants. Overall, the session was a resounding success, leaving attendees inspired and motivated to enhance their research communication abilities.'
    },
    {
      src: image3,
      alt: 'Image ',
      heading:'AI and Emerging Tech Quiz',
      date:'19th May 2023',
      description: "IEEE SB NITC, IEEE SB KMCTE, and IEEE SB KMCTCEW organized a thrilling online quiz event called 'What's the Q? as part of the IEEE Malabar Hub Revamp Compete Cluster 2. Scheduled for 19th May 2023 at 7 PM, the event promises an evening filled with brain-teasing questions and exciting challenges. Participants have the chance to win prizes worth 1K and showcase their knowledge in various domains, including science, technology, history, and pop culture. The online format allows participants to join from the comfort of their homes, ensuring a fun-filled experience for all quiz enthusiasts."
    },
    {
      src: image4,
      alt: 'Image ',
      heading:"What's the Q ? - General Quiz",
      date: '19th May 2023',
      description: "Participants were treated to an evening filled with brain-teasing questions and exciting challenges. The quiz tested their proficiency across various domains, including science, technology, history, and pop culture. Attendees had the opportunity to showcase their knowledge, compete against the best for prizes worth 1K. The event catered to both tech geeks and trivia whizzes, providing something for everyone's interest."
    },
    {
      src: image5,
      alt: 'Image ',
      heading:'Carnival',
      date:'7th March 2023',
      description: 'An enthralling Carnival event on 7th March, featuring a wide range of games, including Darts, Sudoku, Memory tiles, Blind coding, FIFA, and Mortal Kombat. Participants were captivated by the challenging activities and had the chance to win exciting prizes. The Carnival provided a fun-filled evening of amusement and entertainment for all attendees.'
    },
    {
      src: image6,
      alt: 'Image ',
      heading:'Blind Coding',
      date:'7th March 2023',
      description: 'An event conducted during Carnival'
    },
    {
      src: image7,
      alt: 'Image ',
      heading:'Dart Game',
      date:'7th March 2023',
      description: 'An event conducted during Carnival'
    },
    {
      src: image8,
      alt: 'Image ',
      heading:'Memory Tiles',
      date:'7th March 2023',
      description:  'An event conducted during Carnival '
    },
    {
      src: image9,
      alt: 'Image ',
      heading: 'Minute to Win it',
      date: '7th March 2023',
      description:  'An event conducted during Carnival'
    },
    {
      src: image10,
      alt: 'Image ',
      heading: 'Logic Gate',
      date: '7th March 2023',
      description:  'An event conducted during Carnival'
    },
    {
      src: image11,
      alt: 'Image ',
      heading: 'Sudoku',
      date: '7th March 2023',
      description:  'An event conducted during Carnival'
    },
    {
      src: image12,
      alt: 'Image ',
      heading: 'Solar Off Grid System',
      date: '5th March 2023',
      description:' The brightest summer hits us with the most innovative ideas on how to efficiently work with sun as IEEE brings forward another wonderous opportunity to learn and grow. Explore and discover the solar off grid system as in the Anakkampoyil Solar Digital Hub Project, a HAC-Sight initiative along with Abhinav R, Junior Research Fellow, Indian Institute of Technology Palakkad, who is also a certified Home Energy Auditor under Energy Management Center, Kerala.'
    },
    {
      src: image13,
      alt: 'Image ',
      heading: 'Speak It Up - Debate',
      date: '15th February 2023',
      description: "As part of International Day of Women and Girls in Science, WIE AG IEEE SB NITC presents to you, the debate contest 'Speak It Out'. Buckle up and join us in a war of words on 'The Necessity of Reservation in Educational Institutions'."
    }
  ];

  const handleImageHover = (index) => {
    setActiveImage(index);
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="EventsPage">
      <div className='top-chapter'>
        <p className='page-text'>Events</p>
      </div>
      <div className="image-events">
        {images.map((image, index) => (
          <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            key={index}
            className="image-container"
            onMouseEnter={() => handleImageHover(index)}
            onMouseLeave={() => handleImageHover(null)}
          >
            <img src={image.src} alt={image.alt} className="eventimage" />
            {activeImage === index && (
              <div className="dialog-box">
                <LazyLoadImage src={image.src} alt={image.alt} className="enlarged-image" effect='blur' placeholderSrc={image.src} />
                <h4 className="heading2">{image.heading}</h4>
                <h4 className="date">{image.date}</h4>
                <p className="description">{image.description}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <Link to="/">
                <button className="button-64">
                    <span className="button-64-span" >Back to Home</span>
                </button>
            </Link>
    </div>
  );
};

export default ImageGallery;

