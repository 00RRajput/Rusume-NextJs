import Image from "next/image";

export default function About({ data }) {
    return (
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
                    {/* <Image width={100}
                        height={100}
                        // src="/assets/img/misc/signature-1.webp"
                        src="/stat-img/signature.png"
                        alt="" className="img-fluid" /> */}
                </div>
                <div className="signature-info">
                    <h4>Sanjay</h4>
                    <p>Software Engineer</p>
                </div>
            </div>
        </div>
    );
}
