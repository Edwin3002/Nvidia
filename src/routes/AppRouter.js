import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/senior" element={<SeniorScreen />} />
                <Route exact path="/hobbit" element={<HobbitScreen />} />
                <Route exact path="/movie/:id" element={<MovieScreen />} />
                <Route exact path="/search" element={<SeacrhScreen />} />
            </Routes>
        </Router>
    )
}
