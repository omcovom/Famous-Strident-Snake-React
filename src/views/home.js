import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Famous Strident Snake</title>
        <meta property="og:title" content="Famous Strident Snake" />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
        @keyframes float {0% {transform: translateY(0px);}
100% {transform: translateY(-100px);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<script defer data-name="homepage-interactions">
(function(){
  // Parallax effect for hero video
  const heroVideo = document.querySelector(".hero-video")
  const heroOverlay = document.querySelector(".hero-overlay")

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.5

    if (heroVideo) {
      heroVideo.style.transform = \`translate(-50%, calc(-50% + \${rate}px))\`
    }
  })

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Animate elements on scroll
  document
    .querySelectorAll(".event-card, .nav-card, .feature-item")
    .forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(el)
    })

  // Enhanced hover effects for navigation cards
  document.querySelectorAll(".nav-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const icon = card.querySelector(".nav-icon")
      if (icon) {
        icon.style.transform = "scale(1.1) rotate(5deg)"
      }
    })

    card.addEventListener("mouseleave", () => {
      const icon = card.querySelector(".nav-icon")
      if (icon) {
        icon.style.transform = "scale(1) rotate(0deg)"
      }
    })
  })

  // Smooth scroll behavior for CTA buttons
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (e) => {
      // Add ripple effect
      const ripple = document.createElement("span")
      const rect = button.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.cssText = \`
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      width: \${size}px;
      height: \${size}px;
      left: \${x}px;
      top: \${y}px;
      pointer-events: none;
    \`

      if (!document.head.querySelector("#ripple-styles")) {
        const style = document.createElement("style")
        style.id = "ripple-styles"
        style.textContent = \`
        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
        button {
          position: relative;
          overflow: hidden;
        }
      \`
        document.head.appendChild(style)
      }

      button.appendChild(ripple)
      setTimeout(() => ripple.remove(), 600)
    })
  })

  // Auto-play video with better mobile support
  if (heroVideo) {
    heroVideo.addEventListener("loadedmetadata", () => {
      heroVideo.play().catch((e) => {
        console.log("Auto-play prevented:", e)
        // Fallback to poster image on mobile if autoplay fails
      })
    })
  }

  // Performance optimization: reduce animations on mobile
  if (window.innerWidth <= 767) {
    document.querySelectorAll(".event-card, .nav-card").forEach((card) => {
      card.style.transition = "transform 0.3s ease"
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <main>
        <section className="hero-section">
          <div className="hero-video-container">
            <video
              src="https://videos.pexels.com/video-files/15707493/15707493-hd_1280_720_25fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="hero-video"
            ></video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <div className="hero-text-container">
              <div className="hero-badge">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle r="2" cx="4" cy="20"></circle>
                  </g>
                </svg>
                <span>Krishna of Vrindavan</span>
              </div>
              <h1 className="hero-title">
                <span>
                  {' '}
                  Experience Divine
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text-gradient">Spiritual Journey</span>
              </h1>
              <p className="hero-subtitle">
                {' '}
                Connecting hearts to Krishna consciousness through modern
                technology while preserving ancient wisdom and traditions
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="hero-actions">
                <button className="btn-lg btn btn-primary">
                  Explore Our Mission
                </button>
                <button className="btn-outline btn-lg btn">
                  Watch Live Darshan
                </button>
              </div>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">
                  <span>50K+</span>
                </div>
                <div className="stat-label">
                  <span>Devotees Connected</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <span>500+</span>
                </div>
                <div className="stat-label">
                  <span>Spiritual Events</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <span>24/7</span>
                </div>
                <div className="stat-label">
                  <span>Live Streaming</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mission-section">
          <div className="mission-container">
            <div className="mission-visual">
              <div className="mission-image-grid">
                <div className="large grid-item">
                  <img
                    alt="Beautifully adorned ISKCON deities with ornate decorations inside a temple"
                    src="https://images.pexels.com/photos/12462435/pexels-photo-12462435.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  />
                </div>
                <div className="grid-item">
                  <img
                    alt="Vibrant statues adorned with flowers and garlands in Govardhan, India"
                    src="https://images.pexels.com/photos/15456702/pexels-photo-15456702.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  />
                </div>
                <div className="grid-item">
                  <img
                    alt="Vibrant Krishna idol adorned with intricate jewelry and flowers holding a flute"
                    src="https://images.pexels.com/photos/30816806/pexels-photo-30816806.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  />
                </div>
              </div>
            </div>
            <div className="mission-content">
              <div className="section-badge">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
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
                <span>Our Sacred Mission</span>
              </div>
              <h2 className="section-title">
                {' '}
                Bridging Ancient Wisdom with Modern Technology
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="section-content">
                {' '}
                At Vrindavan Digital, we are dedicated to creating sacred
                digital spaces that honor Krishna consciousness while making
                spiritual teachings accessible to devotees worldwide. Our
                mission is to preserve the timeless wisdom of Vrindavan and
                share it through innovative digital experiences.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="mission-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h3>Digital Scriptures</h3>
                    <p>Access sacred texts and teachings online</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
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
                        <path d="M9 18V5l12-2v13"></path>
                        <circle r="3" cx="6" cy="18"></circle>
                        <circle r="3" cx="18" cy="16"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h3>Live Kirtans</h3>
                    <p>Join devotional singing from anywhere</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle r="4" cx="9" cy="7"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h3>Global Community</h3>
                    <p>Connect with devotees worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="events-news-section">
          <div className="section-header">
            <div className="section-badge">
              <svg
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M8 2v4m8-4v4"></path>
                  <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                  <path d="M3 10h18"></path>
                </g>
              </svg>
              <span>Upcoming Events &amp; News</span>
            </div>
            <h2 className="section-title">
              Sacred Celebrations &amp; Divine Updates
            </h2>
            <p className="section-subtitle">
              {' '}
              Join us for spiritual gatherings, festivals, and stay updated with
              the latest from our community
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="events-grid">
            <article className="event-card featured">
              <div className="event-image">
                <img
                  alt="Beautifully adorned Krishna sculpture in a Hindu temple"
                  src="https://images.pexels.com/photos/13724077/pexels-photo-13724077.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                />
                <div className="event-badge">
                  <span>Featured</span>
                </div>
              </div>
              <div className="event-content">
                <div className="event-meta">
                  <span className="event-date">Dec 15, 2025</span>
                  <span className="event-category">Festival</span>
                </div>
                <h3 className="event-title">Gita Jayanti Celebration</h3>
                <p className="event-description">
                  {' '}
                  Join us for the sacred celebration of the Bhagavad Gita&apos;s
                  divine teachings with special programs, devotional singing,
                  and spiritual discourse.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="event-actions">
                  <button className="btn btn-primary">Join Event</button>
                  <button className="btn-link btn">Learn More</button>
                </div>
              </div>
            </article>
            <article className="event-card">
              <div className="event-image">
                <img
                  alt="A colorful Hindu altar adorned with vibrant flowers and religious figures for worship"
                  src="https://images.pexels.com/photos/19992431/pexels-photo-19992431.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                />
              </div>
              <div className="event-content">
                <div className="event-meta">
                  <span className="event-date">Dec 20, 2025</span>
                  <span className="event-category">Workshop</span>
                </div>
                <h3 className="event-title">Digital Darshan Workshop</h3>
                <p className="event-description">
                  {' '}
                  Learn how our new digital platform enhances your spiritual
                  practice and connects you with Krishna consciousness.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </article>
            <article className="event-card">
              <div className="event-image">
                <img
                  alt="A person dressed as Lord Krishna playing a flute in a lush outdoor setting"
                  src="https://images.pexels.com/photos/27630592/pexels-photo-27630592.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                />
              </div>
              <div className="event-content">
                <div className="event-meta">
                  <span className="event-date">Dec 25, 2025</span>
                  <span className="event-category">Performance</span>
                </div>
                <h3 className="event-title">Krishna Leela Performance</h3>
                <p className="event-description">
                  {' '}
                  Experience the divine pastimes of Krishna through traditional
                  dance and storytelling, now available in virtual reality.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </article>
            <article className="news-card">
              <div className="news-content">
                <div className="news-badge">
                  <span>Latest News</span>
                </div>
                <h3 className="news-title">New Temple Live Stream Launched</h3>
                <p className="news-description">
                  {' '}
                  Experience 24/7 live darshan from the sacred temples of
                  Vrindavan with our new high-definition streaming technology.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="news-meta">
                  <span className="news-date">3 days ago</span>
                </div>
              </div>
            </article>
            <article className="news-card">
              <div className="news-content">
                <div className="news-badge">
                  <span>Community Update</span>
                </div>
                <h3 className="news-title">Mobile App Reaches 50K Downloads</h3>
                <p className="news-description">
                  {' '}
                  Our Krishna consciousness mobile app has reached a milestone
                  of 50,000 downloads, connecting devotees globally.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="news-meta">
                  <span className="news-date">1 week ago</span>
                </div>
              </div>
            </article>
            <article className="news-card">
              <div className="news-content">
                <div className="news-badge">
                  <span>Innovation</span>
                </div>
                <h3 className="news-title">VR Temple Experience Beta</h3>
                <p className="news-description">
                  {' '}
                  Enter the sacred spaces of Vrindavan from anywhere in the
                  world with our new virtual reality temple experience.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="news-meta">
                  <span className="news-date">2 weeks ago</span>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="navigation-section">
          <div className="navigation-container1">
            <div className="navigation-header">
              <h2 className="section-title">
                Explore Our Sacred Digital Spaces
              </h2>
              <p className="section-subtitle">
                {' '}
                Discover all the ways you can connect with Krishna consciousness
                through our platform
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="navigation-grid">
              <div className="about nav-card">
                <div className="nav-card-bg">
                  <img
                    alt="Beautiful Hindu altar featuring Krishna figurines"
                    src="https://images.pexels.com/photos/16058260/pexels-photo-16058260.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  />
                </div>
                <div className="nav-card-content">
                  <div className="nav-icon">
                    <svg
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle r="4" cx="9" cy="7"></circle>
                      </g>
                    </svg>
                  </div>
                  <h3 className="nav-title">About Our Mission</h3>
                  <p className="nav-description">
                    {' '}
                    Learn about our dedication to preserving Krishna
                    consciousness through digital innovation
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <button className="btn-outline btn">Discover More</button>
                </div>
              </div>
              <div className="donate nav-card">
                <div className="nav-card-bg">
                  <img
                    alt="Vibrant decorative display featuring Krishna statues in a Hindu temple"
                    src="https://images.pexels.com/photos/16058266/pexels-photo-16058266.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  />
                </div>
                <div className="nav-card-content">
                  <div className="nav-icon">
                    <svg
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect x="3" y="8" rx="1" width="18" height="4"></rect>
                        <path d="M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="nav-title">Support Our Cause</h3>
                  <p className="nav-description">
                    {' '}
                    Contribute to spreading Krishna consciousness and
                    maintaining our digital temples
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <button className="btn btn-primary">Donate Now</button>
                </div>
              </div>
              <div className="nav-card gallery">
                <div className="nav-card-bg">
                  <img
                    alt="Vibrant statues of Hindu deities adorned with flowers"
                    src="https://images.pexels.com/photos/31513880/pexels-photo-31513880.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  />
                </div>
                <div className="nav-card-content">
                  <div className="nav-icon">
                    <svg
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
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
                          x="3"
                          y="3"
                          rx="2"
                          ry="2"
                          width="18"
                          height="18"
                        ></rect>
                        <circle r="2" cx="9" cy="9"></circle>
                        <path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="nav-title">Sacred Gallery</h3>
                  <p className="nav-description">
                    {' '}
                    Explore divine images, videos, and audio recordings from our
                    spiritual community
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <button className="btn-outline btn">View Gallery</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="cta-container">
            <div className="cta-content">
              <div className="cta-badge">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle r="2" cx="4" cy="20"></circle>
                  </g>
                </svg>
                <span>Join Our Digital Sangha</span>
              </div>
              <h2 className="cta-title">
                Begin Your Digital Spiritual Journey Today
              </h2>
              <p className="cta-description">
                {' '}
                Connect with thousands of devotees worldwide and experience
                Krishna consciousness through our innovative digital platform.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="cta-actions">
                <button className="btn-xl btn btn-primary">
                  Start Your Journey
                </button>
                <button className="btn-xl btn-outline btn">Watch Demo</button>
              </div>
              <div className="cta-features">
                <div className="cta-feature">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m5 12l7-7l7 7m-7 7V5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>24/7 Live Darshan</span>
                </div>
                <div className="cta-feature">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m5 12l7-7l7 7m-7 7V5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Virtual Reality Temples</span>
                </div>
                <div className="cta-feature">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m5 12l7-7l7 7m-7 7V5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Global Community Access</span>
                </div>
              </div>
            </div>
            <div className="cta-visual">
              <img
                alt="Colorful statues of Hindu deities adorned with flowers in a vibrant festival setting"
                src="https://images.pexels.com/photos/31689675/pexels-photo-31689675.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container7">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon55"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text34">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
