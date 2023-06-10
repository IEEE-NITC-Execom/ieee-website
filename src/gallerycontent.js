import image1 from './assets/scrollimages/1a.jpg';
import image2 from './assets/scrollimages/2a.jpg';
import image3 from './assets/scrollimages/3a.jpg';
import image4 from './assets/scrollimages/4.jpg';
import image5 from './assets/scrollimages/5.jpg';
import image6 from './assets/scrollimages/6.jpg';
import image7 from './assets/scrollimages/1.jpg';
import image8 from './assets/scrollimages/2.jpg';
import image9 from './assets/scrollimages/3.jpg';
import './gallerycontent.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';


const GalleryImg = () => {

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    
    return (
        <div className="main-gallery">
            <div className='top-gallery'>
                <p className='page-text'>GALLERIA</p>
            </div>
            <div className='image-row'>
                {images.map((each) => {
                        return(
                        <motion.div className="each-item" initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}>
                                
                                <img src={each} alt="each of images" className="image-gallery" key={each} />
                                
                        </motion.div>
                        )
                    })}  
            </div>
            <Link to="/">
                <button className="button-64">
                    <span className="button-64-span" >Back to Home</span>
                </button>
            </Link>
       </div>
    )
}

export default GalleryImg