function copyAddress() {
  // Get the text content of the h5 element
  const addressText = document.getElementById("address").textContent

  // Create a temporary input element to copy the text
  const tempInput = document.createElement("input")
  tempInput.value = addressText
  document.body.appendChild(tempInput)

  // Select and copy the text
  tempInput.select()
  document.execCommand("copy")

  // Remove the temporary input element
  document.body.removeChild(tempInput)

  // Optional: Show a confirmation message
  alert("Address copied to clipboard!")
}

// slider
window.addEventListener("scroll", function () {
  const comixScroll = document.querySelector(".moving_comix_scroll")
  const comixContent = document.querySelector(".moving_comix_content")

  const scrollTop = window.scrollY
  const windowHeight = window.innerHeight
  const comixScrollTop = comixScroll.getBoundingClientRect().top + scrollTop
  const comixHeight = comixScroll.offsetHeight

  if (
    scrollTop + windowHeight > comixScrollTop &&
    scrollTop < comixScrollTop + comixHeight
  ) {
    const scrollPercentage =
      (scrollTop + windowHeight - comixScrollTop) / (windowHeight + comixHeight)

    const maxTranslate = comixContent.scrollWidth - comixScroll.offsetWidth
    const translateX = Math.min(maxTranslate, maxTranslate * scrollPercentage)

    comixContent.style.transform = `translateX(-${translateX}px)`
  }
})
