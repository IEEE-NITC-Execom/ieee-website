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
                            <li><a href="https://www.ieee.org/" target="_blank" rel="noreferrer">IEEE.ORG</a> </li>
                            <li><a href="https://ieeextreme.org/" target="_blank" rel="noreferrer">IEEE XTREME</a></li>
                            <li><a href="https://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank" rel="noreferrer">IEEE Xplore</a></li>
                            <li><a href="https://www.ieee.org/about/index.html" target="_blank" rel="noreferrer">IEEE</a></li>

                        </ul>

                    </div>
                    <div className="col-1">
                        <ul className="footer-links">
                            <li><h2>MEMBERSHIPS</h2></li>
                            <li><a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noreferrer">Join IEEE</a> </li>
                            <li><a href="https://www.ieee.org/membership-catalog/index.html?srchProdType=Societies&searchType=prodType" target="_blank" rel="noreferrer">Join a Society</a></li>
                            <li><a href="https://www.ieee.org/membership/renew.html?utm_source=button_text&utm_medium=lp-membership&utm_campaign=renew" target="_blank" rel="noreferrer">Renew Membership</a></li>
                            <li><a href="https://www.ieee.org/membership/benefits/index.html" target="_blank" rel="noreferrer">Info</a></li>

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

                <div className="bottom-content">
                    <div className="container-2">
                        <hr style={{
                            backgroundColor: "rgb(158, 150, 150)",
                            border: "rgb(158, 150, 150)",
                            width:"80%",
                            height: "0.2px"
                        }} />


                        <div className="bottom">
                            {`©️Copyright ${year} IEEE SB NITC.All rights reserved`}
                        </div>
                    </div>
                </div>
            </div>
           
           </>
    )
}

