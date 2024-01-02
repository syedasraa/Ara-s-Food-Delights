import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
{/* 
<div className="container my-5">

  <footer className="text-center text-white" style="background-color: #caced1;">
    <div className="container p-4">
      <section className="">
        <div className="row">
          <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
            <div
                 className="bg-image hover-overlay ripple shadow-1-strong rounded"
                 data-ripple-color="light"
                 >
              <img
                   src="https://mdbootstrap.com/img/new/fluid/city/113.jpg"
                   className="w-100"
                   />
              <Link to="#!">
                <div
                     className="mask"
                     style="background-color: rgba(251, 251, 251, 0.2);"
                     ></div>
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
            <div
                 className="bg-image hover-overlay ripple shadow-1-strong rounded"
                 data-ripple-color="light"
                 >
              <img
                   src="https://mdbootstrap.com/img/new/fluid/city/111.jpg"
                   className="w-100"
                   />
              <Link to="#!">
                <div
                     className="mask"
                     style="background-color: rgba(251, 251, 251, 0.2);"
                     ></div>
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
            <div
                 className="bg-image hover-overlay ripple shadow-1-strong rounded"
                 data-ripple-color="light"
                 >
              <img
                   src="https://mdbootstrap.com/img/new/fluid/city/112.jpg"
                   className="w-100"
                   />
              <Link to="#!">
                <div
                     className="mask"
                     style="background-color: rgba(251, 251, 251, 0.2);"
                     ></div>
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
            <div
                 className="bg-image hover-overlay ripple shadow-1-strong rounded"
                 data-ripple-color="light"
                 >
              <img
                   src="https://mdbootstrap.com/img/new/fluid/city/114.jpg"
                   className="w-100"
                   />
              <Link to="#!">
                <div
                     className="mask"
                     style="background-color: rgba(251, 251, 251, 0.2);"
                     ></div>
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
            <div
                 className="bg-image hover-overlay ripple shadow-1-strong rounded"
                 data-ripple-color="light"
                 >
              <img
                   src="https://mdbootstrap.com/img/new/fluid/city/115.jpg"
                   className="w-100"
                   />
              <Link to="#!">
                <div
                     className="mask"
                     style="background-color: rgba(251, 251, 251, 0.2);"
                     ></div>
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
            <div
                 className="bg-image hover-overlay ripple shadow-1-strong rounded"
                 data-ripple-color="light"
                 >
              <img
                   src="https://mdbootstrap.com/img/new/fluid/city/116.jpg"
                   className="w-100"
                   />
              <Link to="#!">
                <div
                     className="mask"
                     style="background-color: rgba(251, 251, 251, 0.2);"
                     ></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2020 Copyright:
      <Link className="text-white" to="https://mdbootstrap.com/">MDBootstrap.com</Link>
    </div>

  </footer>

</div> */}





     <div>
        <footer className="bg-success text-light py-4">
            <div className="container">
            <div className="row">
            <div className="col-md-4">
                <h5>Contact Us</h5>
                <p>
                    Your Bakery Name
                    Address, City
                    Phone: (123) 456-7890
                    Email: info@yourbakery.com
                </p>
            </div>
            <div className="col-md-4">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">Menu</Link></li>
                    <li><Link to="#">Order Online</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                </ul>
            </div>
            <div className="col-md-4">
                <h5>Follow Us</h5>
                <ul className="list-unstyled">
                    <li><Link to="#"><i className="fab fa-facebook-f"></i> Facebook</Link></li>
                    <li><Link to="#"><i className="fab fa-twitter"></i> Twitter</Link></li>
                    <li><Link to="#"><i className="fab fa-instagram"></i> Instagram</Link></li>
                </ul>
            </div>
        </div>
        <p className="text-center">&copy; 2023 Your Bakery Delivery. All Rights Reserved.</p>
    </div>
</footer>
</div> 
    </div>
  )
}
