import React, { Component } from 'react';
import get from 'lodash.get';

export default class Pip extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const styleFromProps = get(this, 'props.styles', {});
        return (
            <div style={styleFromProps}>
                Pip
            </div>
        );
    }
}
