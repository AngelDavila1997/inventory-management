import React from 'react';
import { withStyles } from '@material-ui/core/styles';

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
                                    <legend>Información del Proveedor</legend>

                                    <label className="k-form-field">
                                        <span>Nombre  &nbsp;&nbsp;&nbsp;</span>
                                        <input className="k-textbox" />
                                    </label>
                                    <br /><br />

                                    <label className="k-form-field">
                                        <span>Email  &nbsp;&nbsp;&nbsp;</span>
                                        <input className="k-textbox" />
                                    </label>
                                    <br /><br />

                                    <label className="k-form-field">
                                        <span>Teléfono &nbsp;&nbsp;&nbsp;</span>
                                        <input type="number" className="k-number" />
                                    </label>
                                    <br /><br />
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