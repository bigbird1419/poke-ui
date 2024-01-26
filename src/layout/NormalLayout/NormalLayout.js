import Footer from "../components/Footer/footer";
import Header from "../components/Header";

function NormalLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default NormalLayout