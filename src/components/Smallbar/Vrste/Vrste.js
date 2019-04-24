import React, { Component } from 'react';
import Ale from './Ale/Ale.js'
import Lager from './Lager/Lager.js'
import Stout from './Stout/Stout.js'
import Malt from './Malt/Malt.js'
import Smallbar from '../Smallbar';

export default class Vrste extends Component {
  render() {
    return (
      <div className='vrstestyle'>
       <Smallbar />
        <Ale />
        <Lager />
        <Stout />
        <Malt />
        

      </div>
    )
  }
}

