const list = document.querySelector("#type-category-list");
const fashionLangs = ["ja", "en"];
const fashionParams = new URLSearchParams(window.location.search);
let fashionLang = fashionLangs.includes(fashionParams.get("lang"))
  ? fashionParams.get("lang")
  : localStorage.getItem("fateLanguage") || "ja";
if (!fashionLangs.includes(fashionLang)) {
  fashionLang = "ja";
}

const fashionText = {
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
  const text = fashionText[fashionLang];
  document.documentElement.lang = fashionLang;
  document.title = text.title;
  localStorage.setItem("fateLanguage", fashionLang);
  document.querySelectorAll(".site-nav__links a").forEach((link, index) => {
    link.textContent = text.nav[index];
    const href = link.getAttribute("href").split("?")[0];
    link.href = `${href}?lang=${fashionLang}`;
  });
  document.querySelector(".site-nav__brand").href = `index.html?lang=${fashionLang}`;
  document.querySelector("#type-page-title").textContent = text.heroTitle;
  document.querySelector(".type-page-hero p:last-child").textContent = text.heroCopy;
  document.querySelector("footer p:first-child").textContent = text.footer;
  document.querySelectorAll("[data-lang-choice]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langChoice === fashionLang);
    button.setAttribute("aria-pressed", String(button.dataset.langChoice === fashionLang));
  });
}

document.querySelectorAll("[data-lang-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    fashionLang = button.dataset.langChoice;
    localStorage.setItem("fateLanguage", fashionLang);
    window.location.href = `fashion-types.html?lang=${fashionLang}`;
  });
});

function renderTypeCard(code) {
  const type = fashionLang === "en" ? { ...typeData[code], ...typeDataEn[code] } : typeData[code];
  return `
    <a class="fashion-type-card" style="--type-color: ${getTypeColor(code)}" href="type-detail.html?type=${code}&lang=${fashionLang}">
      <div class="fashion-type-card__visual">
        <img src="${type.image}" alt="${type.name}" loading="lazy" />
      </div>
      <div class="fashion-type-card__body">
        <small>${code}</small>
        <h3>${type.name}</h3>
        <p>${type.tagline}</p>
      </div>
    </a>
  `;
}

function renderFashionTypes() {
  const groups = fashionLang === "en" ? typeGroupsEn : typeGroups;
  list.innerHTML = groups
    .map(
      (group) => `
      <section class="panel type-category" style="--type-color: ${group.color}" aria-labelledby="${group.id}">
        <h2 id="${group.id}">${group.title}</h2>
        <p class="type-category__copy">${group.copy}</p>
        <div class="type-grid">
          ${group.codes.map(renderTypeCard).join("")}
        </div>
      </section>
    `,
    )
    .join("");
}

setupFashionLanguage();
renderFashionTypes();

