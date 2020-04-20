import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

const useStyles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});


class Orders extends Component{
  constructor(props){
    super(props);
    this.state = { rows: [] , resp: []};
  }

  createData(id, career) {
    return {id, career};
  }

  fillRows(){
    var temp = []
    if(this.state.rows.length === 0){
      this.state.resp.data.forEach(element => {
        console.log(element)
        temp.push(this.createData(element.id, element.career))
      });
    }
    this.setState({ rows: temp });
  }

  preventDefault(event){
    event.preventDefault();
  }

  componentDidMount(){
    fetch("http://localhost:9000/dbtest")
          .then(res => res.json())
          .then(res => this.setState({ resp: res }))
          .then(() => this.fillRows());
  }

  

  render(){
    const {classes} = this.props;
    return(
      <React.Fragment>
        <Title>Recent Orders</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Career</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.career}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div>
          <Link color="primary" href="#" onClick={this.preventDefault}>
            See more orders
          </Link>
        </div>
      </React.Fragment>
    )
  }
}
 
export default withStyles(useStyles)(Orders);