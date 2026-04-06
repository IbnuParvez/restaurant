function contactPage() {
  const contactInfo = document.createElement("div");

  const header = document.createElement("h2");
  header.textContent = "Contact us";

  const phone = document.createElement("p");
  phone.textContent = "Phone: +1 234 567 890";

  const address = document.createElement("p");
  address.textContent = "Address: 777 Valhalla Gate";

  const workingHours = document.createElement("p");
  workingHours.textContent = "AsgardHours: Mon - Sun: 5pm - 11pm";

  contactInfo.append(header, phone, address, workingHours);
  return contactInfo;
}

export default contactPage;
