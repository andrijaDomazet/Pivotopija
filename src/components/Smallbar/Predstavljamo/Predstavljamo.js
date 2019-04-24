import React, { Component } from 'react';
import Probali from './Probali/Probali.js';
import Smallbar from '../Smallbar';

export default class Vrste extends Component {
  render() {
    return (
      <div className='probalistyle'>
      <Smallbar />
        <Probali />        
      </div>
    )
  }
}