const dishes = [
  {
    name: "Hokkaido Scallops",
    info: "Pan-seared with brown butter, cauliflower purée, and a touch of truffle oil.",
    price: "$24",
  },
  {
    name: "Wagyu Beef Carpaccio",
    info: "A5 Wagyu slices topped with capers, shaved parmesan, and lemon-infused olive oil.",
    price: "$28",
  },
  {
    name: "The Odin Tomahawk",
    info: "45-day dry-aged beef, char-grilled over white oak with roasted garlic.",
    price: "$110",
  },
  {
    name: "Black Truffle Risotto",
    info: "Arborio rice with wild mushrooms, aged Pecorino, and fresh winter truffles.",
    price: "$38",
  },
  {
    name: "Miso-Glazed Black Cod",
    info: "24-hour marinated cod served with baby bok choy and ginger-soy reduction.",
    price: "$42",
  },
  {
    name: "Herb-Crusted Lamb Rack",
    info: "Grass-fed lamb with pistachio crust over mint-infused pea purée.",
    price: "$48",
  },
  {
    name: "Dark Chocolate Sphere",
    info: "70% cacao shell with salted caramel sauce and vanilla bean gelato.",
    price: "$18",
  },
  {
    name: "Matcha Mille Crêpe",
    info: "Twenty layers of handmade crêpes with ceremonial-grade matcha cream.",
    price: "$16",
  },
];

function menuPage() {
  const menu = document.createElement("div");

  const header = document.createElement("h1");
  header.textContent = "The Menu 😋";

  /*const menuItem1 = document.createElement("div");
  const header1 = document.createElement("h3");
  header1.textContent = "Hokkaido Scallops";
  const para1 = document.createElement("p");
  para1.textContent =
    "Info: Pan-seared with brown butter, cauliflower purée, and a touch of truffle oil.";
  const price1 = document.createElement("span");
  price1.textContent = "$2.4";

  menuItem1.appendChild(header1);
  menuItem1.appendChild(para1);
  menuItem1.appendChild(price1);*/
  menu.appendChild(header);
  dishes.forEach((dish) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu-item");
    const dishTitle = document.createElement("h3");
    dishTitle.textContent = dish.name;

    const paragraph = document.createElement("p");
    paragraph.textContent = dish.info;

    const price = document.createElement("span");
    price.textContent = dish.price;

    itemDiv.append(dishTitle, paragraph, price);
    menu.appendChild(itemDiv);
  });
  return menu;
}

export default menuPage;
