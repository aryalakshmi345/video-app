import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer d-flex flex-column  justify-content-center' style={{width: '100%', height:'300px', lineHeight: '35px'}}>
       <div className='d-flex justify-content-evenly flex-wrap'>
         <div className="footer-head" style={{width: '400px'}}>
         <Link 
            to={"/"}
            className='fs-5'
            style={{textDecoration:"none", color:'white'}}>
                <i className="fa-solid fa-cloud-arrow-up"></i>
                Media Player
            </Link>
         <h6 className='mt-2'>Designed and built with all the love in the world by the Media Player team with the help of our contributors.</h6>
         <h6>Code licensed Media Player team, docs CC BY 3.0.</h6>
         <p>Currently v1.0.0.</p>
         </div>
         <div className="link d-flex flex-column">
          <h4>Links</h4>
          <Link to={"/"}  style={{textDecoration:"none", color:'white'}}>Landing page</Link>
          <Link to={"/home"}  style={{textDecoration:"none", color:'white'}}>Home </Link>
          <Link to={"/watch-history"}  style={{textDecoration:"none", color:'white'}}>Watch History</Link>
         </div>
         <div className="guide d-flex flex-column">
         <h4>Guides</h4>
          <Link to={"https://react-bootstrap.netlify.app/"}  style={{textDecoration:"none", color:'white'}}>React</Link>
          <Link to={"https://react-bootstrap.netlify.app/"}  style={{textDecoration:"none", color:'white'}}>React Bootstrap </Link>
          <Link to={"https://react-bootstrap.netlify.app/"}  style={{textDecoration:"none", color:'white'}}>Router</Link>
         </div>
         <div className="contact">
          <h4>Contact Us</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter Email ID' />
            <button className='btn btn-primary'>Subscribe</button>
          </div>
          <div className=' mt-3 d-flex justify-content-evenly' style={{width: '200px'}}>
          <Link to={""}  style={{textDecoration:"none", color:'white', fontSize:'20px'}}><i class="fa-brands fa-facebook-f"></i></Link>
          <Link to={""}  style={{textDecoration:"none", color:'white', fontSize:'20px'}}><i class="fa-brands fa-instagram"></i></Link>
          <Link to={""}  style={{textDecoration:"none", color:'white', fontSize:'20px'}}><i class="fa-brands fa-twitter"></i></Link>
          <Link to={""}  style={{textDecoration:"none", color:'white', fontSize:'20px'}}><i class="fa-brands fa-linkedin"></i></Link>

          </div>
         </div>
       </div>
       <div className='d-flex justify-content-center align-items-center'>
        <p>Copyright © 2023 Media Player. Built with React.</p>
        </div>
    </div>
  )
}

export default Footer