import skills from '@/data/skills';
export default function SkillsForPdf() {

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

            <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
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
                </div>


        </>
    );
}
