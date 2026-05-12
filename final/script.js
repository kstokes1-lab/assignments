const items = [
  {
    name: "HTML and CSS",
    category: "Technology",
    description: "I am building my skills in HTML and CSS to create structured and styled web pages."
  },
  {
    name: "JavaScript",
    category: "Technology",
    description: "I am learning JavaScript to make websites more interactive and useful for visitors."
  },
  {
    name: "Digital Strategy",
    category: "Marketing",
    description: "I am interested in how businesses use digital platforms to reach the right audience."
  },
  {
    name: "Social Media Analytics",
    category: "Marketing",
    description: "I like learning how engagement data can help companies improve communication with customers."
  },
  {
    name: "Artist Development",
    category: "Music",
    description: "I am interested in how new artists build their image, audience, and performance opportunities."
  },
  {
    name: "Venue Connection App",
    category: "Music",
    description: "I want to explore an app idea that connects music artists with venues for live performances."
  }
];

function renderItems(list) {
  const container = document.getElementById("items-container");

  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const card = document.createElement("div");
    card.className = "item-card";

    card.innerHTML =
      "<h3>" + list[i].name + "</h3>" +
      "<p>" + list[i].description + "</p>" +
      "<span class='item-tag'>" + list[i].category + "</span>";

    container.appendChild(card);
  }

  document.getElementById("result-count").textContent =
    list.length + " items shown";
}

function filterItems(category) {
  switch (category) {
    case "":
      renderItems(items);
      break;

    case "Technology":
      const filtered1 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Technology") {
          filtered1.push(items[i]);
        }
      }
      renderItems(filtered1);
      break;

    case "Marketing":
      const filtered2 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Marketing") {
          filtered2.push(items[i]);
        }
      }
      renderItems(filtered2);
      break;

    case "Music":
      const filtered3 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Music") {
          filtered3.push(items[i]);
        }
      }
      renderItems(filtered3);
      break;

    default:
      renderItems(items);
      break;
  }
}

filterItems("");
