import React, { Component } from 'react';
import Routes from '../../pages/index';
import get from 'lodash.get';

export default class Pip extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const styleFromProps = get(this, 'props.styles', {});
        return (
            <p style={styleFromProps}>
                Pip
            </p>
        )
    }
}
