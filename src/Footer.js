import "./Footer_styles.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { HashLink } from "react-router-hash-link";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
           <>
           <hr className="ruler" />
            <div className="footer">
                <div className="container-1">
                    <div className="footer-main">
                        <h1 style={{ color: 'blue' }} className="Footer-name">IEEE SB NITC</h1>
                        <p className="thankstext">Thank you for visiting our website!
                            "Prepare to embark on a captivating journey through the corridors of innovation." 
                            We warmly appreciate your visit and support.</p>

                        <div className="social-media">
                            <a href="https://www.facebook.com/IeeeNitc/"  ><FacebookIcon fontSize="large" className="icons" /> </a>
                            <a href="https://www.instagram.com/ieee_nitc/?hl=en" > <InstagramIcon fontSize="large" className="icons" /> </a>
                            <a href="https://in.linkedin.com/company/ieee-sb-nitc" > <LinkedInIcon fontSize="large" className="icons" /> </a>
                        </div>

                    </div>
                    <div className="col-1">
                        <ul className="footer-links">
                            <li><h2>QUICK LINKS</h2></li>
                            <li><a href="https://www.facebook.com/IeeeNitc/">IEEE.ORG</a> </li>
                            <li><a href="https://www.facebook.com/IeeeNitc/">IEEE XTREME</a></li>
                            <li><a href="https://www.facebook.com/IeeeNitc/">IEEE Xplore</a></li>
                            <li><a href="https://www.facebook.com/IeeeNitc/">IEEE</a></li>

                        </ul>

                    </div>
                    <div className="col-1">
                        <ul className="footer-links">
                            <li><h2>MEMBERSHIPS</h2></li>
                            <li><a href="https://www.facebook.com/IeeeNitc/">Join IEEE</a> </li>
                            <li><a href="https://www.facebook.com/IeeeNitc/">Join a Society</a></li>
                            <li><a href="https://www.facebook.com/IeeeNitc/">Renew Membership</a></li>
                            <li><a href="https://www.facebook.com/IeeeNitc/">Info</a></li>

                        </ul>

                    </div>
                    <div className="col-1">
                        <ul className="footer-links">
                            <li><h2>SOCIETIES</h2></li>
                            <li><a href="https://www.facebook.com/IeeeNitc/"><HashLink to='/chapters#ias'>IAS</HashLink></a> </li>
                            <li><a href="https://www.facebook.com/IeeeNitc/"><HashLink to='/chapters#eds'>EDS</HashLink></a></li>
                            <li><a href="https://www.facebook.com/IeeeNitc/"><HashLink to='/chapters#cs'>CS</HashLink></a></li>
                            <li><a href="https://www.facebook.com/IeeeNitc/"><HashLink to='/chapters#cass'>CASS</HashLink></a></li>
                            <li><a href="https://www.facebook.com/IeeeNitc/"><HashLink to='/chapters#pes'>PES</HashLink></a></li>
                        </ul>

                    </div>
                    <div className="col-1">
                        <ul className="footer-links">
                            <li><h2>AFFINITY AND SPECIAL INTEREST GROUP</h2></li>
                            <li><a href="https://www.facebook.com/IeeeNitc/"><HashLink to='/chapters#wie'>WIE</HashLink></a> </li>
                            <li><a href="https://www.facebook.com/IeeeNitc/"><HashLink to='/chapters#sight'>SIGHT</HashLink></a></li>
                        </ul>

                    </div>
                </div>

                <div class="bottom-content">
                    <div className="container-2">
                        <hr style={{
                            backgroundColor: " #000000",
                            border: "#000000",
                            borderRadius: "7px 7px 7px 7px",
                            height: "0.2px"
                        }} />


                        <div class="bottom">
                            {`©️Copyright ${year} IEEE SB NITC.All rights reserved`}
                        </div>
                    </div>
                </div>
            </div>
           
           </>
    )
}

