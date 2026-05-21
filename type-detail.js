const detail = document.querySelector("#type-detail");
const params = new URLSearchParams(window.location.search);
const detailLangs = ["ja", "en"];
let detailLang = detailLangs.includes(params.get("lang"))
  ? params.get("lang")
  : localStorage.getItem("fateLanguage") || "ja";
if (!detailLangs.includes(detailLang)) {
  detailLang = "ja";
}
const requestedType = params.get("type")?.toUpperCase();
const code = typeData[requestedType] ? requestedType : "TFCP";
const type = detailLang === "en" ? { ...typeData[code], ...typeDataEn[code] } : typeData[code];
const extended = typeDetailContent[code];
const extendedEn =
  typeof typeDetailContentEn !== "undefined" && typeDetailContentEn[code]
    ? typeDetailContentEn[code]
    : null;
const typeColor = getTypeColor(code);

const detailText = {
  ja: {
    titleSuffix: "FATE診断",
    nav: ["診断", "FATE診断とは", "ファッションタイプ"],
    overview: "タイプの全体像",
    style: "服選びの傾向",
    strengths: "このタイプの強み",
    blindspots: "気をつけたいところ",
    advice: "活かし方とおすすめコーデ",
    men: "男性におすすめ",
    women: "女性におすすめ",
    reading: "タイプの読み方",
    character: "キャラクター",
    axes: ["流行との距離感", "機能性と見た目の重心", "場面適合と自己表現の重心", "価格と品質の重心"],
    back: "ファッションタイプ一覧へ戻る",
    footer: "各タイプ説明は、FATEの4尺度をもとに被服行動の特徴として整理しています。",
  },
  en: {
    titleSuffix: "FATE Personality",
    nav: ["Diagnosis", "About FATE", "Fashion Types"],
    overview: "Overview",
    style: "Clothing Choice Tendencies",
    strengths: "Strengths",
    blindspots: "Blind Spots",
    advice: "How to Use This Type",
    men: "Recommended Outfit for Men",
    women: "Recommended Outfit for Women",
    reading: "How to Read This Type",
    character: "Character",
    axes: ["Relationship with trends", "Function vs. appearance", "Context vs. expression", "Price vs. quality"],
    back: "Back to Fashion Types",
    footer: "Each type explanation is organized as a clothing behavior profile based on the four FATE scales.",
  },
};

const labels = detailText[detailLang];
const content = detailLang === "en" && extendedEn ? extendedEn : extended;

document.documentElement.lang = detailLang;
document.title = `${type.name} (${code}) | ${labels.titleSuffix}`;
localStorage.setItem("fateLanguage", detailLang);
document.querySelectorAll(".site-nav__links a").forEach((link, index) => {
  link.textContent = labels.nav[index];
  const href = link.getAttribute("href").split("?")[0];
  link.href = `${href}?lang=${detailLang}`;
});
document.querySelector(".site-nav__brand").href = `index.html?lang=${detailLang}`;
document.querySelector("footer p:first-child").textContent = labels.footer;
document.querySelectorAll("[data-lang-choice]").forEach((button) => {
  button.classList.toggle("is-active", button.dataset.langChoice === detailLang);
  button.setAttribute("aria-pressed", String(button.dataset.langChoice === detailLang));
  button.addEventListener("click", () => {
    detailLang = button.dataset.langChoice;
    localStorage.setItem("fateLanguage", detailLang);
    window.location.href = `type-detail.html?type=${code}&lang=${detailLang}`;
  });
});

function renderParagraphs(paragraphs) {
  return paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

detail.innerHTML = `
  <article>
    <section class="panel type-detail-hero" style="--type-color: ${typeColor}">
      <div class="type-detail-visual">
        <img src="${type.image}" alt="${type.name}のキャラクター" />
      </div>
      <div class="type-detail-copy">
        <span class="type-code">${code}</span>
        <h1>${type.name}</h1>
        <p>${content.story[0]}</p>
        <div class="type-axis-chips" aria-label="タイプ軸">
          ${type.axes.map((axis) => `<span>${axis}</span>`).join("")}
        </div>
      </div>
    </section>

    <div class="type-detail-sections">
      <div class="panel type-article">
        <section>
          <h2>${labels.overview}</h2>
          ${renderParagraphs(content.story.slice(1))}
        </section>
        <section>
          <h2>${labels.style}</h2>
          <p>${type.sections.style}</p>
        </section>
        <section>
          <h2>${labels.strengths}</h2>
          <p>${type.sections.strengths}</p>
        </section>
        <section>
          <h2>${labels.blindspots}</h2>
          <p>${type.sections.blindspots}</p>
        </section>
        <section>
          <h2>${labels.advice}</h2>
          <p>${type.sections.advice}</p>
          <div class="outfit-recommendations">
            <div>
              <h3>${labels.men}</h3>
              <p>${content.outfits.men}</p>
            </div>
            <div>
              <h3>${labels.women}</h3>
              <p>${content.outfits.women}</p>
            </div>
          </div>
        </section>
      </div>

      <aside class="panel type-side-panel">
        <section>
          <h2>${labels.reading}</h2>
          <ul>
            <li>${type.axes[0]}: ${labels.axes[0]}</li>
            <li>${type.axes[1]}: ${labels.axes[1]}</li>
            <li>${type.axes[2]}: ${labels.axes[2]}</li>
            <li>${type.axes[3]}: ${labels.axes[3]}</li>
          </ul>
        </section>
        <section>
          <h2>${labels.character}</h2>
          <ul>
            <li>${type.character}</li>
            <li>${type.tagline}</li>
          </ul>
        </section>
      </aside>
    </div>
  </article>
  <a class="back-link" href="fashion-types.html?lang=${detailLang}">${labels.back}</a>
`;
