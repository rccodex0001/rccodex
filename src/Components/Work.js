import React from 'react'
import './Work.css'

const Work = () => {
  return (
    <div><div id="portfolio" className="text-center">
    <div className="container">
      <div className="section-title center">
        <h2>My WORKS</h2>
        <div className="line"></div>
      </div>
      <div className="gap" />
      <section id="works" className="container">
        <ul className="portfolio-items col-4">
          <li className="portfolio-item apps">
            <div className="item-inner">
              <img
                src="https://dummyimage.com/600x400/1a1b1c/e4e5f0.png&text=Work"
                alt=""
              />
              <h5>Lorem ipsum dolor sit amet</h5>
              <div className="layer">
                <a
                  className="preview view"
                  href="https://dummyimage.com/600x400/1a1b1c/e4e5f0.png&text=Work"
                >
                  <i className="fa fa-eye" />
                </a>
              </div>
            </div>
          </li>
          {/*/.portfolio-item*/}
          <li className="portfolio-item logo apps">
            <div className="item-inner">
              <img
                src="https://dummyimage.com/600x400/1a1b1c/e4e5f0.png&text=Work"
                alt=""
              />
              <h5>Lorem ipsum dolor sit amet</h5>
              <div className="layer">
                <a
                  className="preview view"
                  href="https://dummyimage.com/600x400/1a1b1c/e4e5f0.png&text=Work"
                >
                  <i className="fa fa-eye" />
                </a>
              </div>
            </div>
          </li>
          {/*/.portfolio-item*/}
          <li className="portfolio-item logo web">
            <div className="item-inner">
              <img
                src="https://dummyimage.com/600x400/1a1b1c/e4e5f0.png&text=Work"
                alt=""
              />
              <h5>Lorem ipsum dolor sit amet</h5>
              <div className="layer">
                <a
                  className="preview view"
                  href="https://dummyimage.com/600x400/1a1b1c/e4e5f0.png&text=Work"
                >
                  <i className="fa fa-eye" />
                </a>
              </div>
            </div>
          </li>
          {/*/.portfolio-item*/}
          <li className="portfolio-item logo web apps">
            <div className="item-inner">
              <img
                src="https://dummyimage.com/600x400/1a1b1c/e4e5f0.png&text=Work"
                alt=""
              />
              <h5>Lorem ipsum dolor sit amet</h5>
              <div className="layer">
                <a
                  className="preview view"
                  href="https://dummyimage.com/600x400/1a1b1c/e4e5f0.png&text=Work"
                >
                  <i className="fa fa-eye" />
                </a>
              </div>
            </div>
          </li>
          {/*/.portfolio-item*/}
          <li className="portfolio-item apps web">
            <div className="item-inner">
              <img
                src="https://dummyimage.com/600x400/1a1b1c/e4e5f0.png&text=Work"
                alt=""
              />
              <h5>Lorem ipsum dolor sit amet</h5>
              <div className="layer">
                <a
                  className="preview view"
                  href="https://dummyimage.com/600x400/1a1b1c/e4e5f0.png&text=Work"
                >
                  <i className="fa fa-eye" />
                </a>
              </div>
            </div>
          </li>
          {/*/.portfolio-item*/}
          <li className="portfolio-item apps">
            <div className="item-inner">
              <img
                src="https://dummyimage.com/600x400/1a1b1c/e4e5f0.png&text=Work"
                alt=""
              />
              <h5>Lorem ipsum dolor sit amet</h5>
              <div className="layer">
                <a
                  className="preview view"
                  href="https://dummyimage.com/600x400/1a1b1c/e4e5f0.png&text=Work"
                >
                  <i className="fa fa-eye" />
                </a>
              </div>
            </div>
          </li>
          {/*/.portfolio-item*/}
          <li className="portfolio-item web">
            <div className="item-inner">
              <img
                src="https://dummyimage.com/600x400/1a1b1c/e4e5f0.png&text=Work"
                alt=""
              />
              <h5>Lorem ipsum dolor sit amet</h5>
              <div className="layer">
                <a
                  className="preview view"
                  href="https://dummyimage.com/600x400/1a1b1c/e4e5f0.png&text=Work"
                >
                  <i className="fa fa-eye" />
                </a>
              </div>
            </div>
          </li>
          {/*/.portfolio-item*/}
          <li className="portfolio-item logo">
            <div className="item-inner">
              <img
                src="https://dummyimage.com/600x400/1a1b1c/e4e5f0.png&text=Work"
                alt=""
              />
              <h5>Lorem ipsum dolor sit amet</h5>
              <div className="layer">
                <a
                  className="preview view"
                  href="https://dummyimage.com/600x400/1a1b1c/e4e5f0.png&text=Work"
                >
                  <i className="fa fa-eye" />
                </a>
              </div>
            </div>
          </li>
          {/*/.portfolio-item*/}
        </ul>
      </section>
      {/*/#portfolio*/}
    </div>
  </div>
  <div id="contact" className="text-center">
    <div className="container">
      <div className="section-title center">
        <h2>Get in Touch</h2>
        <div className="line"></div>
      </div>
      <div className="gap" />
      <div className="address">
        Want to get in touch with me? just feel free to drop me a line anytime.{" "}
      </div>
      <div id="contact-form">
        <div id="message" />
        <form
          method="post"
          action="php/contact.php"
          name="contactform"
          id="contactform"
        >
          <input
            name="name"
            type="text"
            id="name"
            className="inputForm2"
            placeholder="Name"
          />
          <input name="email" type="text" id="email" placeholder="Email" />
          <textarea
            name="comments"
            id="comments"
            placeholder="Message"
            defaultValue={""}
          />
          <input
            type="submit"
            className="send_message transition"
            id="submit"
            defaultValue="Send Message"
          />
        </form>
      </div>
    </div>
  </div></div>
  )
}

export default Work