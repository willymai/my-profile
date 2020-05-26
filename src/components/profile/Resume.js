import React, { Component } from "react";
import classnames from "classnames";
import PageFooter from "./PageFooter";

const EXP = [
  {
    date: "Aug 2015 - Apr 2016",
    job: "Fresher Frontend Developer",
    company: "Inspilab, HCMC",
    text: "First job as fresher and choose Frontend to be my career path.",
  },
  {
    date: "Apr 2016 - Oct 2016",
    job: "Frontend Developer",
    company: "Solazu Co., Ltd, HCMC",
    text: `
      This place is important in my career path. I joined a Frontend Team and my job is build the templates that receive from designer.
      At that time, everything is new to me and I know I have to spend much time to catch up it.
      Although the working time is not long, but I learned alot from teamates, skills about html/css are improved much`,
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
    `,
  },
  {
    date: "Dec 2017 - Present",
    job: "Frontend Developer",
    company: "Mstage Co., Ltd",
    text: (
      <div>
        Mstage is a Singapore startup company with young employees. This is good
        company and enviroment that I can improve myself quickly about tech skill and soft skill. My teamates
        and I build tools:
        <br />
        - Userkit: help client analyze the actions users take in your
        application and set up atures that help convert users. The platform
        support some clients such as: Discovery, Champion Leagues, Fox Movies
        Play, FoxSport, DreamWorks.
        <br />
        - Flownote: platform provides users with a distraction-free writing
        experience like Quip/Notion, manage users' task and queries like
        Trello/Asana, run data experiments like Jupyter Notebook and visualize
        beautiful charts connected directly from the database and capture data
        lineage automatically.
        <br />- Verkada Floorplans: project is a part of the Verkada, which is
        the display of a building in 3D and let you manage, track, and analyze
        it in real-time base on the data returned from the cameras.
      </div>
    ),
  },
].reverse();
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
                  <h4 className="timeline__study">Bach Khoa University</h4>
                  <p className="timeline__text">
                    Established on Jun. 29, 1957 according to the decree 213/GD
                    signed by President Ngo Dinh Diem, the university was known
                    as National Center of Technology (also known as Phu Tho
                    National Center of Technology) . The center included 4
                    partner colleges: College of Civil Engineering, College of
                    Electrical Engineering, College of Industrial Arts
                    Engineering (École Supérieure d'Ingénieurs des Arts
                    Industriels), Vietnam National Maritime Engineering. Bach
                    Khoa is a center of technology - industry and management
                    training. Up to May 2005, HCMUT has 11 faculties, 14
                    research and development (R&D) centers, 4 training centers,
                    10 functioning offices and one joint-stock company. Major:{" "}
                    <b>Computer Science</b>
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
                    <h4 className="timeline__study">{timeline.company}</h4>
                    {/* <h5 className="timeline__place">{timeline.company}</h5> */}
                    <p className="timeline__text">{timeline.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <PageFooter />
      </section>
    );
  }
}
