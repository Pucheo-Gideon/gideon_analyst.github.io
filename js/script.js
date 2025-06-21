document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const currentYearElement = document.getElementById("current-year")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }

  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle")
  const body = document.body
  const sunIcon = document.querySelector(".sun-icon")
  const moonIcon = document.querySelector(".moon-icon")

  // Check for saved theme preference or default to dark theme
  const savedTheme = localStorage.getItem("theme") || "dark"

  if (savedTheme === "light") {
    body.classList.remove("theme-dark")
    body.classList.add("theme-light")
    sunIcon.classList.add("hidden")
    moonIcon.classList.remove("hidden")
  }

  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("theme-dark")) {
      body.classList.remove("theme-dark")
      body.classList.add("theme-light")
      sunIcon.classList.add("hidden")
      moonIcon.classList.remove("hidden")
      localStorage.setItem("theme", "light")
    } else {
      body.classList.remove("theme-light")
      body.classList.add("theme-dark")
      sunIcon.classList.remove("hidden")
      moonIcon.classList.add("hidden")
      localStorage.setItem("theme", "dark")
    }
  })

  // Mobile menu toggle
  const menuButton = document.querySelector(".mobile-menu-button")
  const mobileMenu = document.querySelector(".mobile-menu")
  const menuOpen = document.querySelector(".menu-open")
  const menuClose = document.querySelector(".menu-close")

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
      menuOpen.classList.toggle("hidden")
      menuClose.classList.toggle("hidden")

      // If menu is now visible, set appropriate styles
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.style.transform = "translateY(0)"
        mobileMenu.style.opacity = "1"
        mobileMenu.style.maxHeight = "100vh"
      } else {
        mobileMenu.style.transform = "translateY(-100%)"
        mobileMenu.style.opacity = "0"
        mobileMenu.style.maxHeight = "0"
      }
    })
  }

  // Close mobile menu when clicking a link
  const mobileLinks = document.querySelectorAll(".mobile-nav-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")
      menuOpen.classList.remove("hidden")
      menuClose.classList.add("hidden")
      mobileMenu.style.transform = "translateY(-100%)"
      mobileMenu.style.opacity = "0"
      mobileMenu.style.maxHeight = "0"
    })
  })

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerOffset = 64 // Adjust for header height
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // View More Projects button
  const viewMoreBtn = document.getElementById("view-more-projects")
  const hiddenProjects = document.querySelector(".hidden-projects")

  if (viewMoreBtn && hiddenProjects) {
    viewMoreBtn.addEventListener("click", () => {
      hiddenProjects.classList.toggle("hidden")

      if (hiddenProjects.classList.contains("hidden")) {
        viewMoreBtn.textContent = "View More Projects"
      } else {
        viewMoreBtn.textContent = "View Less Projects"
      }
    })
  }

  // Image management - Easy way to change profile image
  const profileImage = document.getElementById("profile-image")
  if (profileImage) {
    // You can easily change the image source here
    // profileImage.src = "path/to/your/new/image.jpg";
  }
})
