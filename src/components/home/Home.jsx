import React from 'react';
import TopScreen from "./TopScreen/TopScreen";
import NewCollection from "./NewCollection/NewCollection";
import Values from "./Values/Values";
import DreamTeam from "./DreamTeam/DreamTeam";

const Home = () => {
    return (
        <>
            <TopScreen/>
            <NewCollection/>
            <Values/>
            <DreamTeam/>
        </>
    );
};

export default Home;