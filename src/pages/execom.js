import Navbar from "../navbar"
import Footer from "../Footer"
import Execom from "../Execom"
import '../Execom_styles.css';

const Execom = () => {
    return (
      <>
       <Navbar />
        <div className="Execom-page">
            <Execom />
        </div>
      <Footer />
      </>
    )
}

export default Execom
