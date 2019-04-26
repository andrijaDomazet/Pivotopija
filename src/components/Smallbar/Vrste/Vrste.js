import React, { Component } from 'react';
import Ale from './Ale/Ale.js';
import Lager from './Lager/Lager.js';
import Stout from './Stout/Stout.js';
import Malt from './Malt/Malt.js';
import Smallbar from '../Smallbar';

export default class Postupak extends Component {
  render() {
    return (
      <div>
        <Smallbar />
      <div className='postupakstyle'>
      
        <Ale />
        <Lager />
        <Stout />
        <Malt />
      </div>
      </div>
    )
  }
}