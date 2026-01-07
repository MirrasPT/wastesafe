import Hero from '../components/Hero';
import Opportunities from '../components/Opportunities';
import Banner from '../components/Banner';
import CTA from '../components/CTA';
import Categories from '../components/Categories';
import Benefits from '../components/Benefits';
import BackgroundPath from '../components/BackgroundPath';

const Home = () => {
    return (
        <div className="animate-in fade-in duration-500 relative">
            <BackgroundPath />
            <Hero />
            <Opportunities />
            <Banner />
            <CTA />
            <Categories />
            <Benefits />
        </div>
    );
};

export default Home;
