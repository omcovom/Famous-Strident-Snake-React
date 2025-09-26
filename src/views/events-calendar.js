import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './events-calendar.css'

const EventsCalendar = (props) => {
  return (
    <div className="events-calendar-container1">
      <Helmet>
        <title>Events-Calendar - Famous Strident Snake</title>
        <meta
          property="og:title"
          content="Events-Calendar - Famous Strident Snake"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="events-calendar-container2">
        <div className="events-calendar-container3">
          <Script
            html={`<script defer data-name="events-calendar">
(function(){
  // Enhanced Calendar Functionality
  function initializeCalendar() {
    const viewToggles = document.querySelectorAll(".view-toggle")
    const navBtns = document.querySelectorAll(".nav-btn")
    const calendarDays = document.querySelectorAll(".calendar-day")
    const currentMonthSpan = document.querySelector(".current-month")

    // View toggle functionality
    viewToggles.forEach((toggle) => {
      toggle.addEventListener("click", function () {
        viewToggles.forEach((t) => t.classList.remove("active"))
        this.classList.add("active")

        // Here you could implement different calendar views
        const view = this.textContent.toLowerCase()
        updateCalendarView(view)
      })
    })

    // Calendar navigation
    navBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const isNext = this.textContent === "›"
        navigateCalendar(isNext)
      })
    })

    // Calendar day click functionality
    calendarDays.forEach((day) => {
      day.addEventListener("click", function () {
        if (this.classList.contains("has-event")) {
          showEventDetails(this)
        }
      })
    })

    function updateCalendarView(view) {
      const calendarGrid = document.querySelector(".calendar-grid")
      calendarGrid.setAttribute("data-view", view)

      // Add smooth transition effect
      calendarGrid.style.transition = "opacity 0.3s ease"
      calendarGrid.style.opacity = "0.7"

      setTimeout(() => {
        calendarGrid.style.opacity = "1"
      }, 150)
    }

    function navigateCalendar(isNext) {
      const currentText = currentMonthSpan.textContent
      // Simple month navigation simulation
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]
      const [monthName, year] = currentText.split(" ")
      let monthIndex = months.indexOf(monthName)
      let currentYear = parseInt(year)

      if (isNext) {
        monthIndex = (monthIndex + 1) % 12
        if (monthIndex === 0) currentYear++
      } else {
        monthIndex = (monthIndex - 1 + 12) % 12
        if (monthIndex === 11) currentYear--
      }

      currentMonthSpan.textContent = \`\${months[monthIndex]} \${currentYear}\`

      // Add transition effect
      currentMonthSpan.style.transform = "scale(0.95)"
      setTimeout(() => {
        currentMonthSpan.style.transform = "scale(1)"
      }, 100)
    }

    function showEventDetails(dayElement) {
      const eventDetails = document.getElementById("event-details")
      if (eventDetails) {
        eventDetails.scrollIntoView({ behavior: "smooth" })

        // Highlight the event details section
        eventDetails.style.transform = "scale(1.02)"
        setTimeout(() => {
          eventDetails.style.transform = "scale(1)"
        }, 300)
      }
    }
  }

  // Filter and Search Functionality
  function initializeFilters() {
    const searchInput = document.querySelector(".search-input")
    const filterCheckboxes = document.querySelectorAll(".filter-checkbox input")
    const filterSelects = document.querySelectorAll(".filter-select")
    const sortSelect = document.querySelector(".sort-select")
    const appliedFilters = document.querySelector(".applied-filters")
    const resultsCount = document.querySelector(".results-count")

    // Search input functionality
    if (searchInput) {
      let searchTimeout
      searchInput.addEventListener("input", function () {
        clearTimeout(searchTimeout)
        searchTimeout = setTimeout(() => {
          performSearch(this.value)
        }, 300)
      })
    }

    // Filter checkbox functionality
    filterCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        updateAppliedFilters()
        filterResults()
      })
    })

    // Filter select functionality
    filterSelects.forEach((select) => {
      select.addEventListener("change", function () {
        updateAppliedFilters()
        filterResults()
      })
    })

    // Sort functionality
    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        sortResults(this.value)
      })
    }

    // Filter chip removal
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("filter-remove")) {
        const chip = e.target.parentElement
        const filterText = chip.textContent.replace("×", "").trim()
        removeFilter(filterText)
        chip.remove()
        filterResults()
      }
    })

    function performSearch(query) {
      // Simulate search functionality
      const eventCards = document.querySelectorAll(".event-card")
      let visibleCount = 0

      eventCards.forEach((card) => {
        const title = card
          .querySelector(".event-title")
          .textContent.toLowerCase()
        const description = card
          .querySelector(".event-description")
          .textContent.toLowerCase()

        if (
          title.includes(query.toLowerCase()) ||
          description.includes(query.toLowerCase()) ||
          query === ""
        ) {
          card.style.display = "block"
          visibleCount++
        } else {
          card.style.display = "none"
        }
      })

      updateResultsCount(visibleCount)
    }

    function updateAppliedFilters() {
      const activeFilters = []

      // Check checkboxes
      filterCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          const label = checkbox.parentElement.textContent.trim()
          activeFilters.push(label)
        }
      })

      // Check selects
      filterSelects.forEach((select) => {
        if (
          select.value &&
          select.value !== "All Locations" &&
          select.value !== "This Week"
        ) {
          activeFilters.push(select.value)
        }
      })

      // Update applied filters display
      appliedFilters.innerHTML = activeFilters
        .map(
          (filter) =>
            \`<span class="filter-chip">\${filter} <span class="filter-remove">×</span></span>\`
        )
        .join("")
    }

    function filterResults() {
      // Simulate filtering logic
      const eventCards = document.querySelectorAll(".event-card")
      let visibleCount = eventCards.length
      updateResultsCount(visibleCount)
    }

    function removeFilter(filterText) {
      // Remove from checkboxes
      filterCheckboxes.forEach((checkbox) => {
        const label = checkbox.parentElement.textContent.trim()
        if (label === filterText) {
          checkbox.checked = false
        }
      })

      // Reset selects
      filterSelects.forEach((select) => {
        if (select.value === filterText) {
          select.selectedIndex = 0
        }
      })
    }

    function sortResults(sortBy) {
      const eventsGrid = document.querySelector(".events-grid")
      const eventCards = Array.from(eventsGrid.querySelectorAll(".event-card"))

      eventCards.sort((a, b) => {
        switch (sortBy) {
          case "Sort by Date":
            return new Date(a.dataset.date) - new Date(b.dataset.date)
          case "Sort by Relevance":
            return b.dataset.relevance - a.dataset.relevance
          case "Sort by Popularity":
            return b.dataset.popularity - a.dataset.popularity
          default:
            return 0
        }
      })

      // Re-append sorted cards
      eventCards.forEach((card) => eventsGrid.appendChild(card))
    }

    function updateResultsCount(count) {
      if (resultsCount) {
        resultsCount.textContent = \`\${count} events found\`
      }
    }
  }

  // Gallery Functionality
  function initializeGallery() {
    const galleryFilters = document.querySelectorAll(".gallery-filter")
    const galleryItems = document.querySelectorAll(".gallery-item")

    galleryFilters.forEach((filter) => {
      filter.addEventListener("click", function () {
        galleryFilters.forEach((f) => f.classList.remove("active"))
        this.classList.add("active")

        const category = this.textContent.toLowerCase()
        filterGalleryItems(category)
      })
    })

    function filterGalleryItems(category) {
      galleryItems.forEach((item) => {
        item.style.transform = "scale(0.95)"
        item.style.opacity = "0.5"

        setTimeout(() => {
          if (category === "all" || item.dataset.category === category) {
            item.style.display = "block"
            item.style.transform = "scale(1)"
            item.style.opacity = "1"
          } else {
            item.style.display = "none"
          }
        }, 150)
      })
    }
  }

  // RSVP and Donation Functionality
  function initializeInteractions() {
    const rsvpButtons = document.querySelectorAll(
      ".event-card .btn-primary, .rsvp-card .btn-primary"
    )
    const donationAmounts = document.querySelectorAll(".amount-btn")
    const frequencyOptions = document.querySelectorAll(
      ".frequency-option input"
    )

    // RSVP button functionality
    rsvpButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        handleRSVP(this)
      })
    })

    // Donation amount selection
    donationAmounts.forEach((btn) => {
      btn.addEventListener("click", function () {
        donationAmounts.forEach((b) => b.classList.remove("active"))
        this.classList.add("active")
        updateDonationAmount(this.textContent)
      })
    })

    // Donation frequency selection
    frequencyOptions.forEach((option) => {
      option.addEventListener("change", function () {
        updateDonationFrequency(this.value)
      })
    })

    function handleRSVP(button) {
      // Simulate RSVP process
      const originalText = button.textContent
      button.textContent = "Processing..."
      button.disabled = true

      setTimeout(() => {
        button.textContent = "RSVP Confirmed ✓"
        button.classList.add("confirmed")

        setTimeout(() => {
          button.textContent = originalText
          button.disabled = false
          button.classList.remove("confirmed")
        }, 2000)
      }, 1000)
    }

    function updateDonationAmount(amount) {
      const customAmountInput = document.querySelector(".custom-amount")
      if (customAmountInput) {
        customAmountInput.value = amount
      }
    }

    function updateDonationFrequency(frequency) {
      const donateBtn = document.querySelector(
        ".donation-form-card .btn-primary"
      )
      if (donateBtn) {
        if (frequency === "monthly") {
          donateBtn.textContent = "Start Monthly Donation"
        } else {
          donateBtn.textContent = "Donate Now"
        }
      }
    }
  }

  // Smooth animations on scroll
  function initializeScrollAnimations() {
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

    // Observe all major sections
    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      section.style.opacity = "0"
      section.style.transform = "translateY(20px)"
      section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(section)
    })
  }

  // Initialize all functionality
  document.addEventListener("DOMContentLoaded", function () {
    initializeCalendar()
    initializeFilters()
    initializeGallery()
    initializeInteractions()
    initializeScrollAnimations()
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <section id="hero-section" className="hero-events">
        <div className="hero-content-wrapper">
          <div className="hero-main-content">
            <div className="hero-text-content">
              <h1 className="hero-title">Events &amp; Calendar</h1>
              <p className="hero-subtitle">Join, Learn, Serve</p>
              <p className="section-content">
                {' '}
                Connect with Vrindavan&apos;s community through thoughtfully
                curated events that blend devotional practice with measurable
                social impact. Explore upcoming lectures, kirtans, service
                projects, and professional seminars designed for donors,
                volunteers, and partners.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="next-event-highlight">
                <div className="next-event-info">
                  <span className="next-event-label">Next event:</span>
                  <span className="next-event-title">Evening Kirtan</span>
                  <div className="next-event-details">
                    <span>Sept 30 • 7:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="hero-actions1">
                <button className="btn btn-primary">Quick RSVP</button>
                <button className="btn-outline btn">See Full Calendar</button>
              </div>
            </div>
          </div>
          <div className="hero-visual-content">
            <div className="hero-image-container">
              <img
                alt="A group of people performing a spiritual ritual with incense at a traditional shrine outdoors"
                src="https://images.pexels.com/photos/13056761/pexels-photo-13056761.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                className="hero-image"
              />
              <div className="calendar-overlay">
                <div className="calendar-icon">
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
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                </div>
                <div className="calendar-text">
                  <span className="calendar-count">12</span>
                  <span className="calendar-label">Upcoming Events</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="filters-search" className="filters-search-section">
        <div className="filters-search-container">
          <div className="filters-panel">
            <h2 className="section-title">Find Your Event</h2>
            <div className="search-box">
              <div className="search-input-wrapper">
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
                    <path d="m21 21l-4.34-4.34"></path>
                    <circle r="8" cx="11" cy="11"></circle>
                  </g>
                </svg>
                <input
                  type="text"
                  placeholder="Search events, speakers, themes..."
                  className="search-input"
                />
              </div>
            </div>
            <div className="filter-group">
              <h3 className="filter-title">Date Range</h3>
              <select className="filter-select">
                <option>This Week</option>
                <option>This Month</option>
                <option>Next 3 Months</option>
                <option>Custom Range</option>
              </select>
            </div>
            <div className="filter-group">
              <h3 className="filter-title">Category</h3>
              <div className="filter-checkboxes">
                <label className="filter-checkbox">
                  <input type="checkbox" />
                  <span>
                    {' '}
                    Discourses
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </label>
                <label className="filter-checkbox">
                  <input type="checkbox" />
                  <span>
                    {' '}
                    Kirtan &amp; Bhajans
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </label>
                <label className="filter-checkbox">
                  <input type="checkbox" />
                  <span>
                    {' '}
                    Community Service
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </label>
                <label className="filter-checkbox">
                  <input type="checkbox" />
                  <span>
                    {' '}
                    Festivals
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </label>
                <label className="filter-checkbox">
                  <input type="checkbox" />
                  <span>
                    {' '}
                    Children &amp; Youth
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </label>
              </div>
            </div>
            <div className="filter-group">
              <h3 className="filter-title">Location</h3>
              <select className="filter-select">
                <option>All Locations</option>
                <option>Temple Hall</option>
                <option>Community Center</option>
                <option>Virtual/Online</option>
              </select>
            </div>
          </div>
          <div className="search-results">
            <div className="results-header">
              <h3 className="results-title">Upcoming Events</h3>
              <div className="results-controls">
                <span className="results-count">24 events found</span>
                <select className="sort-select">
                  <option>Sort by Date</option>
                  <option>Sort by Relevance</option>
                  <option>Sort by Popularity</option>
                </select>
              </div>
            </div>
            <div className="applied-filters">
              <span className="filter-chip">
                <span>
                  {' '}
                  This Month
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="events-calendar-filter-remove1">×</span>
              </span>
              <span className="filter-chip">
                <span>
                  {' '}
                  Discourses
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="events-calendar-filter-remove2">×</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="upcoming-events" className="upcoming-events-section">
        <div className="events-container">
          <div className="section-header1">
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">Join, Support, Connect</p>
            <p className="section-content">
              {' '}
              Discover our next gatherings in Vrindavan. Each event is designed
              to deepen community ties, share teachings, and support the
              temple&apos;s mission.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="events-grid1">
            <div className="event-card1">
              <div className="event-image">
                <img
                  alt="A group of Buddhist monks in Namarjung, Nepal, participate in a meditation ceremony wearing traditional robes"
                  src="https://images.pexels.com/photos/764688/pexels-photo-764688.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                />
                <div className="event-category1">
                  <span>Kirtan</span>
                </div>
              </div>
              <div className="event-content">
                <h3 className="event-title1">Morning Kirtan</h3>
                <div className="event-meta1">
                  <div className="event-datetime">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>Sat, 6:00 AM</span>
                  </div>
                  <div className="event-location">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                        <circle r="3" cx="10" cy="10"></circle>
                      </g>
                    </svg>
                    <span>Temple Courtyard</span>
                  </div>
                </div>
                <p className="event-description1">
                  {' '}
                  A guided devotional singing session welcoming visitors and
                  donors. Open seating with limited spaces for group offerings.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="event-footer">
                  <div className="event-capacity">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle r="4" cx="12" cy="7"></circle>
                      </g>
                    </svg>
                    <span>25 spots available</span>
                  </div>
                  <button className="btn-sm btn btn-primary">RSVP</button>
                </div>
              </div>
            </div>
            <div className="event-card1">
              <div className="event-image">
                <img
                  alt="Vibrant image of Hindu sadhus meditating at a temple, showcasing traditional attire and spiritual expression"
                  src="https://images.pexels.com/photos/11398425/pexels-photo-11398425.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                />
                <div className="event-category1">
                  <span>Education</span>
                </div>
              </div>
              <div className="event-content">
                <h3 className="event-title1">
                  Children&apos;s Sanskrit Workshop
                </h3>
                <div className="event-meta1">
                  <div className="event-datetime">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>Sun, 10:30 AM</span>
                  </div>
                  <div className="event-location">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                        <circle r="3" cx="10" cy="10"></circle>
                      </g>
                    </svg>
                    <span>Community Hall</span>
                  </div>
                </div>
                <p className="event-description1">
                  {' '}
                  Interactive session teaching basic Sanskrit and stories of
                  Krishna; supports our youth education initiatives.
                  Family-friendly.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="event-footer">
                  <div className="event-capacity">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle r="4" cx="12" cy="7"></circle>
                      </g>
                    </svg>
                    <span>12 spots available</span>
                  </div>
                  <button className="btn-sm btn btn-primary">RSVP</button>
                </div>
              </div>
            </div>
            <div className="event-card1">
              <div className="event-image">
                <img
                  alt="Religious ceremony with incense, smoke, and worshippers gathered under night lights"
                  src="https://images.pexels.com/photos/10495072/pexels-photo-10495072.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                />
                <div className="event-category1">
                  <span>Discourse</span>
                </div>
              </div>
              <div className="event-content">
                <h3 className="event-title1">
                  Bhakti Discourse with Senior Teacher
                </h3>
                <div className="event-meta1">
                  <div className="event-datetime">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>Wed, 7:00 PM</span>
                  </div>
                  <div className="event-location">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                        <circle r="3" cx="10" cy="10"></circle>
                      </g>
                    </svg>
                    <span>Lecture Room</span>
                  </div>
                </div>
                <p className="event-description1">
                  {' '}
                  In-depth talk on devotional practice and community service.
                  Recommended for donors and institutional partners.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="event-footer">
                  <div className="event-capacity">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle r="4" cx="12" cy="7"></circle>
                      </g>
                    </svg>
                    <span>8 spots available</span>
                  </div>
                  <button className="btn-sm btn btn-primary">RSVP</button>
                </div>
              </div>
            </div>
            <div className="event-card1">
              <div className="event-image">
                <img
                  alt="A Hindu ritual ceremony taking place at the sacred Pashupatinath Temple in Nepal"
                  src="https://images.pexels.com/photos/15277125/pexels-photo-15277125.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                />
                <div className="event-category1">
                  <span>Festival</span>
                </div>
              </div>
              <div className="event-content">
                <h3 className="event-title1">Diwali Celebration</h3>
                <div className="event-meta1">
                  <div className="event-datetime">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>Thu, 6:00 PM</span>
                  </div>
                  <div className="event-location">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                        <circle r="3" cx="10" cy="10"></circle>
                      </g>
                    </svg>
                    <span>Main Temple</span>
                  </div>
                </div>
                <p className="event-description1">
                  {' '}
                  Grand festival celebration with traditional rituals, community
                  feast, and cultural performances. Open to all families.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="event-footer">
                  <div className="event-capacity">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle r="4" cx="12" cy="7"></circle>
                      </g>
                    </svg>
                    <span>150 spots available</span>
                  </div>
                  <button className="btn-sm btn btn-primary">RSVP</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="calendar-view" className="calendar-section">
        <div className="calendar-container">
          <div className="calendar-header">
            <h2 className="section-title">Interactive Calendar</h2>
            <p className="section-subtitle">Plan, Participate, Support</p>
            <div className="calendar-controls">
              <div className="view-toggles">
                <button className="active view-toggle">Month</button>
                <button className="view-toggle">Week</button>
                <button className="view-toggle">List</button>
              </div>
              <div className="calendar-nav">
                <button className="nav-btn">‹</button>
                <span className="current-month">October 2024</span>
                <button className="nav-btn">›</button>
              </div>
            </div>
          </div>
          <div className="calendar-grid">
            <div className="calendar-header-row">
              <div className="day-header">
                <span>Sun</span>
              </div>
              <div className="day-header">
                <span>Mon</span>
              </div>
              <div className="day-header">
                <span>Tue</span>
              </div>
              <div className="day-header">
                <span>Wed</span>
              </div>
              <div className="day-header">
                <span>Thu</span>
              </div>
              <div className="day-header">
                <span>Fri</span>
              </div>
              <div className="day-header">
                <span>Sat</span>
              </div>
            </div>
            <div className="calendar-body">
              <div className="calendar-day prev-month">
                <span>29</span>
              </div>
              <div className="calendar-day prev-month">
                <span>30</span>
              </div>
              <div className="calendar-day">
                <span>1</span>
              </div>
              <div className="calendar-day">
                <span>2</span>
              </div>
              <div className="calendar-day">
                <span>3</span>
              </div>
              <div className="calendar-day">
                <span>4</span>
              </div>
              <div className="has-event calendar-day">
                <span>
                  {' '}
                  5
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="kirtan event-dot"></div>
              </div>
              <div className="has-event calendar-day">
                <span>
                  {' '}
                  6
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="event-dot discourse"></div>
              </div>
              <div className="calendar-day">
                <span>7</span>
              </div>
              <div className="calendar-day">
                <span>8</span>
              </div>
              <div className="calendar-day">
                <span>9</span>
              </div>
              <div className="has-event calendar-day">
                <span>
                  {' '}
                  10
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="festival event-dot"></div>
              </div>
              <div className="calendar-day">
                <span>11</span>
              </div>
              <div className="has-event calendar-day">
                <span>
                  {' '}
                  12
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="education event-dot"></div>
              </div>
              <div className="calendar-day">
                <span>13</span>
              </div>
              <div className="calendar-day">
                <span>14</span>
              </div>
              <div className="calendar-day">
                <span>15</span>
              </div>
              <div className="calendar-day">
                <span>16</span>
              </div>
              <div className="calendar-day">
                <span>17</span>
              </div>
              <div className="has-event calendar-day">
                <span>
                  {' '}
                  18
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="kirtan event-dot"></div>
                <div className="event-dot discourse"></div>
              </div>
              <div className="calendar-day">
                <span>19</span>
              </div>
              <div className="calendar-day">
                <span>20</span>
              </div>
              <div className="calendar-day">
                <span>21</span>
              </div>
              <div className="calendar-day">
                <span>22</span>
              </div>
              <div className="calendar-day">
                <span>23</span>
              </div>
              <div className="has-event calendar-day">
                <span>
                  {' '}
                  24
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="festival event-dot"></div>
              </div>
              <div className="calendar-day">
                <span>25</span>
              </div>
              <div className="calendar-day">
                <span>26</span>
              </div>
              <div className="calendar-day">
                <span>27</span>
              </div>
              <div className="calendar-day">
                <span>28</span>
              </div>
              <div className="calendar-day">
                <span>29</span>
              </div>
              <div className="today has-event calendar-day">
                <span>
                  {' '}
                  30
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="kirtan event-dot"></div>
              </div>
              <div className="calendar-day">
                <span>31</span>
              </div>
              <div className="next-month calendar-day">
                <span>1</span>
              </div>
              <div className="next-month calendar-day">
                <span>2</span>
              </div>
            </div>
          </div>
          <div className="calendar-legend">
            <h4>Event Types</h4>
            <div className="legend-items">
              <div className="legend-item">
                <div className="kirtan legend-dot"></div>
                <span>Kirtan &amp; Bhajans</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot discourse"></div>
                <span>Discourses</span>
              </div>
              <div className="legend-item">
                <div className="festival legend-dot"></div>
                <span>Festivals</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot education"></div>
                <span>Education</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="event-details" className="event-details-section">
        <div className="event-details-container">
          <div className="event-main-info">
            <div className="event-hero-image">
              <img
                alt="Monks in colorful attire playing traditional Tibetan horns during a cultural ceremony"
                src="https://images.pexels.com/photos/11706829/pexels-photo-11706829.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
              />
              <div className="event-category-badge">
                <span>Featured Event</span>
              </div>
            </div>
            <div className="event-overview">
              <h2 className="section-title">
                Krishna Kirtan &amp; Community Discourse
              </h2>
              <div className="event-meta-detailed">
                <div className="meta-item">
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
                      <path d="M12 6v6l4 2"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                  <div>
                    <span className="meta-label">Date &amp; Time</span>
                    <span className="meta-value">
                      {' '}
                      Saturday, October 18 • 10:00 AM – 1:00 PM
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="meta-item">
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
                      <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                      <circle r="3" cx="10" cy="10"></circle>
                    </g>
                  </svg>
                  <div>
                    <span className="meta-label">Location</span>
                    <span className="meta-value">
                      {' '}
                      Radha-Govinda Hall, Vrindavan Temple Complex
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <p className="section-content">
                {' '}
                Join our flagship community gathering combining devotional
                kirtan, a guided discourse on Krishna&apos;s teachings, and a
                post-session community lunch. This event is designed for both
                long-time devotees and first-time visitors seeking an authentic,
                reverent experience grounded in practical spiritual insights.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="event-sidebar">
            <div className="rsvp-card">
              <h3>RSVP &amp; Participation</h3>
              <p>Reserve your place to help us plan seating and prasadam.</p>
              <div className="rsvp-options">
                <label className="rsvp-option">
                  <input
                    type="radio"
                    name="rsvp-type"
                    value="general"
                    checked="true"
                  />
                  <span>General Admission</span>
                </label>
                <label className="rsvp-option">
                  <input type="radio" name="rsvp-type" value="volunteer" />
                  <span>Volunteer (service opportunities available)</span>
                </label>
              </div>
              <button className="btn-lg btn btn-primary">Confirm RSVP</button>
              <div className="rsvp-note">
                <p>
                  {' '}
                  RSVP closes 48 hours before the event. Limited walk-in
                  capacity available.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="speakers-card">
              <h3>Speakers &amp; Leaders</h3>
              <div className="speaker">
                <div className="speaker-info">
                  <h4>Swami Raghavandas</h4>
                  <p>
                    {' '}
                    Senior teacher with 25+ years of community leadership and
                    scriptural scholarship.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="speaker">
                <div className="speaker-info">
                  <h4>Meera Devi</h4>
                  <p>
                    {' '}
                    Lead kirtaniya, experienced in classical and community
                    kirtan facilitation.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="donation-card">
              <h3>Support This Event</h3>
              <p>
                {' '}
                Suggested contribution supports temple operations, teacher
                stipends, and community kitchens.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button className="btn-secondary btn">Make a Donation</button>
            </div>
          </div>
        </div>
      </section>
      <section id="event-gallery" className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-header">
            <h2 className="section-title">Event Gallery</h2>
            <p className="section-subtitle">Moments That Matter</p>
            <p className="section-content">
              {' '}
              Explore a curated collection of photos and videos from past
              programs, festivals, and community gatherings. Each media item
              reflects impact, participation, and the spiritual atmosphere of
              Vrindavan&apos;s work.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="gallery-filters">
            <button className="active gallery-filter">All</button>
            <button className="gallery-filter">Kirtans &amp; Sankirtan</button>
            <button className="gallery-filter">Festivals</button>
            <button className="gallery-filter">Youth &amp; Outreach</button>
            <button className="gallery-filter">
              Teachings &amp; Discourses
            </button>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image-wrapper">
                <img
                  alt="A crowd uses smartphones to capture a Buddhist ceremony at a historic site"
                  src="https://images.pexels.com/photos/18566272/pexels-photo-18566272.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h4>Community Kirtan Session</h4>
                    <p>Evening devotional gathering with 150+ participants</p>
                    <span className="gallery-date">Sept 15, 2024</span>
                  </div>
                  <div className="gallery-icon">
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
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-wrapper">
                <img
                  alt="A vibrant nighttime gathering with candles and traditional practices in Bangladesh"
                  src="https://images.pexels.com/photos/9762020/pexels-photo-9762020.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h4>Festival of Lights</h4>
                    <p>Annual Diwali celebration with traditional ceremonies</p>
                    <span className="gallery-date">Oct 24, 2023</span>
                  </div>
                  <div className="gallery-icon">
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
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-wrapper">
                <img
                  alt="People congregate outside a traditional temple with ornate architecture, evoking cultural richness"
                  src="https://images.pexels.com/photos/16478332/pexels-photo-16478332.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h4>Temple Dedication Ceremony</h4>
                    <p>Grand opening of renovated community center</p>
                    <span className="gallery-date">Aug 12, 2024</span>
                  </div>
                  <div className="gallery-icon">
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
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-wrapper">
                <img
                  alt="Group participating in a traditional Buddhist offering ceremony at an outdoor gathering"
                  src="https://images.pexels.com/photos/10333232/pexels-photo-10333232.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h4>Youth Education Workshop</h4>
                    <p>Children learning traditional scriptures and values</p>
                    <span className="gallery-date">July 28, 2024</span>
                  </div>
                  <div className="gallery-icon">
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
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-wrapper">
                <img
                  alt="Group of people participating in a traditional Balinese purification ritual at a sacred water temple"
                  src="https://images.pexels.com/photos/19468687/pexels-photo-19468687.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h4>Community Service Day</h4>
                    <p>Volunteers supporting local outreach programs</p>
                    <span className="gallery-date">June 15, 2024</span>
                  </div>
                  <div className="gallery-icon">
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
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-wrapper">
                <img
                  alt="Young man lighting incense sticks at a temple during a spiritual ritual"
                  src="https://images.pexels.com/photos/11948449/pexels-photo-11948449.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h4>Morning Prayer Session</h4>
                    <p>
                      Daily devotional practices open to all community members
                    </p>
                    <span className="gallery-date">Ongoing</span>
                  </div>
                  <div className="gallery-icon">
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
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-cta">
            <p>
              {' '}
              High-resolution images and professionally edited videos available
              for download by supporters and press.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <button className="btn-outline btn">Request Media Assets</button>
          </div>
        </div>
      </section>
      <section id="donate-engage" className="donate-section">
        <div className="donate-container">
          <div className="donate-content">
            <div className="donate-info">
              <h2 className="section-title">
                Support Vrindavan&apos;s Living Legacy
              </h2>
              <p className="section-content">
                {' '}
                Your donation sustains sacred services, community programs, and
                the upkeep of the temple grounds. Give with confidence:
                transparent reporting, secure payments, and clear impact.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="giving-options">
                <div className="giving-option">
                  <h4>Ways to Give</h4>
                  <p>
                    {' '}
                    One-time gifts, recurring contributions, and event-specific
                    funds. Choose a designated fund for festivals, education, or
                    community outreach.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="giving-option">
                  <h4>Corporate &amp; Institutional Support</h4>
                  <p>
                    {' '}
                    Partner with us for matching gifts, sponsorship of major
                    festivals, or employee engagement programs.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="giving-option">
                  <h4>Volunteer &amp; Corporate Engagement</h4>
                  <p>
                    {' '}
                    Combine giving with action. Sign up your team for volunteer
                    days during events or community service initiatives.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="transparency-note">
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
                <div>
                  <h4>Transparent Impact</h4>
                  <p>
                    {' '}
                    Quarterly stewardship reports, donation receipts, and a
                    public donations dashboard ensure accountability. Every
                    contribution is tracked to programs and outcomes.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="donate-actions">
            <div className="donation-form-card">
              <h3>Make a Donation</h3>
              <p>
                {' '}
                Secure checkout with PCI-compliant gateways. Receipts and
                automatic tax documentation provided.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="donation-amounts">
                <button className="amount-btn">$25</button>
                <button className="amount-btn">$50</button>
                <button className="active amount-btn">$100</button>
                <button className="amount-btn">$250</button>
                <input
                  type="text"
                  placeholder="Custom amount"
                  className="custom-amount"
                />
              </div>
              <div className="donation-frequency">
                <label className="frequency-option">
                  <input
                    type="radio"
                    name="frequency"
                    value="once"
                    checked="true"
                  />
                  <span>One-time</span>
                </label>
                <label className="frequency-option">
                  <input type="radio" name="frequency" value="monthly" />
                  <span>Monthly</span>
                </label>
              </div>
              <button className="btn-lg btn btn-primary">Donate Now</button>
            </div>
            <div className="engagement-card">
              <h3>Stay Informed</h3>
              <p>
                {' '}
                Professional briefings sent monthly with event notices and
                exclusive donor updates.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="email-input"
                />
                <button className="btn-secondary btn">Sign Up</button>
              </div>
            </div>
            <div className="contact-card">
              <h3>Major Gifts &amp; Partnerships</h3>
              <p>
                {' '}
                For donations above $5,000 or partnership inquiries, request a
                personal meeting with our development director.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button className="btn-outline btn">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div
          aria-label="Sign up to TeleportHQ"
          className="events-calendar-container7"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="events-calendar-icon197"
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
          <span className="events-calendar-text213">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default EventsCalendar
