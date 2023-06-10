import world from "./assets/global2.png"
import edu from "./assets/edcation.png"
import eng from "./assets/develop.png"
import "./why.css"

const Whywe = () => {
    return(
        <div className="page-lay">
            <p className="heading"> WHY IEEE?</p>
            <div className="cards">

                <div className="left">
                    <div className="module">
                    <img src={world} alt={"person"} className="image"/>
                    <p className="subhead">Global Standardization</p>
                    <p className="text">
                        Set global standards for various technological domains. It develops 
                    and publishes technical standards that ensure interoperability, compatibility, and safety across 
                    industries. IEEE's standards cover a wide range of areas, 
                    including wireless communication, power systems, software engineering, and more.
                    </p>
                    </div>
                </div>

                <div className="center">
                    <div className="module">
                    <img src={edu} alt={"person"} className="image"/>
                    <p className="subhead">Knowledge Sharing</p>
                    <p className="text">
                    A vast platform for knowledge sharing and networking among professionals, researchers, 
                    and students in the field of electrical engineering, electronics, and related disciplines. Through 
                    conferences, workshops, and publications, IEEE facilitates the exchange of ideas, research findings,
                     and best practices.
                    </p>
                    </div>
                </div>
                
                <div className="right">
                    <div className="module">
                    <img src={eng} alt={"person"} className="image"/>
                    <p className="subhead">Education and Professional Development</p>
                    <p className="text">
                    A range of educational resources and professional development opportunities to support the 
                    growth and expertise of its members. It provides access to technical journals, magazines, and online 
                    libraries, which are valuable sources of research papers, articles, and industry trends.
                    </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Whywe