import React, { Component } from 'react';
import Faza1 from '../Postupak/Faza1/Faza1';
import Faza2 from '../Postupak/Faza2/Faza2';
import Faza3 from '../Postupak/Faza3/Faza3';
import Smallbar from '../Smallbar';
import './Postupak.scss';

export default class Postupak extends Component {
  render() {
    return (
    <div><Smallbar />
      <div className='poststyle'>
      
        <Faza1 />
        <Faza2 />
        <Faza3 />
      </div>
      </div>
    )
  }
}