import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
               <React.Fragment>
                <AppBar title='Enter User Details' />
                <TextField 
                    hintText='Enter your First Name'
                    floatingLabelText='First Name'
                    defaultValue={values.firstName}
                    onChange={handleChange('firstName')}
                />
                <br />
                <TextField 
                    hintText='Enter your Last Name'
                    floatingLabelText='Last Name'
                    defaultValue={values.lastName}
                    onChange={handleChange('lastName')}
                />
                <br />
                <TextField 
                    hintText='Enter your Email'
                    floatingLabelText='Email'
                    defaultValue={values.email}
                    onChange={handleChange('email')}
                />
                <br />
                <RaisedButton 
                    label='Continue'
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                />
               </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;
