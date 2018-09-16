import React,  { Component } from 'react';

import FillerText from './FillerText';

export default class Webpage extends Component {
    render () {
        return (
            <div>
                <FillerText /><title>The world's coolest webpage</title>
                <FillerText />
            </div>
        )
    }
}
