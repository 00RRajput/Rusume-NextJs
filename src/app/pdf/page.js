"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePDF } from 'react-to-pdf';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import SkillCard from "../components/skill-card";
import ExperienceCard from "../components/exp-card";
import EducationCard from "../components/edu-card";

export default function PDF() {
  const printRef = useRef();
  const [skills, setSkills] = useState([]);
  const [ecperience, setEcperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  // const handleViewPdf = async () => {
  //   const element = printRef.current;
  //   const canvas = await html2canvas(element);
  //   const data = canvas.toDataURL("image/png");

  //   const pdf = new jsPDF();
  //   const imgProperties = pdf.getImageProperties(data);
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

  //   pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);

  //   // Create a blob URL for the PDF
  //   const blob = pdf.output("blob");
  //   const url = URL.createObjectURL(blob);

  //   // Create a temporary anchor element to trigger the download
  //   const anchor = document.createElement("a");
  //   anchor.href = url;
  //   anchor.target = "_blank";
  //   // anchor.download = ''; // Set to empty string to prompt the browser to open in new tab
  //   anchor.click();

  //   // Clean up the blob URL
  //   // URL.revokeObjectURL(url);
  // };

  useEffect(() => {
    setSkills([
      {
        title: "SKILLS",
        data: [
          "Html",
          "css",
          "PHP",
          "JavaScript",
          "Sql",
          "Mongoose",
          "NodeJS",
          "JQuery",
          "API",
          "Analytical Skill",
        ],
      },
      {
        title: "FRAMEWORK SKILLS",
        data: [
          "VueJs",
          "Laravel",
          "ReactJs",
          "ExpressJs",
          "NextJs"
        ],
      },
    ]);

    setEcperience([
      ...[
        {
          company: "Summerhill Technologies Pvt Ltd. (Shimla)",
          duration: "Software Developer » Oct,2021 - Present",
          additional: ["Coding and Development", "Problem-Solving"],
        },
        {
          company: "Eduuis Techo Solution Pvt. Ltd",
          duration: "PHP Developer Executive » July 2021 - Oct 2021",
          additional: ["Intern-ship (No certification)"],
        },
      ]
    ]);

    setEducation([
      {
        title: "EDUCATION",
        company: "Senior Secondry (H.P. Board)",
        duration: "Govt sen. sec sch » 2014-2015",
      },
      {
        title: "CERTIFICATIONS",
        company: "Advance Diploma in Computer Application",
        duration: "vedanta foundation » Dec 2015",
      },
    ]);
  }, []);

  // useEffect(() => {
  //   handleViewPdf();
  // }, [skills, ecperience, education]);
console.log('===>', skills, ecperience);
  return (
    <div ref={targetRef} className="pdf">
      <div className="main-pdf">
        <div className="n-card">
          <div className="pdf-header text-center">
            <h1 className="primary">RESUME</h1>
          </div>
          <div className="text-right">
          <h6>Place:...................... <span className="text-underline ml-2">Date: {currentDate.toDateString()}</span></h6>
          </div>
        </div>
        <div className="n-card title">
          <div className="title-left">
            <h2 className="name">Sanjay Kumar</h2>
            <h6 className="name-des">SOFTWARE DEVELOPER</h6>
          </div>
          <div className="title-right">
            <div className="contact">
              <div className="contact-list d-flex">
                <a href="tel:+918219393501" className="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone-forward-fill primary"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708"
                  />
                </svg>
                <span className="ml-2">8219393501</span></a>
              </div>
              <div className="contact-list d-flex">
                {" "}
                <a href="mailto:r.rajput.dev.01@gmail.com" className="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope-at-fill primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                </svg>
                 <span className="ml-2">r.rajput.dev.01@gmail.com</span></a>
              </div>
              <div className="contact-list d-flex">
              <a href="https://www.google.com/maps?q=31.708401,76.932198" target="_blank" className="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                  <span className="ml-2">Mandi, Himachal Pradesh</span> </a>
              </div>
              <div className="contact-list">
              <a href="https://github.com/00RRajput" target="_blank" className="d-flex"><svg xmlns="http://www.w3.org/2000/svg" className="primary" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"></path>
              </svg>
              <span className="ml-2">GitHub</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="n-card">
          <div className="card-header">
            <h2>SUMMERY</h2>
          </div>
          <div>
            <p>
            Results-driven software developer with 2+ years of practical experience creating and optimizing software solutions. Proficient in diverse
                programming languages and frameworks, with a keen eye for detail and a passion for crafting high-performance code. Committed to
                    continuous learning and eager to contribute to innovative projects.
            </p>
          </div>
        </div>

        {skills.length &&
          skills.map((value, ind) => (
            <SkillCard key={ind} title={value.title} data={value.data} />
          ))}

        <div className="n-card">
          <div className="card-header">
            <h2>WORK EXPERIENCE</h2>
          </div>
          {ecperience.map((val, ind) => (
            <ExperienceCard key={ind} data={val} />
          ))}
        </div>
        {education.length &&
          education.map((value, ind) => (
            <EducationCard key={ind} data={value} />
          ))}

          <div className="n-card">
        <div className="card-header">
          <h2>LANGUAGES</h2>
        </div>
        <div className="lng-table">
          <table width="50%">
            <tr>
              <th></th>
              <th className="text-center">Proficiency Level</th>
            </tr>
            <tr>
              <td>Hindi</td>
              <td>Written: Fluent, Speaking: Fluent</td>
            </tr>
            <tr>
              <td>English</td>
              <td>Written: Fluent, Speaking: Basic</td>
            </tr>
          </table>
        </div>
        
      </div>
      <div className="n-card">
        <div className="card-header">
          <h2>Summery</h2>
        </div>
        <div className="lng-table">
          <table width="100%">
            <tr>
              <td>Father`s Name</td>
              <td> {'=>'} </td>
              <td>Shree. Mohan Lal</td>
              <td>Mother`s Name</td>
              <td> {'=>'} </td>
              <td>Smt. Maya Devi</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td> {'=>'} </td>
              <td>26 Feb 1998</td>
              <td>Nationality</td>
              <td> {'=>'} </td>
              <td>Indian</td>
            </tr>
            <tr>
              <td>Marital Status</td>
              <td> {'=>'} </td>
              <td>Single</td>
              <td>Interest/Hobbies</td>
              <td> {'=>'} </td>
              <td>BGMI, Travelling & Music</td>
            </tr>
          </table>
        </div>
        
      </div>
      <div className="n-card">
        <div className="card-header">
        <h4>I hereby declare that the above written particulars are ture to the best of my knowlwdge and belif.</h4>
      </div>
      </div>
      </div>
      <button type="button" onClick={() => toPDF()}>
        Button
      </button>
    </div>
  );
}
