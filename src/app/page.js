"use client";

import Image from "next/image";


import "./../../public/assets/css/main.css";
import MainNav from "./components/main/nav";

export default function Main() {

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

                  <h2>UI/UX Designer &amp; Web Developer</h2>

                  <p className="lead mb-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                  <p className="mb-4">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>

                  <div className="personal-info">
                    <div className="row g-4">
                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Name</span>
                          <span className="value">Eliot Johnson</span>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Phone</span>
                          <span className="value">+123 456 7890</span>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Age</span>
                          <span className="value">26 Years</span>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Email</span>
                          <span className="value">email@example.com</span>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Occupation</span>
                          <span className="value">Lorem Engineer</span>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Nationality</span>
                          <span className="value">Ipsum</span>
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
                      <h4>Eliot Johnson</h4>
                      <p>Adipiscing Elit, Lorem Ipsum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>

        <section id="skills" className="skills section">

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row g-4 skills-animation">

              <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                <div className="skill-box">
                  <h3>HTML</h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                  <span className="text-end d-block">90%</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="skill-box">
                  <h3>CSS</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                  <span className="text-end d-block">90%</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                <div className="skill-box">
                  <h3>JavaScript</h3>
                  <p>Neque porro quisquam est qui dolorem ipsum quia dolor.</p>
                  <span className="text-end d-block">80%</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                <div className="skill-box">
                  <h3>Photoshop</h3>
                  <p>Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>
                  <span className="text-end d-block">55%</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>
              </div>

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
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row">
              <div className="col-12">
                <div className="resume-wrapper">
                  <div className="resume-block" data-aos="fade-up">
                    <h2>Work Experience</h2>
                    <p className="lead">Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>

                    <div className="timeline">
                      <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                        <div className="timeline-left">
                          <h4 className="company">Etiam Industries</h4>
                          <span className="period">Jun, 2023 - Current</span>
                        </div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-right">
                          <h3 className="position">Project Lead</h3>
                          <p className="description">Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                        </div>
                      </div>

                      <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                        <div className="timeline-left">
                          <h4 className="company">Nullam Corp</h4>
                          <span className="period">2019 - 2023</span>
                        </div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-right">
                          <h3 className="position">Senior graphic design specialist</h3>
                          <p className="description">
                            Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.
                          </p>
                          <ul>
                            <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                            <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                            <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                            <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                          </ul>
                          <p></p>
                        </div>
                      </div>

                      <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
                        <div className="timeline-left">
                          <h4 className="company">Stepping Stone Ltd.</h4>
                          <span className="period">2015-2019</span>
                        </div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-right">
                          <h3 className="position">Graphic design specialist</h3>
                          <p className="description">Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.</p>
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
