import './style/Carousel.css';
import {Link} from 'react-router-dom';

const Carousel = () => {
	return (
		<div>
			<div className="img-container">
				<h2 className="text-center text-white title" id='title'>Clinica  <b style={{color:"#23A8F2"}}>Dental</b></h2>
				<h4 className="text-center text-white desc">Comprometidos con la seguridad de nuestros pacientes.</h4>
				<Link to="/Form" className="btn btn-light mt-4">
					Hacer Cita <i className='fas fa-stethoscope'></i>
				</Link>
			</div>
        </div>
	);
}

export default Carousel;
