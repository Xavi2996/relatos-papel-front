import {React} from 'react';
import './Working.scss';

const Working = () => {
    return (
        <div className="working">
            <div className="working__img-container">
                <img src="/assets/images/working.png" alt="working" className="working__img"/>
            </div>
            <div>
                <h1>¡Estamos trabajando en esta sección!</h1>
            </div>
        </div>
    )
}

export default Working;