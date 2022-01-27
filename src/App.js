import '../src/assets/styles/App.scss';
import Header from "./components/Header";
import CoinInfo from "./components/CoinInfo";
import FinSystemBlock from "./components/FinSystemBlock";
import FinFunctionBlock from "./components/FinFunctionBlock";
import FeaturesBlock from "./components/FeaturesBlock";
import MultiCarousel from "./components/MultiCarousel";
import PointsBlock from "./components/PointsBlock";
import AdvancedBlock from "./components/AdvancedBlock";

function App() {
    return (
        <>
            <section className="main">
                <Header/>
                <CoinInfo/>
                <FinSystemBlock/>
                <FinFunctionBlock/>
            </section>
            <section className="features">
                <FeaturesBlock />
                <MultiCarousel />
            </section>
            <section className="points">
                <PointsBlock />
            </section>
            <section>
                <AdvancedBlock/>
            </section>
        </>
    );
}

export default App;
