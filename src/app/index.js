import React from 'react';
import {render} from 'react-dom';
import App from '../App';

class Main extends React.Component {
    render(){
        return (
          <App/>
        );
    }
}
render( <Main/>, window.document.getElementById('app'));


