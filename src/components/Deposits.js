import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});



export default function Deposits() {
  const [loadedValue, setLoadedValue] = React.useState(false);
  const [Value, setValue] = React.useState({});
  const getValue = () => {
    new Promise((resolve, reject) => {
      let url = 'http://localhost:9000/valor/load'
      fetch(url)
        .then(response => response.json())
        .then(result => {
          resolve(setValue(result.data))
        })
        .then(() => setLoadedValue(true))
    })
  }


  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Valor Actual del Inventario</Title>
      <Typography component="p" variant="h4">
        $
        {!loadedValue && getValue()}
        {loadedValue && Value}
      </Typography>
    </React.Fragment>
  );
}