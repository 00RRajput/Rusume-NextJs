import skills from '@/data/skills';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

export default function Skills() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <> <div className="container section-title" data-aos="fade-up">
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

        </>
    );
}
