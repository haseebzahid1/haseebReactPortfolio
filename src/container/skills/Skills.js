import React from 'react'
import '../skills/Skills.scss'
import { workSkills } from '../../portfolio'

const Skills = () => {
    return (
        <section className="skills border-section-top" id="Coding_skills">
            <div className="container">
                <div className="container-fluid">
                    <div className="section">
                        <div className="section-img">
                            <img src="./assets/img/education.svg" alt="" />
                            <div className="section-center-icon">
                                <i className={workSkills.imgIcon}></i>
                            </div>
                        </div>
                        <h1 className="section-h1">{workSkills.title}</h1>
                        <h4 className="section-fixed">{workSkills.title}</h4>
                        <p className="section-p">{workSkills.desc}</p>
                    </div>

                    <div className="skills__skills-row">
                        {workSkills.skills.map((skill) => {
                            return <div className="skills__skills-col-4">
                                
                                <div className={skill.className}>
                                    <div className="inner">

                                        <svg className="" viewBox="-12 -12 126 126">
                                            <path className="path" d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" fill-opacity="0"></path>
                                            <path className="active" d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" fill-opacity="0"></path>
                                        </svg>

                                        <div className="text">{skill.percentage}</div>

                                    </div>
                                </div>
                                <span className="skills__circle-subline-title">{skill.subject}</span>

                            </div>
                        })}

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Skills
