import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation, .navigation-logo, .navigation-link, .navigation-toggle, .navigation-toggle-icon, .navigation-menu, .navigation-overlay {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  const navigationToggle = document.getElementById("navigationToggle")
  const navigationMenu = document.getElementById("navigationMenu")
  const navigationOverlay = document.getElementById("navigationOverlay")

  function toggleNavigation() {
    const isExpanded = navigationToggle.getAttribute("aria-expanded") === "true"

    navigationToggle.setAttribute("aria-expanded", !isExpanded)

    if (!isExpanded) {
      navigationMenu.classList.add("navigation-menu-active")
      navigationOverlay.classList.add("navigation-overlay-active")
      document.body.style.overflow = "hidden"
    } else {
      navigationMenu.classList.remove("navigation-menu-active")
      navigationOverlay.classList.remove("navigation-overlay-active")
      document.body.style.overflow = ""
    }
  }

  function closeNavigation() {
    navigationToggle.setAttribute("aria-expanded", "false")
    navigationMenu.classList.remove("navigation-menu-active")
    navigationOverlay.classList.remove("navigation-overlay-active")
    document.body.style.overflow = ""
  }

  navigationToggle.addEventListener("click", toggleNavigation)
  navigationOverlay.addEventListener("click", closeNavigation)

  // Close navigation when pressing Escape key
  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      navigationToggle.getAttribute("aria-expanded") === "true"
    ) {
      closeNavigation()
    }
  })

  // Close navigation when clicking on navigation links (mobile)
  const navigationLinks = navigationMenu.querySelectorAll(".navigation-link")
  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 767) {
        closeNavigation()
      }
    })
  })

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 767) {
      closeNavigation()
    }
  })

  // Add scroll effect to navigation
  let lastScrollY = window.scrollY

  window.addEventListener("scroll", function () {
    const navigation = document.querySelector(".navigation")
    const currentScrollY = window.scrollY

    if (currentScrollY > 100) {
      navigation.style.background =
        "color-mix(in srgb, var(--color-surface) 98%, transparent)"
      navigation.style.boxShadow = "var(--shadow-level-2)"
    } else {
      navigation.style.background =
        "color-mix(in srgb, var(--color-surface) 95%, transparent)"
      navigation.style.boxShadow = "none"
    }

    lastScrollY = currentScrollY
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="navigation"
      >
        <div className="navigation-container">
          <div className="navigation-brand">
            <a href="/">
              <div
                aria-label="Vrindavan Digital Home"
                className="navigation-logo"
              >
                <div className="navigation-logo-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
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
                </div>
                <span className="navigation-logo-text">Vrindavan Digital</span>
              </div>
            </a>
          </div>
          <div id="navigationMenu" className="navigation-menu">
            <ul role="menubar" className="navigation-list">
              <li role="none" className="navigation-item">
                <a href="/about">
                  <div role="menuitem" className="navigation-link">
                    <span>About</span>
                  </div>
                </a>
              </li>
              <li role="none" className="navigation-item">
                <a href="/events-calendar">
                  <div role="menuitem" className="navigation-link">
                    <span>
                      {' '}
                      Events &amp; Calendar
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </li>
              <li role="none" className="navigation-item">
                <a href="/blog-articles-discourses">
                  <div role="menuitem" className="navigation-link">
                    <span>
                      {' '}
                      Articles &amp; Discourses
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </li>
              <li role="none" className="navigation-item">
                <a href="/gallery">
                  <div role="menuitem" className="navigation-link">
                    <span>Gallery</span>
                  </div>
                </a>
              </li>
              <li role="none" className="navigation-item">
                <a href="/donations">
                  <div role="menuitem" className="navigation-link">
                    <span>
                      {' '}
                      Donations
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </li>
              <li role="none" className="navigation-item">
                <a href="/contact">
                  <div role="menuitem" className="navigation-link">
                    <span>Contact</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="navigation-actions">
            <a href="/donations">
              <div
                aria-label="Make a donation"
                className="btn btn-primary navigation-cta"
              >
                <span>
                  {' '}
                  Donate Now
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </a>
          </div>
          <button
            id="navigationToggle"
            aria-label="Toggle navigation menu"
            aria-controls="navigationMenu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <span className="navigation-navigation-toggle-icon1 navigation-toggle-menu">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 5h16M4 12h16M4 19h16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            <span className="navigation-navigation-toggle-icon2">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div id="navigationOverlay" className="navigation-overlay"></div>
      </nav>
    </div>
  )
}

export default Navigation
