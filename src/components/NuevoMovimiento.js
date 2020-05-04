import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});
function NuevoMovimiento(){
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
      class Formulario extends React.Component {
            <div className="row example-wrapper">
            <br /><br />
            <br /><br />

                <div className="col-xs-15 col-sm-6 offset-sm-3 example-col">
                    <div className="card">
                        <div className="card-block">
                            <form className="k-form">
                                <fieldset>
                                    <legend>Información del Movimiento</legend>

                                    <label className="k-form-field">
                                        <span>Tipo de Movimiento &nbsp;&nbsp;&nbsp;</span>

                                        <input type="radio" name="tipo" id="entrada" className="k-radio" />
                                        <label className="k-radio-label" for="entrada">Entrada&nbsp;&nbsp;&nbsp;</label>

                                        <input type="radio" name="tipo" id="salida" className="k-radio" />
                                        <label className="k-radio-label" for="salida">Salida </label>

                                    <span>Artículo  &nbsp;&nbsp;&nbsp;</span>
                                       <select>
                                      <option value="ejemplo">Ejemplo</option>
                                      <option value="ejemplo2">Ejemplo 2</option>
                                      </select>
                                    </label>
                                    <br /><br />

                                    <label className="k-form-field">
                                        <span>Cantidad &nbsp;&nbsp;&nbsp;</span>
                                        <input type="number" name="cantidad"/>
                                    </label>
                                    <br /><br />

                                    <label className="k-form-field">
                                        <span>Fecha &nbsp;&nbsp;&nbsp;</span>
                                        <input type="date" name="fecha" />
                                    </label>
                                </fieldset>

                                <br /><br />

                                <fieldset>
                                    <legend>Detalles del Movimiento</legend>
                                    <label className="k-form-field">
                                        <span>Persona encargada  &nbsp;&nbsp;&nbsp;</span>
                                        <input readOnly value="Administrador"/>
                                    </label>
                                    <br /><br />

                                    <span>Descripción  &nbsp;&nbsp;&nbsp;</span>
                                    <textarea name="descripcion"></textarea>

                                    <br /><br />
                                        <span>Número de Movimiento &nbsp;&nbsp;&nbsp;</span>
                                        <input type="number" name="numMov"/>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
}
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          CREAR Movimiento
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">ALERTA</DialogTitle>
          <DialogContent>
            <DialogContentText>
              ¿Estas seguro? Una vez aceptado el movimiento no podrán realizarse cambios en este. Verifique su información cuidadosamente.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default withStyles(useStyles)(NuevoMovimiento);