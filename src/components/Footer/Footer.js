import React from 'react'
import { Link } from 'react-router';
import './Footer.scss';

export default function Footer() {
  return (
    
        	<section id="footer">
		<div className="container">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Linkovi</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="http://www.its.edu.rs/" target="_blank"><i className="fa fa-angle-double-right"></i>ITS</a></li>
						<li><a href="https://www.w3schools.com" target="_blank"><i className="fa fa-angle-double-right"></i>W3</a></li>
						<li><a href="https://www.pivzdarija.com/" target="_blank"><i className="fa fa-angle-double-right"></i>Pivzdarija</a></li>
						<li><a href="https://www.wikipedia.org/" target="_blank"><i className="fa fa-angle-double-right"></i>Wikipedia</a></li>
						
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Alati</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="https://reactjs.org/" target="_blank"><i className="fa fa-angle-double-right"></i>React</a></li>
						<li><a href="https://sass-lang.com/" target="_blank"><i className="fa fa-angle-double-right"></i>Scss</a></li>
						<li><a href="https://www.react-spring.io/" target="_blank"><i className="fa fa-angle-double-right"></i>React-Spring</a></li>
						<li><a href="https://getbootstrap.com/" target="_blank"><i className="fa fa-angle-double-right"></i>Bootstrap</a></li>
						
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="/info"><i className="fa fa-angle-double-right"></i>Info</a></li>
						<li><a href="/piva"><i className="fa fa-angle-double-right"></i>Piva</a></li>						
						<li><a href="/predstavljamo" ><i className="fa fa-angle-double-right"></i>Predstavljamo</a></li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="soc">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="https://twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="https://www.instagram.com/"target="_blank"><i className="fa fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="https://www.google.com" target="_blank"><i className="fa fa-google-plus"></i></a></li>
						<li className="list-inline-item"><a href="/" target="_blank"><i className="fa fa-envelope"></i></a></li>
					</ul>                    
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center ">                    				
					    <p className="h6"> All rights Reversed.<br/><a className="text-green ml-2" href="https://github.com/andrijaDomazet/Pivotopija" target="_blank">InformationTechnologySchool<br/>Andrija/Bojan/Darko<br/>JavaScriptGrupa1-GitHub</a></p>
				    </div>
				</div>
				
			</div>	
				
		</div>
	</section>
	
    
  )
}
