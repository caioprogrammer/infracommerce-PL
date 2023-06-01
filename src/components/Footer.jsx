import { useEffect } from "react"
import LocationOptions from "./LocationOptions"

function Footer() {
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".mobile-dropdown");
    dropdowns.forEach((drop) => {
      drop.addEventListener("click", () => {
        drop.classList.toggle("active")
      })
    })
  })

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="links">
          <div className="links-client">
            <h3>
              Client Care
            </h3>
            <ul>
              <li><a className="hoverEffect" href="#">Contact Us</a></li>
              <li><a className="hoverEffect" href="#">Track Your Order</a></li>
              <li><a className="hoverEffect" href="#">Product Care & Repair</a></li>
              <li><a className="hoverEffect" href="#">Book an Appointment</a></li>
              <li><a className="hoverEffect" href="#">Frequently Asked Questions </a></li>
              <li><a className="hoverEffect" href="#">Shipping & Returns</a></li>
              <li><a className="hoverEffect" href="#">Tiffany Select Financing</a></li>
              <li><a className="hoverEffect" href="#">Gift Cards</a></li>
              <li><a className="hoverEffect" href="#">Website Accessibility</a></li>
            </ul>
          </div>
          <div className="links-company">
            <h3 className="mobile-dropdown">Our Company <i className="fa-solid fa-chevron-down only-mobile"></i>  </h3>
            <ul>
              <li><a className="hoverEffect" href="#">World of Tiffany</a></li>
              <li><a className="hoverEffect" href="#">Sustainability</a></li>
              <li><a className="hoverEffect" href="#">California Supply Chains Act</a></li>
              <li><a className="hoverEffect" href="#">California Privacy</a></li>
              <li><a className="hoverEffect" href="#">Tiffany Careers</a></li>
              <li><a className="hoverEffect" href="#">Website Policies</a></li>
              <li><a className="hoverEffect" href="#">Transparency in Coverage</a></li>
              <li><a className="hoverEffect" href="#">Do Not Sell or Share My Personal Information</a></li>
              <li><a className="hoverEffect" href="#">Opt-Out of Targeted Advertising</a></li>
            </ul>
          </div>
          <div className="links-relateds">
            <h3 className="mobile-dropdown">Related Tiffany Sites <i className="fa-solid fa-chevron-down only-mobile"></i></h3>
            <ul>
              <li><a className="hoverEffect" href="#">Wedding & Gift Registry</a></li>
              <li><a className="hoverEffect" href="#">Business Accounts</a></li>
              <li><a className="hoverEffect" href="#">Tiffany for the Press</a></li>
              <li><a className="hoverEffect" href="#">The Tiffany & Co. Foundation</a></li>
              <li><a className="hoverEffect" href="#">Tiffany Alertline</a></li>
              <li><a className="hoverEffect" href="#">Site Index</a></li>
            </ul>
          </div>
        </div>
        <div className="newsletter">
          <div className="newsletter__form">
            <h3>Latest from Tiffany</h3>
            <form>
              <p className="wrapper-desc">
                Be the first to know about exciting new designs, special events, store openings and much more.
              </p>
              <div className="wrapper-input">
                <input name="UserEmail" id="UserEmail" type="email" autoComplete="email" />
                <label htmlFor="UserEmail">Email</label>
              </div>
              <button className="wrapper-button" type="submit">
                Sign up
              </button>
            </form>
          </div>
          <div className="newsletter-socials">
            <div className="social-icons">
              <a href="https://instagram.com/tiffanyandco/" target="_blank">
                <span className="cta-content hover-cta">
                  <svg width="32" height="32" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 3.5h1M4.5.5h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm3 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" stroke="#000"/></svg>
                </span>
              </a>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/Tiffany/" target="_blank" tabIndex="0">
                <span className="cta-content hover-cta">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1200 1200" xmlSpace="preserve"><path d="M0 0v1200h1200V0H0zm863.232 156.592c8.715-.185 17.791.098 27.173.732 34.476.047 70.483 3.155 106.201 6.299l-3.882 142.09h-95.947c-44.988-.996-61.235 16.473-62.695 67.236V484.57h162.524l-6.445 152.197H834.082v423.706H675.513V636.768H565.43V484.57h110.083V353.906c0-94.209 39.829-154.174 118.286-184.57 20.149-7.928 43.288-12.189 69.433-12.744z"/></svg>
                </span>
              </a>
            </div>
            <div className="social-icons">
              <a href="https://pinterest.com/TiffanyAndCo/" target="_blank" >
                <span className="cta-content hover-cta">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1200 1200" xmlSpace="preserve"><path d="M600 0c356.454 6.666 597.673 280.025 600 600-6.375 340.923-280.025 597.673-600 600-59.191-.229-116.981-9.442-169.763-24.622 11.23-18.143 22.462-38.229 33.692-60.259 23.688-48.151 34.503-99.721 46.652-149.028 5.184-21.166 12.527-49.028 22.03-83.585 10.366 19.87 29.157 37.148 56.372 51.835 71.035 34.562 159.039 23.145 222.246-9.071 88.677-50.367 140.639-128.602 168.467-216.413 53.582-203.643-15.51-399.439-200.217-478.187-222.716-67.084-471.27 16.639-557.883 215.768-37.816 133.072-35.578 303.927 95.896 359.61 6.915 2.592 13.178 2.592 18.79 0 12.34-7.05 26.651-68.155 23.975-80.993-.864-3.888-3.888-9.288-9.071-16.198-72.663-98.369-28.379-244.763 39.524-318.144 115.467-99.179 295.177-115.283 401.08-20.734 93.934 109.584 72.6 280.13 12.311 388.77-33.312 53.126-78 93.273-138.013 93.952-63.17-1.398-110.815-54.854-94.601-115.334 13.779-70.979 52.015-146.255 53.132-212.527-3.053-55.122-30.656-90.083-81.643-90.713-81.388 10.263-114.242 86.357-115.335 155.508 2.603 33.23 4.618 67.054 19.438 94.602-17.278 69.979-30.67 126.35-40.173 169.114-14.567 75.873-43.132 155.229-47.3 228.726-1.296 24.189-1.513 46.651-.648 67.387C136.638 1044.027 1.314 838.081 0 600 6.476 253.707 280.025 2.327 600 0z"/></svg>
                </span>
              </a>
            </div>
            <div className="social-icons">
              <a href="https://twitter.com/TiffanyAndCo/" target="_blank" >
                <span className="cta-content hover-cta">
                  <svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3.784a5.63 5.63 0 0 1-.65.803 6.058 6.058 0 0 1-.786.68 5.442 5.442 0 0 1 .014.377c0 .574-.061 1.141-.184 1.702a8.467 8.467 0 0 1-.534 1.627 8.444 8.444 0 0 1-1.264 2.04 7.768 7.768 0 0 1-1.72 1.521 7.835 7.835 0 0 1-2.095.95 8.524 8.524 0 0 1-2.379.329 8.178 8.178 0 0 1-2.293-.325A7.921 7.921 0 0 1 1 12.52a5.762 5.762 0 0 0 4.252-1.19 2.842 2.842 0 0 1-2.273-1.19 2.878 2.878 0 0 1-.407-.8c.091.014.181.026.27.035a2.797 2.797 0 0 0 1.022-.089 2.808 2.808 0 0 1-.926-.362 2.942 2.942 0 0 1-.728-.633 2.839 2.839 0 0 1-.65-1.822v-.033c.402.227.837.348 1.306.362a2.943 2.943 0 0 1-.936-1.04 2.955 2.955 0 0 1-.253-.649 2.945 2.945 0 0 1 .007-1.453c.063-.243.161-.474.294-.693.364.451.77.856 1.216 1.213a8.215 8.215 0 0 0 3.008 1.525 7.965 7.965 0 0 0 1.695.263 2.15 2.15 0 0 1-.058-.325 3.265 3.265 0 0 1-.017-.331c0-.397.075-.77.226-1.118a2.892 2.892 0 0 1 1.528-1.528 2.79 2.79 0 0 1 1.117-.225 2.846 2.846 0 0 1 2.099.909 5.7 5.7 0 0 0 1.818-.698 2.815 2.815 0 0 1-1.258 1.586A5.704 5.704 0 0 0 15 3.785z"/></svg>
                </span>
              </a>
            </div>
            <div className="social-icons">
              <a href="https://www.youtube.com/OfficialTiffanyAndCo/" target="_blank" >
                <span className="cta-content hover-cta">
                  <svg width="32" height="32" viewBox="-2 -5 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-youtube"><path d="M15.812.017H4.145C1.855.017 0 1.852 0 4.116v5.768c0 2.264 1.856 4.1 4.145 4.1h11.667c2.29 0 4.145-1.836 4.145-4.1V4.116c0-2.264-1.856-4.1-4.145-4.1zM13.009 7.28 7.552 9.855a.219.219 0 0 1-.314-.196V4.35a.22.22 0 0 1 .318-.193l5.458 2.735a.216.216 0 0 1-.005.389z"/></svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="dropdown-label">
          Change Location: Global
          <span className="dropdown-arrow"></span>
        </div>
        <div className="footer-copyright">
          <span className="cta-content">
            © T&amp;CO. 2023
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer