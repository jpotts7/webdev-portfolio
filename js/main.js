//* Check to see if the document has loaded
if (document.readyState == "loading") {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  //* Select the scroll button element
  const scrollToTopButton = document.querySelector('.scrollButton');

  //* Add click functionality to the button element
  scrollToTopButton.addEventListener('click', scrollToTop);

  //* Define the scroll behavior and destination
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
