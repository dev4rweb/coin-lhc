import '../src/assets/styles/App.scss';
import Header from "./components/Header";
import CoinInfo from "./components/CoinInfo";

function App() {
    return (
        <>
            <section className="main">
                <Header/>
                <CoinInfo/>
            </section>
        </>
    );
}

export default App;
