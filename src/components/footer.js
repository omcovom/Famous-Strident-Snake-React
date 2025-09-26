import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
        @keyframes heartbeat {0%,100% {transform: scale(1);}
50% {transform: scale(1.1);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<script defer data-name="footer-newsletter">
(function(){
  // Newsletter subscription functionality
  document
    .getElementById("newsletterForm")
    .addEventListener("submit", function (e) {
      e.preventDefault()

      const emailInput = this.querySelector(".footer-newsletter-input")
      const submitButton = this.querySelector(".footer-newsletter-button")
      const email = emailInput.value.trim()

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/

      if (!emailRegex.test(email)) {
        // Visual feedback for invalid email
        emailInput.style.borderColor = "var(--color-accent)"
        emailInput.focus()

        setTimeout(() => {
          emailInput.style.borderColor = ""
        }, 2000)

        return
      }

      // Success state simulation
      const originalButtonText = submitButton.textContent
      submitButton.textContent = "Subscribing..."
      submitButton.disabled = true

      // Simulate API call
      setTimeout(() => {
        submitButton.textContent = "Subscribed!"
        emailInput.value = ""
        emailInput.placeholder = "Thank you for subscribing!"

        setTimeout(() => {
          submitButton.textContent = originalButtonText
          submitButton.disabled = false
          emailInput.placeholder = "Enter your email address"
        }, 3000)
      }, 1500)
    })

  // Smooth social link interactions
  const socialLinks = document.querySelectorAll(".footer-social-link")
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.05)"
    })

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(-2px) scale(1)"
    })
  })

  // Footer link hover effects
  const footerLinks = document.querySelectorAll(".footer-link")
  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(4px)"
    })

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)"
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <footer id="footer" className="footer-main">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-company footer-section">
              <div className="footer-logo">
                <h3 className="footer-brand-title">Vrindavan Digital</h3>
                <p className="footer-tagline">
                  {' '}
                  Modern Web Solutions Inspired by Divine Wisdom
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <p className="footer-description">
                {' '}
                Creating responsive, scalable, and spiritually-inspired digital
                experiences. We specialize in developing modern websites that
                honor tradition while embracing innovation.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer-social">
                <a href="#">
                  <div
                    aria-label="Follow us on Facebook"
                    className="footer-social-link"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Subscribe to our YouTube channel"
                    className="footer-social-link"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                        <path d="m10 15l5-3l-5-3z"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Follow us on Instagram"
                    className="footer-social-link"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                          width="20"
                          height="20"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Follow us on Twitter"
                    className="footer-social-link"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-services footer-section">
              <h4 className="footer-section-title">Our Services</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Website Development</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>CMS Solutions</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>E-commerce Platforms</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Mobile Applications</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>SEO Optimization</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Digital Strategy</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-quick-links footer-section">
              <h4 className="footer-section-title">Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="/">
                    <div className="footer-link">
                      <span>Homepage</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/events">
                    <div className="footer-link">
                      <span>Events &amp; Calendar</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/blog">
                    <div className="footer-link">
                      <span>Blog / Articles / Discourses</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>About Us</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Portfolio</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Contact</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section footer-contact">
              <h4 className="footer-section-title">Get In Touch</h4>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="footer-contact-details">
                    <p className="footer-contact-text">
                      Vrindavan, Mathura District
                    </p>
                    <p className="footer-contact-text">Uttar Pradesh, India</p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                  </div>
                  <div className="footer-contact-details">
                    <a href="mailto:hello@vrindavandigital.com?subject=">
                      <div className="footer-contact-link">
                        <span>
                          {' '}
                          hello@vrindavandigital.com
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="footer-contact-details">
                    <a href="tel:+919876543210">
                      <div className="footer-contact-link">
                        <span>
                          {' '}
                          +91 98765 43210
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-newsletter">
            <div className="footer-newsletter-content">
              <h4 className="footer-newsletter-title">Stay Connected</h4>
              <p className="footer-newsletter-description">
                {' '}
                Subscribe to our newsletter for updates on digital trends and
                spiritual wisdom in web development.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <form id="newsletterForm" className="footer-newsletter-form">
              <div className="footer-newsletter-input-group">
                <input
                  type="email"
                  required="true"
                  aria-label="Email address for newsletter subscription"
                  placeholder="Enter your email address"
                  className="footer-newsletter-input"
                />
                <button
                  type="submit"
                  className="footer-newsletter-button btn btn-primary"
                >
                  {' '}
                  Subscribe
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </div>
            </form>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="footer-copyright">
                <p className="footer-copyright-text">
                  <span>
                    {' '}
                    © 2025 Vrindavan Digital. All rights reserved.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="footer-footer-made-with">
                    <span>
                      {' '}
                      Made with
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                      className="footer-footer-heart-icon"
                    >
                      <path
                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      in Vrindavan
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </p>
              </div>
              <div className="footer-legal">
                <ul className="footer-legal-links">
                  <li>
                    <a href="#">
                      <div className="footer-legal-link">
                        <span>Privacy Policy</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-legal-link">
                        <span>Terms of Service</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-legal-link">
                        <span>Cookie Policy</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-legal-link">
                        <span>Accessibility</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
