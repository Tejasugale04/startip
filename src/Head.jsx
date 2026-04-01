import React from 'react'
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faServer,faCode, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import logo from './Head/candles-removebg-preview.png'

export default function Head() {
  return (
 <div className='Head'>
        <nav className="navbar navbar-expand-sm" style={{backgroundColor:"transparent"}}>
        <div className="container-fluid">
            <ul className="navbar-nav">
            

            <li className="nav-item" style={{paddingLeft:"100px"}}>
                <img src={logo} alt="StarIP Logo" style={{width:"50px"}}></img>
                <span style={{color:"white",fontSize:"20px"}}>StarIP</span>
            </li>
            <li className="nav-item" style={{paddingLeft:"400px"}}>
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:"17px",color:"white"}}>Home</a>
                <div className='dropdown-menu' style={{height:"150px", width:"200px",backgroundColor:"white"}}>
                    
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>

                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"  style={{fontSize:"17px",color:"white",paddingLeft:"25px"}}>About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"  style={{fontSize:"17px",color:"white",paddingLeft:"25px"}}>Pages</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"  style={{fontSize:"17px",color:"white",paddingLeft:"25px"}}>Shop</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"  style={{fontSize:"17px",color:"white",paddingLeft:"25px"}}>Blog</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"  style={{fontSize:"17px",color:"white",paddingLeft:"25px"}}>Contact</a>
            </li>
            <li>
            <FontAwesomeIcon icon={faCartShopping} style={{color:"white",paddingTop:"15px",paddingLeft:"15px"}} />
            </li>
            <li style={{paddingLeft:"30px"}}>
            <button style={{height:"45px",width:"150px",backgroundColor:"#e24bd5",border:"none",color:"white"}}>Support</button>
            </li>
            </ul>
           
        </div>
        </nav>

        <div className='Head2'>
            <h1 style={{color:"white",fontSize:"50px",fontWeight:"700",lineHeight:"70px"}}>Leading Big Data <br/> Analytics Company</h1><br/>
            <span style={{color:"white",fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/> Quis ipsum suspendisse ultrices gravida.</span><br/><br/><br/><br/>
            <button style={{height:"50px",width:"150px",backgroundColor:"#6bf58d",border:"none",color:"white"}}><h6 style={{paddingTop:"5px"}}>Get Started</h6></button>

        </div>

        <div className='HeadFlex'>
            <div className='HeadFlexbox'>
                <div> <div style={{height:"50px",width:"50px",backgroundColor:"lightgreen",borderRadius:"50%",position:"absolute"}}><FontAwesomeIcon icon={faServer} style={{fontSize:"30px",color:"darkgreen",paddingTop:"8px",paddingLeft:"10px"}} /> </div>
                   <h5 style={{color:"white",position:"absolute",paddingLeft:"100px",paddingTop:"20px"}}>Analyze Your Data</h5>   
                   <span style={{color:"white",fontSize:"15px",position:"absolute",paddingLeft:"100px",paddingTop:"50px"}}>lorem ipsum dolor sit amet elit, <br/> adipiscing, sed do eiusmod <br/> tempor incididunt ut labore <br/> dolore magna aliqua.</span>
                </div>

                <div> <div style={{height:"50px",width:"50px",backgroundColor:"white",borderRadius:"50%",position:"absolute"}}><FontAwesomeIcon icon={faCode} style={{fontSize:"25px",color:"lightpink",paddingTop:"10px",paddingLeft:"9px"}} /> </div>
                   <h5 style={{color:"white",position:"absolute",paddingLeft:"100px",paddingTop:"20px"}}>Customized Plan</h5>   
                   <span style={{color:"white",fontSize:"15px",position:"absolute",paddingLeft:"100px",paddingTop:"50px"}}>lorem ipsum dolor sit amet elit, <br/> adipiscing, sed do eiusmod <br/> tempor incididunt ut labore <br/> dolore magna aliqua.</span>
                </div>

                <div> <div style={{height:"50px",width:"50px",backgroundColor:"violet",borderRadius:"50%",position:"absolute"}}><FontAwesomeIcon icon={faUserGroup} style={{fontSize:"23px",color:"purple",paddingTop:"10px",paddingLeft:"10px"}} /> </div>
                   <h5 style={{color:"white",position:"absolute",paddingLeft:"100px",paddingTop:"20px"}}>Implement Solution</h5>   
                   <span style={{color:"white",fontSize:"15px",position:"absolute",paddingLeft:"100px",paddingTop:"50px"}}>lorem ipsum dolor sit amet elit, <br/> adipiscing, sed do eiusmod <br/> tempor incididunt ut labore <br/> dolore magna aliqua.</span>
                </div>

             
            </div>
        </div>

</div>



  )
}