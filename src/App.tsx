import React from 'react';
import Countdown from './Countdown';
import Navbar from './Navbar';
import Hero from './Hero';
import Manifesto from './Manifesto';
import AestheticGallery from './AestheticGallery';
import PrepGuide from './PrepGuide';
import LocationSection from './LocationSection';
import RSVPModal from './RSVPModal';
import TicketModal from './TicketModal';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Countdown />
            <Manifesto />
            <AestheticGallery />
            <PrepGuide />
            <LocationSection />
            <RSVPModal />
            <TicketModal />
            <Footer />
        </div>
    );
};

export default App;