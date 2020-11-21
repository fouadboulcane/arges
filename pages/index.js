import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/hero'
import Section from '../components/section'
import CallForm from '../components/call-form'
import SignUp from '../components/signup'
import Slider from '../components/slider'
import Footer from '../components/footer'

import LampSVG from '../public/img/lamp.svg'
import NetworkSVG from '../public/img/network.svg'
import SecuritySVG from '../public/img/security.svg'
import DiscussionSVG from '../public/img/discussion.svg'

import { services, projects, news } from '../constants'

const Index = () => {

  return (
    <>
      <Head>
        <title>Arges</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css" />
      </Head>

      <Header />
      <Hero />

      <Section className="section has-background-white" title="Our Services">
        <div className="columns is-variable is-5">

          {services.map(service => (
            <div key={service.id} className="column">
              <div className="has-background-primary">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-2by1">
                      <img src="img/workplace.jpg" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content p-4 bg-dark-blue has-text-white">
                    <div className="content">
                      <h6 className="m-0 has-text-white"><b>Lorem Ipsum title</b></h6>
                      <p className="mt-1 is-size-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section addedClasses="has-background-grey-lighter" title="Why Choose Us">
        <div className="columns is-variable is-5">
          <div className="column">
            <div className="pros-card has-text-centered p-5">
              <div>
                <DiscussionSVG className="card-svg" />
                <h6 className="m-0 is-size-6 header6"><b>EXPERIENCED ADVISER</b></h6>
                <p className="is-size-7 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing, elit.</p>
              </div>
              <button className="button is-small is-white mt-3">READ MORE</button>
            </div>
          </div>
          <div className="column">
            <div className="pros-card has-text-centered p-5">
              <div>
                <LampSVG className="card-svg" />
                <h6 className="m-0 is-size-6 header6"><b>SMART IDEAS</b></h6>
                <p className="is-size-7 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing, elit.</p>
              </div>
              <button className="button is-small is-white mt-3">READ MORE</button>
            </div>
          </div>
          <div className="column">
            <div className="pros-card has-text-centered p-5">
              <div>
                <NetworkSVG className="card-svg" fill="tomato" />
                <h6 className="m-0 is-size-6 header6"><b>WORLDWIDE SYSTEM</b></h6>
                <p className="is-size-7 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing, elit.</p>
              </div>
              <button className="button is-small is-white mt-3">READ MORE</button>
            </div>
          </div>
          <div className="column">
            <div className="pros-card has-text-centered p-5">
              <div>
                <SecuritySVG className="card-svg" />
                <h6 className="m-0 is-size-6 header6"><b>SECURITY INFORMATION</b></h6>
                <p className="is-size-7 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing, elit.</p>
              </div>
              <button className="button is-small is-white mt-3">READ MORE</button>
            </div>
          </div>
        </div>
      </Section>

      <div className="hero is-small bg-dark-blue has-text-white is-bold pt-5 pb-5">
        <div className="hero-body">
          <div className="container is-max-widescreen">
            <div className="columns is-justify-content-space-between">
              <div className="column is-one-third">
                <h6 className="title is-size-5 has-text-left has-text-white">
                  <b>Request A Call Back</b>
                  <hr className="title-underline has-background-grey-light" />
                </h6>
                <p className="is-size-6 has-text-grey-light pr-1">Lorem ipsum dolor sit amet, consecter adipisicing elit. Ratione unde eum soluta.</p>
              </div>
              <div className="column is-two-third">
                <CallForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section className="section has-background-light" title="Featured Project">
        <div className="columns is-justify-content-space-between">
          {projects.map(project => (
            <div key={project.id} className="column">
              <div className="has-background-primary">
                <div className="card service-card">
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img src="img/busmap.jpg" alt="Placeholder image" height="100%" />
                    </figure>
                    <div className="is-overlay overlayer">
                      <div className="overlayer-header">
                        <h6>System Expansion</h6>
                      </div>
                      <div className="overlayer-content mt-4">
                        <p className="is-size-6o5">Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Molestiae velit dolor exercitationem quisquam error doloribus iusto quis cumque unde, nulla?</p>
                        <button className="button is-white is-small mt-4">READ MORE</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>


      <section className="section stat-section bg-dark-blue has-text-white">
        <div className="container is-max-widescreen has-text-centered">
          <div className="columns is-justify-content-space-between">
            <div className="column is-one-third">
              <h2 className="title m-0 is-size-2 has-text-white">450</h2>
              <h5 className="mt-1 is-size-7">PROJECTS</h5>
            </div>
            <div className="column is-one-third">
              <h2 className="title m-0 is-size-2 has-text-white">205</h2>
              <h5 className="mt-1 is-size-7">ADVISOR</h5>
            </div>
            <div className="column is-one-third">
              <h2 className="title m-0 is-size-2 has-text-white">95%</h2>
              <h5 className="mt-1 is-size-7">SATISFACTION RATE</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-background-light">
        <div className="container is-max-widescreen">
          <h6 className="title is-size-5 has-text-centered">
            <b>Latest From News</b>
            <hr className="title-underline mlr-auto" />
          </h6>
          <div className="columns is-variable is-5">
            {news.map(item => (
              <div key={item.id} className="column">
                <div>
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-2by1">
                        <img src={item.imageUrl} alt="Placeholder image" />
                      </figure>
                    </div>
                    <div className="card-content p-3">
                      <div className="content">
                        <h6 className="m-0"><b>{item.title}</b></h6>
                        <small className="is-size-7">
                          <time className="is-size-8 has-text-grey" dateTime="2016-1-1"><i className="far fa-clock"></i> Jan 01, 2016</time>
                          <span className="sm-separator">|</span>
                          <i className="far fa-user"></i> <a className="has-text-success">admin</a>
                        </small>
                        <p className="mt-1 is-size-6">{item.text}</p>
                        <button className="button is-small is-success mt-1">READ MORE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section has-background-white">
        <div className="container is-max-widescreen has-text-centered">
          <h6 className="title is-size-5">
            <b>Business Partners</b>
            <hr className="title-underline mlr-auto" />
          </h6>
          <div className="partners">
            <a><img src="img/javascript.png" width="80px" height="auto" /></a>
            <a><img src="img/angular.png" width="80px" height="auto" /></a>
            <a><img src="img/node.png" width="80px" height="auto" /></a>
            <a><img src="img/react.png" width="80px" height="auto" /></a>
            <a><img src="img/vue.png" width="80px" height="auto" /></a>
          </div>
        </div>
      </section>

      <section className="section bg-dark-blue testimonials-section">
        <div className="container is-max-widescreen">
          <h6 className="title is-size-5 has-text-white has-text-centered">
            Testimonials
				<hr className="title-underline mlr-auto has-background-white" />
          </h6>
          <Slider />

        </div>
      </section>

      <Section className="section has-background-light" title="Sign Up">
        <div className="columns">
          <div className="column is-half mlr-auto">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officia laboriosam animi dolorum .</p>
            <SignUp />
          </div>
        </div>
      </Section>

      <Footer />
    </>
  )
}

export default Index