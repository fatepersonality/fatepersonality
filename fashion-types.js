var list = document.querySelector("#type-category-list");
var fashionLangs = ["ja", "en"];
var fashionParams = new URLSearchParams(window.location.search);
var requestedFashionLang = fashionParams.get("lang");
var fashionLang = fashionLangs.indexOf(requestedFashionLang) !== -1
  ? requestedFashionLang
  : localStorage.getItem("fateLanguage") || "ja";

if (fashionLangs.indexOf(fashionLang) === -1) {
  fashionLang = "ja";
}

var fashionText = {
  ja: {
    title: "ファッションタイプ | FATE診断",
    nav: ["診断", "FATE診断とは", "ファッションタイプ"],
    heroTitle: "ファッションタイプ",
    heroCopy:
      "FATE診断で表示される16タイプのまとめです。キャラクターを選ぶと、そのタイプの服選びの傾向、強み、注意点、活かし方を確認できます。",
    footer: "FATEの4尺度をもとに、被服行動の傾向をタイプ別に整理しています。",
  },
  en: {
    title: "Fashion Types | FATE Personality",
    nav: ["Diagnosis", "About FATE", "Fashion Types"],
    heroTitle: "Fashion Types",
    heroCopy:
      "This library summarizes the 16 types shown in FATE. Choose a character to see that type's clothing tendencies, strengths, blind spots, and styling ideas.",
    footer: "These types organize clothing behavior tendencies based on the four FATE scales.",
  },
};

function setupFashionLanguage() {
  var text = fashionText[fashionLang];
  var brand = document.querySelector(".site-nav__brand");
  var pageTitle = document.querySelector("#type-page-title");
  var heroCopy = document.querySelector(".type-page-hero p:last-child");
  var footerCopy = document.querySelector("footer p:first-child");

  document.documentElement.lang = fashionLang;
  document.title = text.title;
  localStorage.setItem("fateLanguage", fashionLang);

  document.querySelectorAll(".site-nav__links a").forEach(function (link, index) {
    link.textContent = text.nav[index];
    link.href = link.getAttribute("href").split("?")[0] + "?lang=" + fashionLang;
  });

  if (brand) {
    brand.href = "index.html?lang=" + fashionLang;
  }
  if (pageTitle) {
    pageTitle.textContent = text.heroTitle;
  }
  if (heroCopy) {
    heroCopy.textContent = text.heroCopy;
  }
  if (footerCopy) {
    footerCopy.textContent = text.footer;
  }

  document.querySelectorAll("[data-lang-choice]").forEach(function (button) {
    var isActive = button.dataset.langChoice === fashionLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

document.querySelectorAll("[data-lang-choice]").forEach(function (button) {
  button.addEventListener("click", function () {
    fashionLang = button.dataset.langChoice;
    localStorage.setItem("fateLanguage", fashionLang);
    window.location.href = "fashion-types.html?lang=" + fashionLang;
  });
});

function renderTypeCard(code) {
  var type = fashionLang === "en"
    ? Object.assign({}, typeData[code], typeDataEn[code])
    : typeData[code];

  return [
    '<a class="fashion-type-card" style="--type-color: ',
    getTypeColor(code),
    '" href="type-detail.html?type=',
    code,
    "&lang=",
    fashionLang,
    '">',
    '<div class="fashion-type-card__visual">',
    '<img src="',
    type.image,
    '" alt="',
    type.name,
    '" loading="lazy" />',
    "</div>",
    '<div class="fashion-type-card__body">',
    "<small>",
    code,
    "</small>",
    "<h3>",
    type.name,
    "</h3>",
    "<p>",
    type.tagline,
    "</p>",
    "</div>",
    "</a>",
  ].join("");
}

function renderFashionTypes() {
  var groups = fashionLang === "en" ? typeGroupsEn : typeGroups;

  if (!list) {
    return;
  }

  list.innerHTML = groups
    .map(function (group) {
      return [
        '<section class="panel type-category" style="--type-color: ',
        group.color,
        '" aria-labelledby="',
        group.id,
        '">',
        '<h2 id="',
        group.id,
        '">',
        group.title,
        "</h2>",
        '<p class="type-category__copy">',
        group.copy,
        "</p>",
        '<div class="type-grid">',
        group.codes.map(renderTypeCard).join(""),
        "</div>",
        "</section>",
      ].join("");
    })
    .join("");
}

setupFashionLanguage();
renderFashionTypes();
