import React, { Component } from 'react';
import Faza1 from '../Postupak/Faza1/Faza1';
import Faza2 from '../Postupak/Faza2/Faza2';
import Faza3 from '../Postupak/Faza3/Faza3';
import Smallbar from '../Smallbar';

export default class Vrste extends Component {
  render() {
    return (
      <div className='vrstestyle'>
      <Smallbar />
        <Faza1 />
        <Faza2 />
        <Faza3 />
      </div>
    )
  }
}