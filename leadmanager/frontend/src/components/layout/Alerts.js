import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';


export class Alerts extends Component {

    componentDidMount() {
        this.props.alert.show('It works');
    }

    render() {
        return (
            <AlertProvider template={AlertTemplate} {...options}>
            </AlertProvider>
        )
    }
}

export default withAlert()(Alerts);
