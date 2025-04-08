import Image from "next/image";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function MainNav() {

  return (
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

          <Link href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
            {/* <!-- <img src="/assets/img/logo.webp" alt=""> --> */}
            <h1 className="sitename">EasyFolio</h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link href="#hero" className="active">Home</Link></li>
              <li><Link href="#about">About </Link></li>
              <li><Link href="#resume">Resume</Link></li>
              <li><Link href="#portfolio">Portfolio</Link></li>
              <li><Link href="#services">Services</Link></li>

              <li className="dropdown"><Link href="#"><span>Dropdown</span> <GoChevronDown /></Link>
                <ul>
                  <li><Link href="#">Dropdown 1</Link></li>
                  <li className="dropdown"><Link href="#"><span>Deep Dropdown</span> <GoChevronDown /></Link>
                    <ul>
                      <li><Link href="#">Deep Dropdown 1</Link></li>
                      <li><Link href="#">Deep Dropdown 2</Link></li>
                      <li><Link href="#">Deep Dropdown 3</Link></li>
                      <li><Link href="#">Deep Dropdown 4</Link></li>
                      <li><Link href="#">Deep Dropdown 5</Link></li>
                    </ul>
                  </li>
                  <li><Link href="#">Dropdown 2</Link></li>
                  <li><Link href="#">Dropdown 3</Link></li>
                  <li><Link href="#">Dropdown 4</Link></li>
                </ul>
              </li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <div className="header-social-links">
            <Link
              href="#"
              className="text-green-400 hover:text-green-600 transform hover:scale-110 transition duration-200"
            >
              <IoLogoWhatsapp />
            </Link>
            <Link
              href="#"
              className="text-blue-400 hover:text-blue-600 transform hover:scale-110 transition duration-200"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="text-pink-400 hover:text-pink-600 transform hover:scale-110 transition duration-200"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="text-blue-500 hover:text-blue-700 transform hover:scale-110 transition duration-200"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="#"
              className="text-red-400 hover:text-red-600 transform hover:scale-110 transition duration-200"
            >
              <FaYoutube />
            </Link>
          </div>

        </div>
      </header>
      )
      }