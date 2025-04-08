"use client";

import Image from "next/image";
import Link from "next/link";
import DownloadApp from "./components/download-app";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">John Doe</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#portfolio">Portfolio</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="text-center py-20 bg-blue-500 text-white">
        <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
        <p className="mt-4">Full-Stack Developer | JavaScript | React | Next.js</p>
      </section>

      {/* Social Links */}
      <section className="py-10 text-center">
        <h3 className="text-2xl font-semibold">Connect with me</h3>
        <div className="mt-4 flex justify-center space-x-4">
          <Link href="#"><Image src="/linkedin.svg" width={40} height={40} alt="LinkedIn" /></Link>
          <Link href="#"><Image src="/github.svg" width={40} height={40} alt="GitHub" /></Link>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-200">
        <h3 className="text-3xl font-bold text-center">Portfolio</h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Project 1</h4>
            <p className="text-gray-600">Description of the project.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Project 2</h4>
            <p className="text-gray-600">Description of the project.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Project 3</h4>
            <p className="text-gray-600">Description of the project.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}
