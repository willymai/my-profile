import React, { Component } from "react";
import classnames from "classnames";
import PageFooter from "./PageFooter";

const SKILLS = [
  {
    name: "HTML",
    percent: "97%"
  },
  {
    name: "CSS / CSS3",
    percent: "97%"
  },
  {
    name: "SCSS / LESS",
    percent: "97%"
  },
  {
    name: "Javascript",
    percent: "90%"
  },
  {
    name: "ReactJS",
    percent: "80%"
  },
  {
    name: "React Native",
    percent: "40%"
  },
  // {
  //   name: "Flutter",
  //   percent: "25%"
  // }
  // {
  //   name: "GraphQL",
  //   percent: "59%"
  // }
]

export default class AboutMe extends Component {
  render() {
    const { active } = this.props;
    return (
      <section id="about" className={classnames("page-hidden", { page: active })}>
        <div className="wrap-content">
          <div className="page__main-block">
            <div className="page__title">
              <i className="fas fa-user-edit" />
              <h2>About Me</h2>
            </div>
            <div className="page__main-block__content">
              <h3>My name is Mai Quoc Viet. I'm a Frontend Developer</h3>
              <p>
                I'm a positive and friendly person. Also, I love to set goals
                and achieve them. My important qualities: self-motivated,
                ability overcome difficulties and the ability to learn. I have
                few years experience in frontend developer, creating well
                written, structured HTML, CSS, Javascript and ReactJS. Currently
                i’m taking my time to learn Flutter
              </p>
            </div>
          </div>

          <div className="page__block">
            <div className="page__title">
              <i className="fas fa-user-ninja" />
              <h3>Skills</h3>
            </div>
            <div className="page__block__content">
              <div className="skills">
                {SKILLS.map(skill => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill__name"><span>{skill.name}</span></div>
                    <div className="skillbar">
                      <div className="skillbar-bar" style={{width: skill.percent}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="page__block">
            <div className="page__title">
              <i className="fas fa-user-ninja" />
              <h3>HOBBIES &amp; INTEREST</h3>
            </div>
            <div className="page__block__content">
              <div className="hobbies">
                <div className="hobbie">
                  <i className="fas fa-rss-square" />
                  <span>News</span>
                </div>

                <div className="hobbie">
                  <i className="fas fa-terminal" />
                  <span>Coding</span>
                </div>

                <div className="hobbie">
                  <i className="fas fa-photo-video" />
                  <span>Movie</span>
                </div>

                <div className="hobbie">
                  <i className="fas fa-compact-disc" />
                  <span>Music</span>
                </div>

                <div className="hobbie">
                  <i className="fas fa-gamepad" />
                  <span>Video Game</span>
                </div>

                <div className="hobbie">
                  <i className="fas fa-dice-d20" />
                  <span>Board Game</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        <PageFooter />
      </section>
    );
  }
}
