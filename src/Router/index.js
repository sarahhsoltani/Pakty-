import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsCollectionsComponent from '../_components/collectionsPakty';
import Login from '../_components/collectionsPakty/connexionsPakty/SignIn';
import Signup from '../_components/collectionsPakty/connexionsPakty/signUp';
import ResetPassword from '../_components/collectionsPakty/connexionsPakty/resetPassword';
import ProcessMain from '../_components/_payement/ProcessMain';
import Speener from '../_components/_fragments/Speener/speener';
// const LandingPage = lazy(() => import('../_container/landing-page'));
const MainRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route exact path='/details' element={<DetailsCollectionsComponent />} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/signup' element={<Signup/>} />
                <Route exact path='/resetPassword' element={<ResetPassword/>} />
                <Route exact path='/ProcessPayement' element={<ProcessMain/>} />
                <Route exact path='/speener' element={<Speener/>} />
                
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoute;
