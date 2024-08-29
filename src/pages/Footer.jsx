import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-white">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-3">FITNESS SPACE</h5>
                  <p>
                    Being a 24/7 gym is one of our best amenities because we can
                    offer our members unrestricted freedom of access from sun up
                    to sun down and everywhere in between. You no longer have to
                    worry about cramming in gym time before we close!
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">About us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="https://www.linkedin.com/in/banothsuresh204/" class="text-white">
                        Linkedin
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/banothsuresh1" class="text-white">
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a href="https://bit.ly/3Mnhx2R" class="text-white">
                        Twitter
                      </a>
                    </li>
                    {/* <li>
                      <a href="#!" class="text-white">
                        Link 4
                      </a>
                    </li> */}
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Contact us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                    <a href="https://t.ly/nTYyM" class="text-white">
                        WhatsApp
                      </a>
                    </li>
                    <li>
                      <a href="tel:+919100875692" class="text-white">
                        Mobile Number
                      </a>
                    </li>
                    <li>
                      <a href="mailto:banothsuresh2215@gmail.com" class="text-white">
                        Gmail
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/_surya.__03/" class="text-white">
                      Instagram
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Careers</h5>

                  <ul class="list-unstyled mb-0">
                  <li>
                      <a href="mailto:banothsuresh2215@gmail.com" class="text-white">
                        Gmail
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/_surya.__03/" class="text-white">
                      Instagram
                      </a>
                    </li>
                    {/* <li>
                      <a href="#!" class="text-white">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                        Link 4
                      </a> */}
              
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Links</h5>

                  <ul class="list-unstyled mb-0">
                  <li>
                    <a href="https://t.ly/nTYyM" class="text-white">
                        WhatsApp
                      </a>
                    </li>
                    <li>
                      <a href="tel:+919100875692" class="text-white">
                        Mobile Number
                      </a>
                    </li>
                    {/* <li>
                      <a href="#!" class="text-white">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                        Link 4
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3">Register for free</span>
                <Link to="/customer/register" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded"
                  >
                    Sign up!
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center">
            © 2024 Copyright:
            <a class="text-color-3" href="https://www.linkedin.com/in/banothsuresh204/">
              Banoth Suresh
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
