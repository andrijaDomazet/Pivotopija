import React, { Component } from 'react';
import '../Komentform/Komentform.scss';

export default class Komentform extends Component {
  state={
    ime:'',
    komentar:'',
  }

    onSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state)
      console.log('Komentform kaze:',this.state);
      this.setState({ //ovo sklanja unete vrednosti iz polja, nakon submit-a
        ime:'',
        komentar:'',
      })

    }
   
  render() {
    return (
      <div className='komentstyle'>      
      <h4>Komentari</h4>
      <p>Vaša ocena:</p>
      <form className='formastyle'>
      
          <input  className='imestyle'
          placeholder='Vaše ime' 
          value={this.state.ime} 
          onChange={e => this.setState({ime :e.target.value})}             
          /> 
          <br />
          <br />
          <input className='unosstyle'
          placeholder='Unesite komentar' 
          value={this.state.komentar} 
          onChange={e => this.setState({komentar :e.target.value})}             
          /> 
          <br />
          <br />
      <button onClick={(e)=> this.onSubmit(e)}>Pošalji komentar</button>
      </form>
      </div>
    )
  }
}




