import Navbar from "../navbar"
import Footer from "../Footer"
import Execom from "../Execom"

const execom = () => {
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

export default execom
