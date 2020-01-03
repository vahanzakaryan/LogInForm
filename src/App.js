import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import "./App.css";

const styles =  () => ({
  form:{
    textAlign: "center"
  },
  margins:{
    marginTop:"5%",
    paddingLeft:"120px",
    paddingRight:"120px",
  },
  lastMargin:{
    marginTop:"5%",
    paddingBottom: "20px"
  },
  button:{
    width: "45%",
    height: "39px"
  },
  marginBut:{
    marginTop: "6%"
  }
});

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:"",
      helperText:""
    }
  }
  usernameUpdater = event => {
    this.setState({
      username: event.target.value
    })
  }
  passUpdater = event => {
    this.setState({
      password: event.target.value
    })
  }
  butClick = () => {
    if(this.state.password.length < 8){
      this.setState({
        helperText: "At least 8 characters needed!"
      })
      }else{
        this.setState({
          helperText: ""
        })
    }
  }
  render(){
    const {classes} = this.props;
    const {helperText} = this.state;
    
    return (
      <Dialog
        className = {classes.form}
        open = {true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Login"}</DialogTitle>
        <div className = {classes.margins}>
          <TextField 
            value = {this.state.username}
            id="outlined-search" 
            label="Username" type="search" 
            variant="outlined" 
            onChange = {this.usernameUpdater}
            />
        </div>
      
        <div className = {classes.margins}>
          {/* <TextField 
            value = {this.state.password}
            id="filled-password-input" 
            label="Password" 
            type="password"
            variant="outlined" 
            onChange = {this.passUpdater}
            helperText = {helperText}
            /> */}
          <FormControl className={classes.formControl} error={!!helperText}>
          <TextField 
            value = {this.state.password}
            id="filled-password-input" 
            label="Password" 
            type="password"
            variant="outlined" 
            onChange = {this.passUpdater}
            aria-describedby="component-error-text"
            error={!!helperText}
            />
          

          <FormHelperText id="component-error-text">{helperText}</FormHelperText>
        </FormControl>
        </div>
        <div className = {classes.marginBut}>
          <Button 
            disabled = {this.state.username && this.state.password ? false : true}
            className = {classes.button}
            variant="contained" 
            onClick = {this.butClick}
            color="primary">
            Sign in
          </Button>
        </div>
        <div className = {
          classes.lastMargin
        }>
          <a href = "https://material-ui.com/ru/components/buttons/">
            Don't have an account? Register
          </a>
        </div>
      </Dialog>
    );
  }
}

App.propTypes = {
  classes: PropTypes.shape({
    form: PropTypes.string
  })

};
export default withStyles(styles)(App);