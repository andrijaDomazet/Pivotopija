import React, { Component } from 'react'
//import { ReactDOM } from 'react-dom';
import KomentForma from './KomentForma/KomentForma.js';
import './Komentari.scss';


export default class Komentari extends Component {
  render() {
    return (
      
      <div className='komentaristyle'>
        <KomentForma />
      </div>
    )
  }
}

