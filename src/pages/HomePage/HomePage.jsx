import React from 'react';
import './HomePage.scss';
import CarouselBanner from '../../components/CarouselBanner/CarouselBanner';
import CarouselLibros from '../../components/CarouselLibros/CarouselLibros';
import {novedades, recomendados} from '../../mocks/books'
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
            <CarouselLibros data={novedades} />
            <div className="novedades-container mt-4">
                <div className='container novedades-container__display'>
                    <div>
                        <h3 className='novedades-title'> Recomendados</h3>
                        <div className="h-line BackcolorPrimary"></div>
                    </div>
                    <div onClick={() => navigate('/working')} className='container-ver-todos'>
                        <p>Ver todos</p>
                    </div>
                </div>
            </div>
            <CarouselLibros data={recomendados}/>
        </div>
    );
};

export default HomePage;