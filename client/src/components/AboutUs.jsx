import React from 'react';
import NavBar from './Navbar';
import devPic from '../samer.jpeg';
import designPic from '../clara.png';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import './AboutUs.css';
function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="page-height">
          <div className="text-config mb-1">
            Password Storage was designed to store your passwords safely on
            internet.Its a simple and lightweight single page application that
            stores all passwords that you want.
          </div>
          <div className="text-config mb-1">
            Due to all passwords needed in the internet, Password Storage is
            great for you. You do not have to repeat the same password all
            around internet anymore. Centralize all your passwords here and do
            not worry anymore!!
          </div>
          <div className="text-config mb-1">
            It is safe to store your password here because we encrypted all
            passwords on the database. so even if someone gets acces to our
            database it would not be possible to decrypt your password
          </div>
          <div className="text-config mt-5">
            Password Storage was developed by:
          </div>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="mx-auto row">
              <div className="col-12 col-md-3 mx-auto row mb-3">
                <img
                  src={devPic}
                  alt="author pic"
                  className="devPic-config mx-auto"
                />
              </div>
              <div className="col-12 col-md-9">
                <h5 className="text-white ml-5">Samer Kayali Koubeissi Rola</h5>
                <h5 className="text-white ml-5">Frontend and Backend</h5>
                <h5 className="text-white ml-5">Contact</h5>
                <p className="text-white ml-5 ">samerkkr@gmail.com</p>
                <div className="d-flex">
                  <p className="text-white ml-5 ">
                    <a
                      target="_blank"
                      className="link-config"
                      href="https://github.com/sameroso"
                    >
                      <FaGithub size="30px" />
                    </a>
                  </p>
                  <p className="text-white ml-5 ">
                    <a
                      target="_blank"
                      className="link-config"
                      href="https://www.linkedin.com/in/samer-rola-frontend/"
                    >
                      <FaLinkedinIn size="30px" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="mx-auto row">
              <div className="col-12 col-sm-3 row mb-3">
                <img
                  src={designPic}
                  alt="author pic"
                  className="devPic-config mx-auto"
                />
              </div>
              <div className="col-12 col-sm-9">
                <h5 className="text-white ml-5">Maria Clara Paggoto</h5>
                <h5 className="text-white ml-5">Design and Frontend</h5>
                <h5 className="text-white ml-5">Contact</h5>
                <p className="text-white ml-5 ">clarapagotto@gmail.com</p>
                <div className="d-flex">
                  <p className="text-white ml-5 ">
                    <a
                      target="_blank"
                      className="link-config"
                      href="https://github.com/clarapagotto"
                    >
                      <FaGithub size="30px" />
                    </a>
                  </p>
                  <p className="text-white ml-5 ">
                    <a
                      target="_blank"
                      className="link-config"
                      href="https://www.linkedin.com/in/mclarapagotto/"
                    >
                      <FaLinkedinIn size="30px" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
