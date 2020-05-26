import React, { Component } from "react";
import classnames from "classnames";
import { Row, Col } from "antd";
import Carousel, { Modal, ModalGateway } from "react-images";
import PageFooter from "./PageFooter";

const PortfolioList = [
  {
    id: "1",
    src: "https://i.imgur.com/AN7XO6X.jpg",
    title: "Verkada",
    sub: "",
    href: "",
    description: `Verkada is an IoT platform that combines plug-and-play security cameras with intelligent, cloud-based software.
    Verkada Floorplans project is a part of the Verkada, which is the display of a building in 3D and let you manage, track, and analyze it in real-time base on the data returned from the cameras`,
  },
  {
    id: "2",
    src: "https://i.imgur.com/zfkiehr.jpg",
    title: "Flownote",
    sub: "",
    href: "http://flownote.ai/",
    description: `Flownote is a platform provides users with a distraction-free writing experience like Quip/Notion, manage users' task and queries like Trello/Asana, run data experiments like Jupyter Notebook and visualize beautiful charts connected directly from the database and capture data lineage automatically.`,
  },
  {
    id: "3",
    src: "https://i.imgur.com/hVTWMCL.jpg",
    title: "Userkit",
    sub: "",
    href: "",
    description: `Userkit is the most advanced user management platform for mobile & web focused on media-related apps. It helps you analyze the actions users take in your application and set up atures that help convert users. The platform support some clients such as: Discovery, Champion Leagues, Fox Movies Play, FoxSport, DreamWorks`,
  },
  {
    id: "4",
    src: "https://i.imgur.com/kvMngfl.jpg",
    title: "Raodee",
    sub: "",
    href: "",
    description: `Raodee is a product relative to ecommerce and map.
    Owner will join the system, create their location and their shop will be mark in the map.
    Users can traverse the map to figure out nearby shop and relative goods.`,
  },
  {
    id: "5",
    src: "https://i.imgur.com/N4SjKr6.jpg",
    title: "Exploore",
    sub: "",
    href: "http://wp.swlabs.co/exploore/",
    description: `Exploore is a modern & fully responsive travel html template which has been designed for travel website, travel agency, travel blog, tour operators, hotel, cruise travel, car rental, etc…`,
  },
  {
    id: "6",
    src: "https://i.imgur.com/0yFiIQH.png",
    title: "medicplus",
    sub: "",
    href: "http://swlabs.co/medicplus/",
    description: `MedicPlus is a medical, health, clinic HTML template created especially for Health & Medical Related Projects.`
  },

  {
    id: "7",
    src: "https://i.imgur.com/BweHzls.jpg",
    title: "VFM",
    sub: "",
    href: "https://vfm.com.vn/",
    description: "VietFund Management"
  },
];

export default class Portfolio extends Component {
  state = {
    modalIsOpen: false,
    currentIndex: 0,
  };
  _handleImageClick = (index) => {
    this.setState({
      currentIndex: index,
      modalIsOpen: true,
    });
  };

  _handleModalClose = () => {
    this.setState({
      modalIsOpen: false,
    });
  };
  render() {
    const { active } = this.props;
    const { modalIsOpen, currentIndex } = this.state;
    return (
      <section
        id="about"
        className={classnames("page-hidden", { page: active })}
      >
        <div className="wrap-content">
          <div className="page__main-block">
            <div className="page__title">
              <i className="fas fa-image" />
              <h2>Portfolio</h2>
            </div>
            <div className="page__main-block__content">
              <p>Projects that I worked on it</p>
              <div className="portfolio__list">
                <Row gutter={30}>
                  {PortfolioList.map((item, index) => (
                    <Col lg={8} sm={12} xs={24} key={item.id}>
                      <div className="portfolio__item">
                        <div className="portfolio__item-inner">
                          <div>
                            <div className="portfolio__image-wrapper">
                              <div className="portfolio__image">
                                <img src={item.src} alt="" />
                              </div>
                            </div>
                            <div className="portfolio__info">
                              <div className="portfolio__info__title">
                                {item.title}
                              </div>
                              <div className="portfolio__info__sub-title"></div>
                              <div className="portfolio__info__icon">
                                <div
                                  className="icon-link"
                                  onClick={() => this._handleImageClick(index)}
                                >
                                  <i className="fas fa-search-plus" />
                                </div>
                                <a href={item.href} className="icon-link">
                                  <i className="fas fa-link" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </div>
        <PageFooter />
        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={this._handleModalClose}>
              <Carousel
                currentIndex={currentIndex}
                views={PortfolioList.map((item) => ({
                  source: item.src,
                  description: item.description,
                }))}
                components={{
                  FooterCaption: ({ currentIndex, views }) => {
                    const currentItem = views[currentIndex];
                    return <div>{currentItem.description}</div>;
                  },
                }}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </section>
    );
  }
}
