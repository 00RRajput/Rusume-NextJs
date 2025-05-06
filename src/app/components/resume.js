import Image from "next/image";

export default function Resume({ data }) {
    return (
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
    );
}
