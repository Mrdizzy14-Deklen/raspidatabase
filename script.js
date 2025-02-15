// Simple password (replace this with your desired password)
const correctPassword = "your_password_here"

function checkPassword() {
  const password = document.getElementById("password").value
  const messageElement = document.getElementById("message")

  if (password === correctPassword) {
    window.location.href = "data-entry.html"
  } else {
    showMessage("Incorrect password. Please try again.", "error")
    document.getElementById("password").value = ""
  }
}

function validateNetId() {
  const netIdInput = document.getElementById("netId")
  const netIdPattern = /^[A-Za-z]{3}\d{6}$/

  if (netIdPattern.test(netIdInput.value)) {
    netIdInput.classList.remove("invalid-input")
  } else {
    netIdInput.classList.add("invalid-input")
  }
}

function validateSwipe() {
  const swipeInput = document.getElementById("swipe")
  const swipePattern = /^;\d{16}$/

  if (swipePattern.test(swipeInput.value)) {
    swipeInput.classList.remove("invalid-input")
  } else {
    swipeInput.classList.add("invalid-input")
  }
}

function submitData() {
  const name = document.getElementById("name").value
  const netId = document.getElementById("netId").value
  const swipe = document.getElementById("swipe").value

  const netIdPattern = /^[A-Za-z]{3}\d{6}$/
  const swipePattern = /^;\d{16}$/

  if (name && netIdPattern.test(netId) && swipePattern.test(swipe)) {
    // Here you would typically send the data to your database
    // For this example, we'll just log it to the console
    console.log("Data submitted:", { name, netId, swipe })

    showMessage("Data submitted successfully!", "success")
    clearInputs()
  } else {
    showMessage("Please fill in all fields correctly.", "error")
  }
}

function clearInputs() {
  document.getElementById("name").value = ""
  document.getElementById("netId").value = ""
  document.getElementById("swipe").value = ""
  document.getElementById("netId").classList.remove("invalid-input")
  document.getElementById("swipe").classList.remove("invalid-input")
}

function showMessage(text, type) {
  const messageElement = document.getElementById("message")
  messageElement.textContent = text
  messageElement.className = "message " + type
  messageElement.style.display = "block"

  // Hide the message after 3 seconds
  setTimeout(() => {
    messageElement.style.display = "none"
  }, 3000)
}

