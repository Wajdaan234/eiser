import { useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function Contact() {
  useEffect(() => {
  if (window.google) return; // ⬅️ important guard

  window.initMap = () => {
    new window.google.maps.Map(
      document.getElementById("map"),
      {
        center: { lat: -31.197, lng: 150.744 },
        zoom: 9,
      }
    );
  };
}, []);


  return (
    <>
      <Navbar />

      <section className="section_gap">
        <div className="container">
          <div className="mb-5 pb-4">
            <div id="map" style={{ height: "480px", width: "100%" }}></div>
          </div>

          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Get in Touch</h2>
            </div>

            <div className="col-lg-8 mb-4 mb-lg-0">
              <form className="form-contact contact_form" noValidate>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        rows="9"
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mt-lg-3">
                  <button type="submit" className="main_btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-4">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-home"></i>
                </span>
                <div className="media-body">
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>

              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-tablet"></i>
                </span>
                <div className="media-body">
                  <h3>
                    <a href="tel:454545654">00 (440) 9865 562</a>
                  </h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>

              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-email"></i>
                </span>
                <div className="media-body">
                  <h3>
                    <a href="mailto:support@colorlib.com">
                      support@colorlib.com
                    </a>
                  </h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
