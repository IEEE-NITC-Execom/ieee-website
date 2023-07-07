import Navbar from "../navbar"
import Footer from "../Footer"
import Execom from "../Execom"
import '../Execom_styles.css';

const ExecomPage = () => {
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

export default ExecomPage
