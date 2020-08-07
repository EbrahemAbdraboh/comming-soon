import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ReactSVG } from "react-svg";
import Countdown from "react-countdown";
import Renderer from "../components/countdown/Renderer";
import SubscribeEmail from "../components/newsletter/SubscribeEmail";

const ComingSoon = () => {
  return (
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div
        className="cs-14-page-wrapper h-100 bg-img d-flex flex-column justify-content-between"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL +
            "/assets/img/backgrounds/coming-soon-14.jpg"})`
        }}
      >
        {/*====================  header ====================*/}
        <header className="cs-14-header space-pt--30 space-pb--30">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* logo */}
                <div className="cs-14-logo">
                  <Link to={process.env.PUBLIC_URL + "/"}>
                    <h2 className="cs-14-content__title">
                      Smart Gate Soft
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*====================  End of header  ====================*/}
        {/*====================  content ====================*/}
        <div className="cs-14-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h3 className="cs-14-content__subtitle space-mb--10">
                  Stay tuned for something amazing
                </h3>
                <h2 className="cs-14-content__title">
                  We are coming <br /> very soon
                </h2>
                {/* countdown */}
                <div className="cs-14-countdown space-mt--50">
                  <Countdown
                    date={new Date("April 05, 2083 12:12:00")}
                    renderer={Renderer}
                  />
                </div>
                <div className="cs-14-subscription-wrapper space-mt--50">
                  {/* subscribe email */}
                  <SubscribeEmail mailchimpUrl="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of content  ====================*/}
        {/*====================  footer ====================*/}
        <footer className="cs-14-footer space-pt--25 space-pb--25">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                {/* social icons */}
                <ul className="cs-14-social-icons d-flex align-items-center justify-content-center justify-content-md-start">
                  <li>
                    <a
                      href="http://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/icons/facebook-01.svg"
                        }
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/icons/twitter-01.svg"
                        }
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/icons/instagram-01.svg"
                        }
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/icons/linkedin-01.svg"
                        }
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG
                        src={
                          process.env.PUBLIC_URL +
                          '/"assets/img/icons/youtube-01.svg'
                        }
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                {/* copyright */}
                <div className="cs-14-copyright text-right">
                  &copy; {new Date().getFullYear() + " "}
                  <a
                    href="https://github.com/EbrahemAbdraboh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ebrahem Abdraboh
                  </a>
                  , all rights reserved
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*====================  End of footer  ====================*/}
      </div>
    </Fragment>
  );
};

export default ComingSoon;
