import React from 'react';
import './HomePage.scss';
import CarouselBanner from '../../components/CarouselBanner/CarouselBanner';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <CarouselBanner />
            <div className="novedades-container mt-4">
                <div className='container novedades-container__display'>
                    <div>
                        <h3 className='novedades-title'> Novedades</h3>
                        <div className="h-line BackcolorPrimary"></div>
                    </div>
                    <div onClick={() => navigate('/working')} className='container-ver-todos'>
                        <p>Ver todos</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;