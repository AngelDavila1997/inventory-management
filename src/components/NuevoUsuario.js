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
function NuevoUsuario(){
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
}
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          CREAR USUARIO
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
              ¿Estas seguro? Una vez aceptado el usuario no podrán realizarse cambios en este. Verifique su información cuidadosamente.
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

export default withStyles(useStyles)(NuevoUsuario);