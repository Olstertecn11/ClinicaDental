import './style/Carousel.css';

const Carousel = () => {
	return (
		<div>
			<div className="img-container">
				<h2 className="text-center text-white title" id='title'>Clinica  <b style={{color:"#23A8F2"}}>Dental</b></h2>
				<h4 className="text-center text-white desc">Comprometidos con la seguridad de nuestros pacientes.</h4>
				<a  className="btn btn-light mt-4">
					Hacer Cita <i className='fas fa-stethoscope'></i>
				</a>

			</div>
        </div>
	);

}


export default Carousel;
