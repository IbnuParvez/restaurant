function homePage() {
  const div = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Odin's Bistros";

  const text = document.createElement("p");
  text.textContent =
    "Welcome to this beloved page which will serve with images of exquisite foods which will make your taste buds water";

  div.appendChild(heading);
  div.appendChild(text);
  return div;
}

export default homePage;
