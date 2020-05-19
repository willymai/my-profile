import React, { Component } from "react";
import classnames from "classnames";


const EXP = [
  {
    date: "Aug 2015 - Apr 2016",
    job: "Fresher Frontend Developer",
    company: "Inspilab, HCMC",
    text: "First job as fresher and choose Frontend to be my career path."
  },
  {
    date: "Apr 2016 - Oct 2016",
    job: "Frontend Developer",
    company: "Solazu Co., Ltd, HCMC",
    text: `
      This place is important in my career path. I joined a Frontend Team and my job is build the templates that receive from designer.
      At that time, everything is new to me and I know I have to spend much time to catch up it.
      Although the working time is not long, but I learned alot from teamates, skills about html/css are improved much`
  },
  {
    date: "Oct 2016 - Nov 2017",
    job: "Frontend Developer",
    company: "Vinh Thanh International Investment Co., Ltd",
    text: `
      A startup company with product relative to ecommerce and map.
      Owner will join the system, create their location and their shop will be mark in the map.
      Users can traverse the map to figure out nearby shop and relative goods.
      First time I learn ReactJS and Im so interest on it. It's not a boring job just play around HTML/CSS, I have to build UI and integrate with the Api. 
    `
  },
  {
    date: "Dec 2017 - Present",
    job: "Frontend Developer",
    company: "Mstage Co., Ltd",
    text: `
      
    `
  }
]
export default class Resume extends Component {
  render() {
    const { active } = this.props;
    return (
      <section
        id="about"
        className={classnames("page-hidden", { page: active })}
      >
        <div className="wrap-content">
          <div className="page__main-block">
            <div className="page__title">
              <i className="fas fa-address-card" />
              <h2>Resume</h2>
            </div>
          </div>

          <div className="page__block">
            <div className="page__title">
              <i className="fas fa-graduation-cap" />
              <h3>Education</h3>
            </div>
            <div className="page__block__content">
              <div className="timeline-list">
                <div className="timeline">
                  <span className="timeline__date">2010 - 2015</span>
                  <h4 className="timeline__study">
                    Bach Khoa University
                  </h4>
                  <p className="timeline__text">
                    Nunc euismod odio nec turpis aliquet dapibus. Nulla maximus
                    diam leo, a feugiat neque laoreet ut. Aenean bibendum tellus
                    id eros hendrerit, a rhoncus augue eleifend.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="page__block">
            <div className="page__title">
              <i className="fas fa-briefcase" />
              <h3>EXPERIENCE</h3>
            </div>
            <div className="page__block__content">
              <div className="timeline-list">
                {EXP.map((timeline, index) => (
                  <div className="timeline" key={index}>
                    <span className="timeline__date">{timeline.date}</span>
                    <h4 className="timeline__study">
                      {timeline.company}
                    </h4>
                    {/* <h5 className="timeline__place">{timeline.company}</h5> */}
                    <p className="timeline__text">
                      {timeline.text}
                    </p>
                  </div>
                ))}
                {/* <div className="timeline">
                  <span className="timeline__date">Apr 2016 - Oct 2016</span>
                  <h4 className="timeline__study">
                    FrontEnd Developer
                  </h4>
                  <h5 className="timeline__place">Solazu Co., Ltd, HCMC</h5>
                  <p className="timeline__text">
                    Nunc euismod odio nec turpis aliquet dapibus. Nulla maximus
                    diam leo, a feugiat neque laoreet ut. Aenean bibendum tellus
                    id eros hendrerit, a rhoncus augue eleifend.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
