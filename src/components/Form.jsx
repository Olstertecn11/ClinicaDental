import './style/Form.css';


export default function Form() {



    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <div className="card card-body mt-4">
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" placeholder="Ingrese su nombre"  id="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Telefono</label>
                                <input type="text" placeholder="Ingrese su nombre"  id="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input type="email" placeholder="Ingrese su nombre"  id="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Mensaje</label>
                                <textarea className="form-control" id="mensaje" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-block">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        </>
    )
}