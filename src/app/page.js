"use client";

import Image from "next/image";


import "./../../public/assets/css/main.css";
import MainNav from "./components/main/nav";
import skills from '@/data/skills'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Main() {
  const [activeIndex, setActiveIndex] = useState(0);
  // console.log('data', data);
  return (
    <>
      <MainNav/>
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
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">100+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Happy Clients</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-image">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/img/profile/profile-1.webp"
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
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row align-items-center">
              <div className="col-lg-6 position-relative" data-aos="fade-right" data-aos-delay="200">
                <div className="about-image">
                  <Image width={600}
                    height={600}
                    src="/assets/img/profile/profile-square-2.webp" alt="Profile Image" className="img-fluid rounded-4" />
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
                <div className="about-content">
                  <span className="subtitle">About Me</span>

                  {/* <h2>UI/UX Designer &amp; Web Developer</h2> */}
                  <h2>Full Stack Developer</h2>

                  <p className="lead mb-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                  <p className="mb-4">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>

                  <div className="personal-info">
                    <div className="row g-4">
                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Name</span>
                          <span className="value">Sanjay Kuamr</span>
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
                        height={100} src="/assets/img/misc/signature-1.webp" alt="" className="img-fluid" />
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

        <section id="skills" className="skills section">
        <div className="container section-title" data-aos="fade-up">
            <h2>Skills</h2>
            <div className="title-shape">
              <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
              </svg>
            </div>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem</p>
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
          <div className="flex space-x-4 overflow-x-auto border-b mb-6">
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
          </div>

          {/* Animated Content */}
          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {Object.entries(skills[activeIndex])[0][1].map((item, i) => (
                  <div
                  key={i}
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
              </motion.div>
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
            <p>Highlights of my professional path and technical growth.</p>
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
                              <strong>Project:</strong> ULMS (Unit Load Management System) – A system to manage and track reusable unit load boxes through cycle-wise dispatch.
                            </li>
                            <li>
                              <ul className="list-disc ps-4 mt-2">
                                <li>Built real-time operations and socket-based live tracking & notifications.</li>
                                <li>Optimized SQL queries for performance and operational accuracy.</li>
                                <li>Managed complete dispatch workflow including supplier and OEM integration.</li>
                                <li>Integrated email and e-way billing services for automated communication.</li>
                                <li><strong>Tech Stack:</strong> Laravel, PHP, SQL, phpMyAdmin, jQuery.</li>
                              </ul>
                            </li>
                            <li>
                              <strong>Project:</strong> Dtalk – An internal task management and appraisal system for a logistics company.
                            </li>
                            <li>
                              <ul className="list-disc ps-4 mt-2">
                                <li>Managed employee daily tasks with manager-mapped evaluation.</li>
                                <li>Built quarterly performance tracking and scoring workflows.</li>
                                <li>Calculated annual scores to support structured employee appraisals.</li>
                                <li>Streamlined performance review cycles across departments.</li>
                                <li><strong>Tech Stack:</strong> Laravel, PHP, SQL, phpMyAdmin, JavaScript</li>
                              </ul>
                            </li>
                            <li>
                              <strong>Project:</strong> YMS – Yard Management System for handling vehicle placement, service scheduling, and real-time yard operations.
                            </li>
                            <li>
                              <ul className="list-disc ps-4 mt-2">
                                <li>Managed vehicle entry, placement, and service mapping within the yard.</li>
                                <li>Utilized Google Maps API for precise yard location tracking and service zones.</li>
                                <li>Implemented real-time notifications and system updates using WebSockets.</li>
                                <li>Covered various yard operations from check-in to service dispatch.</li>
                                <li><strong>Tech Stack:</strong> React (Frontend), Node.js (Backend), MongoDB (Database).</li>
                              </ul>
                            </li>
                            <li>
                              <strong>Project:</strong> AMT – Asset Management Tool for logistics company to streamline asset assignment and inventory tracking.
                            </li>
                            <li>
                              <ul className="list-disc ps-4 mt-2">
                                <li>Mapped company assets (hardware/software) to individual employees.</li>
                                <li>Handled asset requests, approvals, and assignment workflows efficiently.</li>
                                <li>Built real-time inventory tracking and status updates.</li>
                                <li>Improved asset lifecycle visibility from request to retirement.</li>
                                <li><strong>Tech Stack:</strong> Next.js (Frontend & Backend), MongoDB (Database).</li>
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
                    <p className="lead">Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing.</p>

                    <div className="timeline">
                      <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                        <div className="timeline-left">
                          <h4 className="company">Vestibulum University</h4>
                          <span className="period">2017-2019</span>
                        </div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-right">
                          <h3 className="position">Diploma in Consequat</h3>
                          <p className="description">Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.</p>
                        </div>
                      </div>

                      <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                        <div className="timeline-left">
                          <h4 className="company">Nullam Corp</h4>
                          <span className="period">2019 - 2023</span>
                        </div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-right">
                          <h3 className="position">Master of Fine Arts &amp; Graphic Design</h3>
                          <p className="description">Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.</p>
                        </div>
                      </div>

                      <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
                        <div className="timeline-left">
                          <h4 className="company">Vestibulum University</h4>
                          <span className="period">2015-2019</span>
                        </div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-right">
                          <h3 className="position">Bachelor of Fine Arts &amp; Graphic Design</h3>
                          <p className="description">Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>

        <section id="portfolio" className="portfolio section">

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

        </section>

        <section id="testimonials" className="testimonials section light-background">

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
              {/* <script type="application/json" className="swiper-config">
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
              </script> */}

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

        </section>

        <section id="services" className="services section">

          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <div className="title-shape">
              <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
              </svg>
            </div>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row align-items-center">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h2 className="fw-bold mb-4 servies-title">Consectetur adipiscing elit sed do eiusmod tempor</h2>
                <p className="mb-4">Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora.</p>
                <a href="#" className="btn btn-outline-primary">See all services</a>
              </div>
              <div className="col-lg-8">
                <div className="row g-4">

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="service-item">
                      <i className="bi bi-activity icon"></i>
                      <h3><a href="service-details.html">Eget nulla facilisi etiam</a></h3>
                      <p>Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla.</p>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="service-item">
                      <i className="bi bi-easel icon"></i>
                      <h3><a href="service-details.html">Duis aute irure dolor</a></h3>
                      <p>Auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor.</p>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="service-item">
                      <i className="bi bi-broadcast icon"></i>
                      <h3><a href="service-details.html">Excepteur sint occaecat</a></h3>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div className="service-item">
                      <i className="bi bi-bounding-box-circles icon"></i>
                      <h3><a href="service-details.html">Tempor incididunt ut labore</a></h3>
                      <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p>
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
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem</p>
          </div>
          <div className="container">

            <div className="row justify-content-center">

              <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">

                <div className="faq-container">

                  <div className="faq-item faq-active">
                    <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                    <div className="faq-content">
                      <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>

                  <div className="faq-item">
                    <h3>Feugiat scelerisque varius morbi enim nunc faucibus?</h3>
                    <div className="faq-content">
                      <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>

                  <div className="faq-item">
                    <h3>Dolor sit amet consectetur adipiscing elit pellentesque?</h3>
                    <div className="faq-content">
                      <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>

                  <div className="faq-item">
                    <h3>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h3>
                    <div className="faq-content">
                      <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>

                  <div className="faq-item">
                    <h3>Tempus quam pellentesque nec nam aliquam sem et tortor?</h3>
                    <div className="faq-content">
                      <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>

                  <div className="faq-item">
                    <h3>Perspiciatis quod quo quos nulla quo illum ullam?</h3>
                    <div className="faq-content">
                      <p>Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>

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
                  <h2 className="display-5 mb-4">Nemo enim ipsam voluptatem quia voluptas aspernatur</h2>
                  <p className="lead mb-4">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>

                  <div className="contact-info mt-5">
                    <div className="info-item d-flex mb-3">
                      <i className="bi bi-envelope-at me-3"></i>
                      <span>info@example.com</span>
                    </div>

                    <div className="info-item d-flex mb-3">
                      <i className="bi bi-telephone me-3"></i>
                      <span>+1 5589 55488 558</span>
                    </div>

                    <div className="info-item d-flex mb-4">
                      <i className="bi bi-geo-alt me-3"></i>
                      <span>A108 Adam Street, New York, NY 535022</span>
                    </div>

                    <a href="#" className="map-link d-inline-flex align-items-center">
                      Open Map
                      <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="contact-form card" data-aos="fade-up" data-aos-delay="300">
                  <div className="card-body p-4 p-lg-5">

                    <form action="forms/contact.php" method="post" className="php-email-form">
                      <div className="row gy-4">

                        <div className="col-12">
                          <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                        </div>

                        <div className="col-12 ">
                          <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
                        </div>

                        <div className="col-12">
                          <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                        </div>

                        <div className="col-12">
                          <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                        </div>

                        <div className="col-12 text-center">
                          <div className="loading">Loading</div>
                          <div className="error-message"></div>
                          <div className="sent-message">Your message has been sent. Thank you!</div>

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
            <p>© <span>Copyright</span> <strong className="px-1 sitename">EasyFolio</strong> <span>All Rights Reserved</span></p>
          </div>
          <div className="social-links d-flex justify-content-center">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
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
