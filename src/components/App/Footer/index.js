import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import './Footer.scss';

//icons
import email from './../../../assets/icons/email.png';
import facebook from './../../../assets/icons/facebook.png';
import instagram from './../../../assets/icons/instagram.png';
import twitter from './../../../assets/icons/twitter.png';

const Footer = () =>{
  return (
    <div className="footer">
      <Image.Group fluid className="footerLogos">
        <Image inline centered src= {twitter}/>
        <Image inline centered src= {facebook}/>
        <Image inline centered src= {instagram}/>
        <Image inline centered src= {email}/>
      </Image.Group>
      <Container textAlign="center" fluid className="footerText" >Somos Home Market un proyecto interno creado para mostrar al maximo los conocimientos web.</Container>
    </div>
  );
}
export default Footer;