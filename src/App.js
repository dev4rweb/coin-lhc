import '../src/assets/styles/App.scss';
import Header from "./components/Header";
import CoinInfo from "./components/CoinInfo";
import FinSystemBlock from "./components/FinSystemBlock";
import FinFunctionBlock from "./components/FinFunctionBlock";

function App() {
    return (
        <>
            <section className="main">
                <Header/>
                <CoinInfo/>
                <FinSystemBlock/>
                <FinFunctionBlock/>
            </section>
            <section>

            </section>
        </>
    );
}

export default App;
