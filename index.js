import React from 'react';
import Routes from '../../pages/index';
import './index.css';

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
