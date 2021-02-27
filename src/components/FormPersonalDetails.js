import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
               <React.Fragment>
                <AppBar title='Enter Personal Details' />
                <TextField 
                    hintText='Enter your Occupation'
                    floatingLabelText='Occupation'
                    defaultValue={values.occupation}
                    onChange={handleChange('occupation')}
                />
                <br />
                <TextField 
                    hintText='Enter your City'
                    floatingLabelText='City'
                    defaultValue={values.city}
                    onChange={handleChange('city')}
                />
                <br />
                <TextField 
                    hintText='Enter your Bio'
                    floatingLabelText='Bio'
                    defaultValue={values.bio}
                    onChange={handleChange('bio')}
                />
                <br />
                <RaisedButton 
                    label='Continue'
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                />
                <RaisedButton 
                    label='Back'
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
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

export default FormPersonalDetails;
