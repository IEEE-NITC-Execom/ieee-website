import image1 from '../assets/scrollimages/1a.jpg';
import image2 from '../assets/scrollimages/2a.jpg';
import image3 from '../assets/scrollimages/3a.jpg';
import image4 from '../assets/scrollimages/4.jpg';
import image5 from '../assets/scrollimages/5.jpg';
import image6 from '../assets/scrollimages/6.jpg';
import image7 from '../assets/scrollimages/7.jpg';
import image8 from '../assets/scrollimages/8.jpg';
import image9 from '../assets/scrollimages/9.jpg';
import image10 from '../assets/scrollimages/10.jpg';
import image11 from '../assets/scrollimages/11.jpg';
import image12 from '../assets/scrollimages/12.jpg';
import image13 from '../assets/scrollimages/13.jpg';
import '../gallerycontent.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect,useContext } from 'react';
import { ActiveContext } from '../activecontext';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const GalleryImg = () => {
    
    const { setActiveItem } = useContext(ActiveContext);
    setActiveItem(3);

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13];

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    
    return (
        <div className="main-gallery">
            <div className='top-gallery'>
                <p className='page-text'>GALLERIA</p>
            </div>
            <div className='image-row'>
                {images.map((each,index) => {
                        return(
                        <motion.div className="each-item" initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }} key={index}>
                                
                                <LazyLoadImage src={each} alt="each of images" className="image-gallery" key={each} effect='blur' placeholderSrc={each}/>
                                
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