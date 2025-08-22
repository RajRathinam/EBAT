import React from 'react';
import '../index.css';
import HomePoster from '../components/HomePoster';
import OurSpecifications from '../components/OurSpecifications';
import FeaturesTable from '../components/FeaturesTable';
import ServicesBanner from '../components/ServicesBanner';

const Home = () => {
   return (
        <section>
           <HomePoster/>
           <OurSpecifications/>
           <ServicesBanner/>
           <FeaturesTable/>
        </section>
    );
};
export default Home