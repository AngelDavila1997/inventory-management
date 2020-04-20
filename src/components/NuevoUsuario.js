import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Deposits from './Deposits';
import Orders from './Orders';
import Chart from './Chart';

const useStyles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});


  class Formulario extends React.Component {
  render(){
        return (
            <div className="row example-wrapper">
            <br /><br />
            <br /><br />

                <div className="col-xs-15 col-sm-6 offset-sm-3 example-col">
                    <div className="card">
                        <div className="card-block">
                            <form className="k-form">
                                <fieldset>
                                    <legend>Información del Usuario</legend>

                                    <label className="k-form-field">
                                        <span>Nombre(s)  &nbsp;&nbsp;&nbsp;</span>
                                        <input className="k-textbox" />
                                    </label>
                                    <br /><br />

                                    <label className="k-form-field">
                                        <span>Apellidos &nbsp;&nbsp;&nbsp;</span>
                                        <input className="k-textbox"/>
                                    </label>

                                    <br /><br />
                                    <div className="k-form-field">
                                        <span>Género &nbsp;&nbsp;&nbsp;</span>

                                        <input type="radio" name="genero" id="mujer" className="k-radio" />
                                        <label className="k-radio-label" for="mujer">Mujer &nbsp;&nbsp;&nbsp;</label>

                                        <input type="radio" name="genero" id="hombre" className="k-radio" />
                                        <label className="k-radio-label" for="hombre">Hombre </label>
                                    </div>
                                </fieldset>

                                <br /><br />

                                <fieldset>
                                    <legend>Detalles del Usuario</legend>
                                    <label className="k-form-field">
                                        <span>Usuario &nbsp;&nbsp;&nbsp;</span>
                                        <input className="k-textbox" />
                                    </label>
                                    <label className="k-form-field">
                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Contraseña &nbsp;&nbsp;&nbsp;</span>
                                        <input type="password" className="k-textbox"/>
                                    </label>

                                    <br /><br />

                                    <div className="k-form-field">
                                        <input type="radio" name="tipo" id="admin" className="k-radio" />
                                        <label className="k-radio-label" for="admin">Administrador &nbsp;&nbsp;&nbsp;</label>

                                        <input type="radio" name="tipo" id="encargado" className="k-radio" />
                                        <label className="k-radio-label" for="encargado">Encargado de Almácen &nbsp;&nbsp;&nbsp;</label>

                                        <input type="radio" name="tipo" id="empleado" className="k-radio" />
                                        <label className="k-radio-label" for="empleado">Empleado de Almácen</label>
                                    </div>


                                </fieldset>

                                <br /><br />
                                <div className="text-right">
                                <center><button type="button" className="k-button k-primary">Enviar</button></center>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(Formulario);
