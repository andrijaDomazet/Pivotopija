import React, { Component } from 'react';
import Probali from './Probali/Probali.js';
import Smallbar from '../Smallbar';
import './Predstavljamo.scss';

export default class Vrste extends Component {
  render() {
    return (
      <div>
        <Smallbar />
      <div className='predstyle'>      
        <Probali />        
      </div></div>
    )
  }
}