import Header from "../components/Header";

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
export default HeaderOnly