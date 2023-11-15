import React from 'react'
import MainBackground from './MainBackground'
import Part2FirstSection from './Part2FirstSection'
import Part3FirstSection from './Part3FirstSection'
// import Menu from './Menu'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../asisste/FirstSection.css'

export default function FirstSection() {
  const customRowStyle = {
    marginBottom: '170px',
    
  };
  const customRowStyle2 = {
    marginBottom: '50px',
   

  };
  const customRowStyle3 = {
   

  };

  return (
    <div className='container-fluid FirstSection'>
      
      <div className='MainBackground row' style={customRowStyle}>
        <div className='col-lg-12 col-xl-12'>
          <MainBackground/>
        </div>
      </div>    
  
      <div className='row' style={customRowStyle2}>
        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
          <Part2FirstSection />
        </div>
      </div>

      <div className='row' style={customRowStyle3}>
        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
          <Part3FirstSection/>
        </div>
      </div> 
    </div>
  )
}
