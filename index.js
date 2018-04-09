import React, { Component } from 'react';
import Routes from '../../pages/index';

export default class Pip extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const styleFromProps = this.props.styles;
        <p style={styleFromProps}>
            🐻Pip🐻
        </p>
    }
}
