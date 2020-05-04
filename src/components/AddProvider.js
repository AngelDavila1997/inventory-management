import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});


function handleSubmit(event){
    event.preventDefault();
    const json = {};
    const data = new FormData(event.target);
    Array.from(data.entries()).forEach(([key, value]) => {
        json[key] = value;
    })
    fetch('http://localhost:9000/proveedores/insert', {  
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(json),
    });
  }


  export default function Formulario() {
    return (
        <div className="row example-wrapper">
        <br /><br />
        <br /><br />

            <div className="col-xs-15 col-sm-6 offset-sm-3 example-col">
                <div className="card">
                    <div className="card-block">
                        <form onSubmit={handleSubmit} className="k-form">
                            <fieldset>
                                <legend>Información del Proveedor</legend>

                                <label className="k-form-field">
                                    <span>Nombre  &nbsp;&nbsp;&nbsp;</span>
                                    <input className="k-textbox" name="nombre" />
                                </label>
                                <br /><br />

                                <label className="k-form-field">
                                    <span>Email  &nbsp;&nbsp;&nbsp;</span>
                                    <input className="k-textbox" name="correo" />
                                </label>
                                <br /><br />

                                <label className="k-form-field">
                                    <span>Teléfono &nbsp;&nbsp;&nbsp;</span>
                                    <input type="number" className="k-number" name="telefono" />
                                </label>
                                <br /><br />
                            </fieldset>

                            <br /><br />
                            <div className="text-right">
                            <center><button className="k-button k-primary">Enviar</button></center>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}