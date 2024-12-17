import React from 'react';
import './HomePage.scss';
import CarouselBanner from '../../components/CarouselBanner/CarouselBanner';

const HomePage = () => {
    return (
        <div>
            <CarouselBanner />
            <div className="novedades-container mt-4">
                <div className='container novedades-container__display'>
                    <div>
                        <h3 className='novedades-title'> Novedades</h3>
                        <div className="h-line BackcolorPrimary"></div>
                    </div>
                    <div>
                        <p>Ver todos</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;