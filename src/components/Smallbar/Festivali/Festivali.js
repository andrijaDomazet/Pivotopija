import React, { Component } from 'react';
import Festivali19 from './Festivali19/Festivali19.js';
import Smallbar from '../Smallbar';
import './Festivali.scss';

export default class Festivali extends Component {
  render() {
    return (
      <div className='festibox'>
    <Smallbar />
    <div className='fstyle'>      
      <Festivali19/>

       </div>
    </div>);
  }
}

















