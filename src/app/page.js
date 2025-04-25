"use client";

import Image from "next/image";


import "./../../public/assets/css/main.css";
import MainNav from "./components/main/nav";
import skills from '@/data/skills'
import faqData from '@/data/faq'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { SiFreelancer } from "react-icons/si";

export default function Main() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFAQIndex, setActiveFAQIndex] = useState(null);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

        if (res.ok) {
          setStatus('success');
          e.target.reset();
        } else {
          setStatus('error');
        }
        setTimeout(() => {
          setStatus('');
      }, 2000);
    } catch (err) {
      setStatus('error');
    }
  };

  const toggleFAQ = (index) => {

    if (activeFAQIndex === index) {
      setActiveFAQIndex(null);
    } else {
      setActiveFAQIndex(index);
    }
  };
  return (
    <>
      <MainNav />
      <main className="main">

        <section id="hero" className="hero section">

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row align-items-center content">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <h2>Crafting Digital Experiences with Passion</h2>
                <p className="lead">Transforming ideas into elegant solutions through creative design and innovative development</p>
                <div className="cta-buttons" data-aos="fade-up" data-aos-delay="300">
                  <a href="#portfolio" className="btn btn-primary">View My Work</a>
                  <a href="#contact" className="btn btn-outline">Let&apos;s Connect</a>
                </div>
                <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
                  <div className="stat-item">
                    <span className="stat-number">4+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">13+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Happy Clients</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-image">
                  <Image
                    width={500}
                    height={500}
                    // src="/assets/img/profile/profile-1.webp"
                    src="/stat-img/main.png"
                    alt="Portfolio Hero Image"
                    className="img-fluid"
                    data-aos="zoom-out"
                    data-aos-delay="300"
                  />
                  <div className="shape-1"></div>
                  <div className="shape-2"></div>
                </div>
              </div>
            </div>

          </div>

        </section>

        <section id="about" className="about section light-background">

          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <div className="title-shape">
              <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
              </svg>
            </div>
            <p>
              I&apos;m a passionate Software Engineer skilled in building scalable web apps and seamless user experiences. I work with Laravel, Next.js, and React to craft clean, functional, and high-performance solutions.
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row align-items-center">
              <div className="col-lg-6 position-relative" data-aos="fade-right" data-aos-delay="200">
                <div className="about-image">
                  <Image width={600}
                    height={600}
                    // src="/assets/img/profile/profile-square-2.webp"
                    src="/stat-img/about.jpg"
                    alt="Profile Image" className="img-fluid rounded-4" />
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
                <div className="about-content">
                  <span className="subtitle">About Me</span>

                  {/* <h2>UI/UX Designer &amp; Web Developer</h2> */}
                  <h2>Full Stack Developer</h2>

                  <p className="lead mb-4">
                    I’m a Full Stack Developer with a focus on building robust, scalable web applications and delivering smooth, intuitive user experiences.
                  </p>

                  <p className="mb-4">
                    From frontend interfaces to backend systems, I enjoy turning ideas into reliable, efficient, and elegant digital products.
                  </p>

                  <div className="personal-info">
                    <div className="row g-4">
                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Name</span>
                          <span className="value">Sanjay Kumar</span>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Phone</span>
                          <span className="value">+91 8219393501</span>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Age</span>
                          <span className="value">27 Years</span>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Email</span>
                          <span className="value">r.rajput.dev.01@gmail.com</span>
                        </div>
                      </div>

                      {/* <div className="col-6">
                        <div className="info-item">
                          <span className="label">Occupation</span>
                          <span className="value">Lorem Engineer</span>
                        </div>
                      </div> */}

                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Nationality</span>
                          <span className="value">Indian</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="signature mt-4">
                    <div className="signature-image">
                      <Image width={100}
                        height={100}
                        // src="/assets/img/misc/signature-1.webp"
                        src="/stat-img/signature.png"
                        alt="" className="img-fluid" />
                    </div>
                    <div className="signature-info">
                      <h4>Sanjay</h4>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>

        <section id="skills" className="skills section portfolio">
          <div className="container section-title" data-aos="fade-up">
            <h2>Skills</h2>
            <div className="title-shape">
              <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
              </svg>
            </div>
            <p>
              I specialize in both frontend and backend development, with hands-on experience in modern frameworks, databases, and tools that bring powerful digital solutions to life.
            </p>
          </div>

          {/* <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
          {skills.map((category, i) => {
            const [title, items] = Object.entries(category)[0];
            return (
              <div className="mt-6" key={i}>
                <h2 className="text-xl font-semibold mb-3">{title}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 skills-animation">
                  {items.map((item, j) => (
                    <div
                      key={j}
                      className="p-3 bg-white border rounded-xl shadow-sm text-sm"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <h5 className="font-medium text-base mb-1">{item.Skill}</h5>
                      <p className="text-gray-500 text-xs mb-2">{item.des}</p>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-400 text-xs">Proficiency</span>
                        <strong className="text-gray-800 text-sm">{item.prsentage}</strong>
                      </div>
                      <div className="w-full bg-gray-200 rounded h-1.5">
                        <div
                          className="bg-green-500 h-1.5 rounded"
                          style={{ width: item.prsentage }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div> */}

          <div className="container mx-auto px-4 py-6">
            {/* Tabs */}
            <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

              <div className="portfolio-filters-container" data-aos="fade-up" data-aos-delay="200">
                <div className="section light-background p-2">
                  <ul className="portfolio-filters isotope-filters overflow-x-auto">

                    {skills.map((category, i) => {
                      const [title] = Object.entries(category)[0];
                      return (
                        <li
                          key={i}
                          onClick={() => setActiveIndex(i)}
                          className={activeIndex == i ? 'filter-active' : ''}
                        >{title}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="flex space-x-4 overflow-x-auto border-b mb-6">
            {skills.map((category, i) => {
              const [title] = Object.entries(category)[0];
              return (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`pb-2 font-mdium whitespace-nowrap ${
                    activeIndex === i
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-blue-500'
                  }`}
                >
                  {title}
                </button>
              );
            })}
          </div> */}

            {/* Animated Content */}
            <div className="relative min-h-[200px]">
              <AnimatePresence mode="wait">
                <div
                  key={activeIndex}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                  {Object.entries(skills[activeIndex])[0][1].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div
                        className="p-3 bg-white border rounded-xl shadow-sm text-sm"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <h5 className="font-medium text-base mb-1">{item.Skill}</h5>
                        <p className="text-gray-500 text-xs mb-2">{item.des}</p>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-400 text-xs">Proficiency</span>
                          <strong className="text-gray-800 text-sm">{item.prsentage}</strong>
                        </div>
                        <div className="w-full bg-gray-200 rounded h-1.5">
                          <div
                            className="bg-green-500 h-1.5 rounded"
                            style={{ width: item.prsentage }}
                          ></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            </div>
          </div>


        </section>

        <section id="resume" className="resume section">

          <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
            <div className="title-shape">
              <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
              </svg>
            </div>
            <p>
              A snapshot of my journey as a developer — showcasing my technical skills, key projects, and professional experience.
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row">
              <div className="col-12">
                <div className="resume-wrapper">
                  <div className="resume-block" data-aos="fade-up">
                    <h2>Work Experience</h2>
                    <p className="lead">Skilled in full-stack development, agile collaboration, and delivering scalable, high-quality software with a focus on performance and user experience.</p>

                    <div className="timeline">
                      <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                        <div className="timeline-left">
                          <h4 className="company">Summerhill Technologies Pvt Ltd. (Shimla)</h4>
                          <span className="period">Oct,2021 - Present</span>
                        </div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-right">
                          <h3 className="position">Software Developer</h3>
                          <p className="description">Successfully led end-to-end development of scalable web applications, managing both team collaboration and client communication. Oversaw feature delivery, performance optimization, and third-party integrations within agile sprints.</p>
                          <ul className="mt-2">
                            <li>
                              <h3 className="position">Project: ULMS (Unit Load Management System) –</h3> A system to manage and track reusable unit load boxes through cycle-wise dispatch.
                            </li>
                            <li>
                              <ul className="list-disc ps-4 mt-2">
                                <li>Built real-time operations and socket-based live tracking & notifications.</li>
                                <li>Optimized SQL queries for performance and operational accuracy.</li>
                                <li>Managed complete dispatch workflow including supplier and OEM integration.</li>
                                <li>Integrated email and e-way billing services for automated communication.</li>
                                <li><strong style={{ color: '#e87532' }}>Tech Stack:</strong> Laravel, PHP, SQL, phpMyAdmin, jQuery.</li>
                              </ul>
                            </li>
                            <li>
                              <h3 className="position">Project: Dtalk –</h3> An internal task management and appraisal system for a logistics company.
                            </li>
                            <li>
                              <ul className="list-disc ps-4 mt-2">
                                <li>Managed employee daily tasks with manager-mapped evaluation.</li>
                                <li>Built quarterly performance tracking and scoring workflows.</li>
                                <li>Calculated annual scores to support structured employee appraisals.</li>
                                <li>Streamlined performance review cycles across departments.</li>
                                <li><strong style={{ color: '#e87532' }}>Tech Stack:</strong> Laravel, PHP, SQL, phpMyAdmin, JavaScript</li>
                              </ul>
                            </li>
                            <li>
                              <h3 className="position">Project: YMS - </h3> Yard Management System for handling vehicle placement, service scheduling, and real-time yard operations.
                            </li>
                            <li>
                              <ul className="list-disc ps-4 mt-2">
                                <li>Managed vehicle entry, placement, and service mapping within the yard.</li>
                                <li>Utilized Google Maps API for precise yard location tracking and service zones.</li>
                                <li>Implemented real-time notifications and system updates using WebSockets.</li>
                                <li>Covered various yard operations from check-in to service dispatch.</li>
                                <li><strong style={{ color: '#e87532' }}>Tech Stack:</strong> React (Frontend), Node.js (Backend), MongoDB (Database).</li>
                              </ul>
                            </li>
                            <li>
                              <h3 className="position">Project: AMT – </h3> Asset Management Tool for logistics company to streamline asset assignment and inventory tracking.
                            </li>
                            <li>
                              <ul className="list-disc ps-4 mt-2">
                                <li>Mapped company assets (hardware/software) to individual employees.</li>
                                <li>Handled asset requests, approvals, and assignment workflows efficiently.</li>
                                <li>Built real-time inventory tracking and status updates.</li>
                                <li>Improved asset lifecycle visibility from request to retirement.</li>
                                <li><strong style={{ color: '#e87532' }}>Tech Stack:</strong> Next.js (Frontend & Backend), MongoDB (Database).</li>
                              </ul>
                            </li>
                            <li>
                              <h3 className="position">Project: BAton Tea – </h3>
                              This is an e-commerce website where we implemented product purchase and checkout features, payment integration, messaging, and inventory management. It was built with a custom UI design.
                            </li>
                            <li>
                              <ul className="list-disc ps-4 mt-2">
                                <li>Implemented product browsing, add-to-cart, and secure checkout functionality.</li>
                                <li>Integrated an online payment gateway for seamless transactions.</li>
                                <li>Managed real-time stock and inventory tracking.</li>
                                <li>Designed and developed a responsive custom UI using Laravel Blade templates and Bootstrap.</li>
                                <li>
                                  <strong style={{ color: '#e87532' }}>Tech Stack:</strong> Laravel (Backend), Bootstrap (UI), SQL (Database).
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <p></p>
                        </div>
                      </div>

                      <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                        <div className="timeline-left">
                          <h4 className="company">Eduuis Techo Solution Pvt. Ltd</h4>
                          <span className="period">July 2021 - Oct 2021</span>
                        </div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-right">
                          <h3 className="position">PHP Developer Executive (Internship)</h3>
                          <p className="description">
                            Completed internship focused on building foundational skills in PHP, JavaScript, and Laravel while developing simple web-based applications and learning industry standards.
                          </p>
                          <ul>
                            <li>Learned core PHP and JavaScript for basic web functionality.</li>
                            <li>Started working with Laravel framework for structured application development.</li>
                            <li>Collaborated with senior developers to understand real-world development practices.</li>
                          </ul>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="resume-block" data-aos="fade-up" data-aos-delay="100">
                    <h2>My Education</h2>
                    <p className="lead">I have an education in commerce and computer applications, with skills in business and IT..</p>

                    <div className="timeline">
                      <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                        <div className="timeline-left">
                          <h4 className="company">Senior Secondary (+2) in Commerce</h4>
                          <span className="period">Govt. Senior Secondary School » 2014-2015</span>
                        </div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-right">
                          <h3 className="position">Commerce Stream (Accountancy, Business Studies, Economics)</h3>
                          <p className="description">Completed studies in the commerce stream with a focus on accountancy, business studies, and economics. Gained practical knowledge in financial management, business concepts.</p>
                        </div>
                      </div>

                      <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                        <div className="timeline-left">
                          <h4 className="company">Advanced Diploma in Computer Applications</h4>
                          <span className="period">Vedanta Foundation » Dec 2015</span>
                        </div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-right">
                          <h3 className="position">Computer Applications & IT Skills</h3>
                          <p className="description">Acquired essential skills in computer applications, including proficiency in MS Office, web development basics, and IT management. Developed a strong foundation in computer programming and data handling.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* <section id="portfolio" className="portfolio section">

          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <div className="title-shape">
              <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
              </svg>
            </div>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

              <div className="portfolio-filters-container" data-aos="fade-up" data-aos-delay="200">
                <ul className="portfolio-filters isotope-filters">
                  <li data-filter="*" className="filter-active">All Work</li>
                  <li data-filter=".filter-web">Web Design</li>
                  <li data-filter=".filter-graphics">Graphics</li>
                  <li data-filter=".filter-motion">Motion</li>
                  <li data-filter=".filter-brand">Branding</li>
                </ul>
              </div>

              <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300">

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <Image width={100}
                        height={100} src="/assets/img/portfolio/portfolio-1.webp" className="img-fluid" alt="" loading="lazy" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-actions">
                          <a href="/assets/img/portfolio/portfolio-1.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-web"><i className="bi bi-eye"></i></a>
                          <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span className="category">Web Design</span>
                      <h3>Modern Dashboard Interface</h3>
                      <p>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <Image width={100}
                        height={100} src="/assets/img/portfolio/portfolio-10.webp" className="img-fluid" alt="" loading="lazy" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-actions">
                          <a href="/assets/img/portfolio/portfolio-10.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-graphics"><i className="bi bi-eye"></i></a>
                          <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span className="category">Graphics</span>
                      <h3>Creative Brand Identity</h3>
                      <p>Vestibulum id ligula porta felis euismod semper at vulputate.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-motion">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <Image width={100}
                        height={100} src="/assets/img/portfolio/portfolio-7.webp" className="img-fluid" alt="" loading="lazy" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-actions">
                          <a href="/assets/img/portfolio/portfolio-7.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-motion"><i className="bi bi-eye"></i></a>
                          <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span className="category">Motion</span>
                      <h3>Product Animation Reel</h3>
                      <p>Donec ullamcorper nulla non metus auctor fringilla dapibus.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-brand">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <Image width={100}
                        height={100} src="/assets/img/portfolio/portfolio-4.webp" className="img-fluid" alt="" loading="lazy" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-actions">
                          <a href="/assets/img/portfolio/portfolio-4.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-brand"><i className="bi bi-eye"></i></a>
                          <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span className="category">Branding</span>
                      <h3>Luxury Brand Package</h3>
                      <p>Aenean lacinia bibendum nulla sed consectetur elit.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <Image width={100}
                        height={100} src="/assets/img/portfolio/portfolio-2.webp" className="img-fluid" alt="" loading="lazy" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-actions">
                          <a href="/assets/img/portfolio/portfolio-2.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-web"><i className="bi bi-eye"></i></a>
                          <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span className="category">Web Design</span>
                      <h3>E-commerce Platform</h3>
                      <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <Image width={100}
                        height={100} src="/assets/img/portfolio/portfolio-11.webp" className="img-fluid" alt="" loading="lazy" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-actions">
                          <a href="/assets/img/portfolio/portfolio-11.webp" className="glightbox preview-link" data-gallery="portfolio-gallery-graphics"><i className="bi bi-eye"></i></a>
                          <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span className="category">Graphics</span>
                      <h3>Digital Art Collection</h3>
                      <p>Cras mattis consectetur purus sit amet fermentum.</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section> */}

        {/* <section id="testimonials" className="testimonials section light-background">

          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <div className="title-shape">
              <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
              </svg>
            </div>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="testimonials-slider swiper init-swiper">
               <script type="application/json" className="swiper-config">
                {
                  "slidesPerView": 1,
                "loop": true,
                "speed": 600,
                "autoplay": {
                  "delay": 5000
              },
                "navigation": {
                  "nextEl": ".swiper-button-next",
                "prevEl": ".swiper-button-prev"
              }
            }
              </script> 

              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Sed ut perspiciatis unde omnis</h2>
                        <p>
                          Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        </p>
                        <p>
                          Beatae magnam dolore quia ipsum. Voluptatem totam et qui dolore dignissimos. Amet quia sapiente laudantium nihil illo et assumenda sit cupiditate. Nam perspiciatis perferendis minus consequatur. Enim ut eos quo.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <Image width={100}
                            height={100} src="/assets/img/person/person-m-7.webp" className="profile-img" alt="" />
                          <div className="profile-info">
                            <h3>Saul Goodman</h3>
                            <span>Client</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <Image width={100}
                            height={100} src="/assets/img/person/person-m-7.webp" className="featured-img" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Nemo enim ipsam voluptatem</h2>
                        <p>
                          Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                        </p>
                        <p>
                          Dolorem excepturi esse qui amet maxime quibusdam aut repellendus voluptatum. Corrupti enim a repellat cumque est laborum fuga consequuntur. Dolorem nostrum deleniti quas voluptatem iure dolorum rerum. Repudiandae doloribus ut repellat harum vero aut. Modi aut velit aperiam aspernatur odit ut vitae.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <Image width={100}
                            height={100} src="/assets/img/person/person-f-8.webp" className="profile-img" alt="" />
                          <div className="profile-info">
                            <h3>Sara Wilsson</h3>
                            <span>Designer</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <Image width={100}
                            height={100} src="/assets/img/person/person-f-8.webp" className="featured-img" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>
                          Labore nostrum eos impedit
                        </h2>
                        <p>
                          Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                        </p>
                        <p>
                          Itaque ut explicabo vero occaecati est quam rerum sed. Numquam tempora aut aut quaerat quia illum. Nobis quia autem odit ipsam numquam. Doloribus sit sint corporis eius totam fuga. Hic nostrum suscipit corrupti nam expedita adipisci aut optio.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <Image width={100}
                            height={100} src="/assets/img/person/person-m-9.webp" className="profile-img" alt="" />
                          <div className="profile-info">
                            <h3>Matt Brandon</h3>
                            <span>Freelancer</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <Image width={100}
                            height={100} src="/assets/img/person/person-m-9.webp" className="featured-img" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Impedit dolor facilis nulla</h2>
                        <p>
                          Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                        </p>
                        <p>
                          Omnis aspernatur accusantium qui delectus praesentium repellendus. Facilis sint odio aspernatur voluptas commodi qui qui qui pariatur. Corrupti deleniti itaque quaerat ipsum deleniti culpa tempora tempore. Et consequatur exercitationem hic aspernatur nobis est voluptatibus architecto laborum.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <Image width={100}
                            height={100} src="/assets/img/person/person-f-10.webp" className="profile-img" alt="" />
                          <div className="profile-info">
                            <h3>Jena Karlis</h3>
                            <span>Store Owner</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <Image width={100}
                            height={100} src="/assets/img/person/person-f-10.webp" className="featured-img" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="swiper-navigation w-100 d-flex align-items-center justify-content-center">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>

            </div>

          </div>

        </section> */}

        <section id="services" className="services section">

          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <div className="title-shape">
              <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
              </svg>
            </div>
            <p>Offering a comprehensive range of full-stack development services with expertise in backend, frontend, databases, and API integrations to build scalable and high-performing applications.</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row align-items-center">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h2 className="fw-bold mb-4 servies-title">End-to-End Web Development Solutions</h2>
                <p className="mb-4">Providing tailored solutions for businesses, from designing user-friendly interfaces to developing powerful backends and secure databases.</p>
                {/* <Link href="/all-services" className="btn btn-outline-primary">See all services</Link> */}
              </div>

              <div className="col-lg-8">
                <div className="row g-4">

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="service-item">
                      <i className="bi bi-activity icon"></i>
                      <h3><a href="#">Backend Development with PHP & Node.js</a></h3>
                      <p>Develop secure and high-performing backends with PHP, Node.js, Laravel, AdonisJS, and ExpressJS to meet complex application needs.</p>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="service-item">
                      <i className="bi bi-easel icon"></i>
                      <h3><a href="#">Frontend Development with React & Vue</a></h3>
                      <p>Craft dynamic and engaging user interfaces using ReactJS and VueJS for an exceptional user experience.</p>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="service-item">
                      <i className="bi bi-broadcast icon"></i>
                      <h3><a href="#">Database Design & Management</a></h3>
                      <p>Design scalable, secure, and efficient databases using SQL, MongoDB, PostgreSQL, and Firebase for storing and managing large datasets.</p>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div className="service-item">
                      <i className="bi bi-bounding-box-circles icon"></i>
                      <h3><a href="#">API Development & Integration</a></h3>
                      <p>Create and integrate custom RESTful APIs, third-party APIs (like payment gateways, Google Maps, WhatsApp), and real-time communication with WebSockets.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-3">
                <div className="row g-4">
                  <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                    <div className="service-item">
                      <i className="bi bi-laptop icon"></i>
                      <h3><a href="#">Full-Stack Web Application Development</a></h3>
                      <p>Develop complete web applications with integrated frontend and backend frameworks, ensuring scalability, responsiveness, and performance.</p>
                    </div>
                  </div>

                  <div className="col-md-4" data-aos="fade-up" data-aos-delay="700">
                    <div className="service-item">
                      <i className="bi bi-check-circle icon"></i>
                      <h3><a href="#">Performance Optimization</a></h3>
                      <p>Enhance the performance of web applications by optimizing queries, reducing loading times, and improving server-side processes.</p>
                    </div>
                  </div>

                  <div className="col-md-4" data-aos="fade-up" data-aos-delay="800">
                    <div className="service-item">
                      <i className="bi bi-shield-lock icon"></i>
                      <h3><a href="#">Security & Authentication</a></h3>
                      <p>Implement advanced security measures, including authentication systems, encryption, and data protection to ensure your applications are secure.</p>
                    </div>
                  </div>

                  <div className="col-md-4" data-aos="fade-up" data-aos-delay="900">
                    <div className="service-item">
                      <i className="bi bi-cloud icon"></i>
                      <h3><a href="#">Cloud Integration & Deployment</a></h3>
                      <p>Integrate your application with cloud services like AWS, Google Cloud, or Azure for better scalability, storage, and deployment processes.</p>
                    </div>
                  </div>
                  <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                    <div className="service-item">
                      <i className="bi bi-cloud icon"></i>
                      <h3><a href="service-details.html">Cloud Application Architecture</a></h3>
                      <p>Design and implement cloud-based architectures using AWS, Google Cloud, or Microsoft Azure to ensure scalability, reliability, and security of your applications.</p>
                    </div>
                  </div>

                  <div className="col-md-4" data-aos="fade-up" data-aos-delay="700">
                    <div className="service-item">
                      <i className="bi bi-palette icon"></i>
                      <h3><a href="service-details.html">Custom Web Design</a></h3>
                      <p>Craft visually stunning and user-friendly websites tailored to your brand&apos;s identity, with responsive design, modern aesthetics, and engaging user interfaces.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>


        <section id="faq" className="faq section">

          <div className="container section-title" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
            <div className="title-shape">
              <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
              </svg>
            </div>
            <p>Here are some common questions about my services and skills. If you need further information, feel free to get in touch!</p>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="faq-container">
                  {faqData.map((faq, index) => (
                    <div className="faq-item" key={index}>
                      <h3 onClick={() => toggleFAQ(index)} className={activeFAQIndex === index ? 'faq-active-e' : ''}>{faq.question}</h3>

                      <i
                        className={`faq-toggle bi ${activeFAQIndex === index ? 'bi-chevron-down' : 'bi-chevron-right'
                          }`}
                      ></i>
                      <AnimatePresence mode="wait">
                        {activeFAQIndex === index && (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <p>{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </section>

        <section id="contact" className="contact section light-background">

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row g-5">
              <div className="col-lg-6">
                <div className="content" data-aos="fade-up" data-aos-delay="200">
                  <div className="section-category mb-3">Contact</div>
                  <h2 className="display-5 mb-4">Let&apos;s Build Something Together</h2>
                  <p className="lead mb-4">
                    Whether you have a project in mind, want to collaborate, or just want to connect — feel free to reach out. I’m always open to new opportunities and ideas.
                  </p>

                  <div className="contact-info mt-5">
                    <div className="info-item d-flex mb-3">
                      <i className="bi bi-envelope-at me-3"></i>
                      <span>r.rajput.dev.01@gmail.com</span>
                    </div>

                    <div className="info-item d-flex mb-3">
                      <i className="bi bi-telephone me-3"></i>
                      <span>+91 8219393501</span>
                    </div>

                    <div className="info-item d-flex mb-3">
                      <i className="bi bi-person me-3"></i>
                      <span>Sanjay Kumar, 27 Years</span>
                    </div>

                    <a
                      href="https://www.google.com/maps/place/India"
                      target="_blank"
                      className="map-link d-inline-flex align-items-center"
                      rel="noopener noreferrer"
                    >
                      Open Map
                      <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>

              </div>

              <div className="col-lg-6">
                <div className="contact-form card" data-aos="fade-up" data-aos-delay="300">
                  <div className="card-body p-4 p-lg-5">

                    <form onSubmit={handleSubmit} className="php-email-form">
                      <div className="row gy-4">
                        <div className="col-12">
                          <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                        </div>
                        <div className="col-12">
                          <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                        </div>
                        <div className="col-12">
                          <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                        </div>
                        <div className="col-12">
                          <textarea name="message" className="form-control" rows="6" placeholder="Message"></textarea>
                        </div>
                        <div className="col-12 text-center">
                          {status === 'loading' && <div className="loading">Sending...</div>}
                          {status === 'success' && <div className="sent-message">Message sent! Thank you 😊</div>}
                          {status === 'error' && <div className="error-message">Oops! Something went wrong.</div>}
                          <button type="submit" className="btn btn-submit w-100">Submit Message</button>
                        </div>
                      </div>
                    </form>

                  </div>
                </div>
              </div>

            </div>

          </div>

        </section>

      </main>

      <footer id="footer" className="footer">

        <div className="container">
          <div className="copyright text-center ">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">RR</strong> <span>All Rights Reserved</span></p>
          </div>
          <div className="social-links d-flex justify-content-center">
            <Link
              href="https://wa.me/918219393501?text=Hi%20there%2C%20I%20found%20you%20on%20your%20website!"
              target="_blank"
              className="text-green-400 hover:text-green-600 transform hover:scale-110 transition duration-200"
            >
              <IoLogoWhatsapp />
            </Link>
            <Link
              href="tel:+918219393501"
              className="text-blue-400 hover:text-blue-600 transform hover:scale-110 transition duration-200"
            >
              <IoMdCall />
            </Link>
            {/* <Link
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
            </Link> */}
            <Link
              href="#"
              onClick={() => alert('Yon`t to login see this option!')}
              className="text-red-400 hover:text-red-600 transform hover:scale-110 transition duration-200"
            >
              <FaYoutube />
            </Link>
            <Link
              href="#"
              onClick={() => alert('Yon`t to login see this option!')}
              className="text-blue-400 hover:text-blue-600 transform hover:scale-110 transition duration-200"
            >
              <SiFreelancer />
            </Link>
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
            {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
          </div>
        </div>

      </footer>

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

      {/* <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

      <script src="assets/js/main.js"></script> */}

    </>
  );
}
