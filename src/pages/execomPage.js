import Navbar from "../navbar"
import Footer from "../Footer"
import Execom from "../execom"
import "../Execom_styles.css"

const ExecomPage = () => {
    return (
        <div className="Execom-page">
            <Navbar />
            <Execom/>
            <Footer />
        </div>
    )
}
export default ExecomPage