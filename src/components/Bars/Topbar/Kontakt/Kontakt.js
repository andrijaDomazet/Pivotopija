import React, { Component } from 'react';
import "./Kontakt.scss";

export default class Kontakt extends Component {
    render() {
        return (
            <div class="container">
                <form className="forma1">
                    <input type="text" id="fname" name="firstname" placeholder="Vaše ime.."></input>
                    <label for="fname">Ime</label>

                    <input type="text" id="lname" name="lastname" placeholder="Vaš Email.."></input>
                    <label for="lname">Email</label>


                    <select id="country" name="location">
                        <option value="australia">North America</option>
                        <option value="canada">Europe</option>
                        <option value="usa">Asia</option>
                    </select>
                    <label for="location">Lokacija</label>

                    <textarea rows="10" cols="50" id="tekstForma" placeholder="Write something.."></textarea>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}
