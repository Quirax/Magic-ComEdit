import React from 'react';

import * as Blockly from 'blockly';
import * as Kr from './msg/ko.js';
import './blocks/index.js';

import Toolbox from './toolbox.xml';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch(Toolbox)
        .then((resp) => resp.text())
        .then((text) => {
            document.getElementById('scratch_xml').innerHTML = text;
        })
        .then(() => {
            Blockly.inject("scratch", {
                toolbox: document.getElementById('toolbox'),
            });
            Blockly.setLocale(Kr);
        })
    }

    render() {
        return <div>
            <div id="scratch" style={{ height: '100vh' }}></div>
            <div id="scratch_xml"></div>
        </div>;
    }
}

export default App;
