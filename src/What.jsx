import React from 'react'
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer,faArrowRight,faMagnifyingGlassChart, faMicrochip } from '@fortawesome/free-solid-svg-icons'

export default function What() {
  return (
    <div className='What'>
      <h2 style={{paddingLeft:"600px",paddingTop:"60px"}}>What We Do</h2>
      <p style={{textAlign:"center",paddingTop:"40px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br> tempor incididunt ut labore et dolore magna aliqua.</p><br/>

       <div className='What1'>
          <div className='What11'>
                  <div className='What111' style={{height:"60px",width:"65px",position:"absolute"}}> <FontAwesomeIcon icon={faComputer} style={{fontSize:"40px",color:"white"}} /> </div>
                  <h5 style={{position:"absolute", paddingLeft:"220px",paddingTop:"20px"}}>Research</h5>
                  <p style={{position:"absolute", paddingLeft:"220px",paddingTop:"50px",textAlign:"justify",fontSize:"14px"}}>Lorem ipsum dolor sit consectetur,<br/> consectetur adipiscing elit,<br/> sed do eiusmod  incididunt.</p>
                  <h6 style={{position:"absolute", paddingLeft:"220px",paddingTop:"130px",textAlign:"justify",textDecoration:"underline"}}>Market Research<br/><br/> Investement Research</h6>
                  <FontAwesomeIcon icon={faArrowRight} style={{position:"absolute", paddingLeft:"220px",paddingTop:"220px",fontSize:"20px"}}></FontAwesomeIcon>
                  <h6 style={{position:"absolute", paddingLeft:"250px",paddingTop:"220px",textAlign:"justify"}}>Read More</h6>
           </div>
          <div className='What12'>
          <div className='What121' style={{height:"60px",width:"65px",position:"absolute"}}> <FontAwesomeIcon icon={faMagnifyingGlassChart}  style={{fontSize:"40px",color:"white"}} /> </div>
                  <h5 style={{position:"absolute", paddingLeft:"80px",paddingTop:"20px"}}>Analytics</h5>
                  <p style={{position:"absolute", paddingLeft:"80px",paddingTop:"50px",textAlign:"justify",fontSize:"14px"}}>Lorem ipsum dolor sit consectetur,<br/> consectetur adipiscing elit,<br/> sed do eiusmod  incididunt.</p>
                  <h6 style={{position:"absolute", paddingLeft:"80px",paddingTop:"130px",textAlign:"justify",textDecoration:"underline"}}>Data Analytics<br/><br/>Business Intelligence</h6>
                  <FontAwesomeIcon icon={faArrowRight} style={{position:"absolute", paddingLeft:"80px",paddingTop:"220px",fontSize:"20px"}}></FontAwesomeIcon>
                  <h6 style={{position:"absolute", paddingLeft:"110px",paddingTop:"220px",textAlign:"justify"}}>Read More</h6>
          </div>
          
          <div className='What13'>
          <div className='What131' style={{height:"60px",width:"65px",position:"absolute"}}> <FontAwesomeIcon icon={faMicrochip} style={{fontSize:"40px",color:"white"}} /> </div>
                  <h5 style={{position:"absolute", paddingLeft:"80px",paddingTop:"20px"}}>Technology</h5>
                  <p style={{position:"absolute", paddingLeft:"80px",paddingTop:"50px",textAlign:"justify",fontSize:"14px"}}>Lorem ipsum dolor sit consectetur,<br/> consectetur adipiscing elit,<br/> sed do eiusmod  incididunt.</p>
                  <h6 style={{position:"absolute", paddingLeft:"80px",paddingTop:"130px",textAlign:"justify",textDecoration:"underline"}}>Intelligence Automation<br/><br/>Quality Engineering</h6>
                  <FontAwesomeIcon icon={faArrowRight} style={{position:"absolute", paddingLeft:"80px",paddingTop:"220px",fontSize:"20px"}}></FontAwesomeIcon>
                  <h6 style={{position:"absolute", paddingLeft:"110px",paddingTop:"220px",textAlign:"justify"}}>Read More</h6>
          </div>
       </div>
    </div>
  )
}
