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
                                    <legend>Información del Artículo</legend>

                                    <label className="k-form-field">
                                        <span>Nombre  &nbsp;&nbsp;&nbsp;</span>
                                        <input className="k-textbox" />
                                    </label>
                                    <br /><br />

                                    <span>Descripción  &nbsp;&nbsp;&nbsp;</span>
                                    <textarea></textarea>

                                    <br /><br />

                                    <label className="k-form-field">
                                        <span>SKU &nbsp;&nbsp;&nbsp;</span>
                                        <input type="number" className="k-number" />
                                    </label>
                                    <br /><br />

                                    <label className="k-form-field">
                                        <span>Costo &nbsp;&nbsp;$</span>
                                        <input type="number" className="k-number" />
                                    </label>
                                    <br /><br />

                                    <label className="k-form-field">
                                        <span>Fecha &nbsp;&nbsp;&nbsp;</span>
                                        <input type="date" className="k-date" />
                                    </label>
                                    <br /><br />

                                    <div className="k-form-field">
                                        <input type="radio" name="unidad" id="pieza" className="k-radio" />
                                        <label className="k-radio-label" for="pieza">Pieza &nbsp;&nbsp;&nbsp;</label>

                                        <input type="radio" name="unidad" id="it" className="k-radio" />
                                        <label className="k-radio-label" for="it">It &nbsp;&nbsp;&nbsp;</label>
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