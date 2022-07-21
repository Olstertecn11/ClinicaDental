import './style/Form.css';


export default function Form() {



    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card card-body mt-4 shadow p-3 mb-5 bg-white rounded">
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" placeholder="Ingrese su nombre" autoComplete='none' id="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Telefono</label>
                                <input type="text" placeholder="Ingrese su nombre" autoComplete='none' id="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input type="email" placeholder="Ingrese su nombre"  autoComplete='none'id="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Mensaje</label>
                                <textarea className="form-control" id="mensaje" autoComplete='none' cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-block">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ml-4 mt-4">
                        <div className="card-body schedule rounded">
                            <div className="form-group">
                                <h2 className="text-center">Horarios de Atencion</h2>
                                <p className='mt-4 text-center '> <h5>Lunes a Viernes </h5> 10:30 - 17:00</p>
                            </div>
                        </div>
                        <h3 className='sub-title text-center'><i className='fas fa-phone'></i>Telefono </h3>
                        <p className='text text-center'>71548963</p>

                        <h3 className='sub-title text-center'><i className='fas fa-map'></i>Direccion</h3>
                        <p className='text text-center'>11 Av. 17-25 Zona 2</p>
                        <p className='text text-center'>Momostenango, Totonicapan</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d246810.22081073243!2d-91.42640420996734!3d14.858351866022279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d14.661679!2d-90.5037902!4m5!1s0x858c1dfefc7c2795%3A0x99b73ce676a9d023!2s2HVR%2BW8X%20COLEGIO%20ADVENTISTA%20ALBA%2C%20Unnamed%20Road%2C%20Momostenango!3m2!1d15.0448544!2d-91.40912519999999!5e0!3m2!1ses!2sgt!4v1658376033792!5m2!1ses!2sgt" width="550" height="200" loading="lazy" referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}