const aboutLangs = ["ja", "en"];
const aboutParams = new URLSearchParams(window.location.search);
let aboutLang = aboutLangs.includes(aboutParams.get("lang"))
  ? aboutParams.get("lang")
  : localStorage.getItem("fateLanguage") || "ja";
if (!aboutLangs.includes(aboutLang)) {
  aboutLang = "ja";
}

const aboutText = {
  ja: {
    title: "FATE診断とは | FATE診断",
    nav: ["診断", "FATE診断とは", "ファッションタイプ"],
    heroTitle: "FATE診断とは",
    heroCopy:
      "FATE診断は、服を選ぶときに何を重視しているかを4つの尺度から整理し、4文字のファッションタイプとして表示する被服行動診断です。",
    scaleTitle: "4つの尺度",
    scales: [
      ["F：Functionality", "動きやすさ、保温性、通気性、丈夫さなど、衣服の機能面をどれくらい重視するかを表します。"],
      ["A：Appropriateness", "場面や社会的なふさわしさ、TPOに合った服装をどれくらい意識するかを表します。"],
      ["T：Trendiness", "最新のファッションや流行への関心、トレンドを取り入れる姿勢を表します。"],
      ["E：Economy", "価格、コストパフォーマンス、買いやすさをどれくらい重視するかを表します。"],
    ],
    codeTitle: "タイプコードの読み方",
    codeCopy:
      "各尺度の得点を先行研究の平均点を50%として換算し、50%以上か50%未満かで4つの対立軸に置き換えます。結果は4文字のファッションタイプとして表示されます。",
    axes: [
      ["Trendiness", "流行性", "T：Trend（トレンド）", "流行や話題のスタイルを積極的に取り入れたい傾向。", "O：Own-style（自分流）", "流行よりも、自分らしさや好みに合う服選びを重視する傾向。"],
      ["Functionality", "機能性", "F：Function（機能）", "動きやすさ、快適さ、丈夫さなど、服の実用面を重視する傾向。", "A：Appearance（見た目）", "着たときの印象、デザイン、雰囲気のよさを重視する傾向。"],
      ["Appropriateness", "適切性", "C：Context（場面）", "場所、相手、TPOに合う服装かどうかを意識する傾向。", "E：Expression（表現）", "場面への合わせ方よりも、自分の気分や個性の表現を大切にする傾向。"],
      ["Economy", "経済性", "P：Price（価格）", "価格の手頃さやコストパフォーマンスを重視する傾向。", "Q：Quality（品質）", "多少高くても、素材・作り・長く使える品質を重視する傾向。"],
    ],
    resultTitle: "結果で分かること",
    resultCopy: [
      "FATE診断では、服選びの良し悪しを判定するのではなく、あなたがどのような判断基準を持ちやすいかを可視化します。たとえば、機能性を重視する人もいれば、見た目の印象や自己表現を大切にする人もいます。価格を重視する人も、品質への投資を重視する人もいます。",
      "結果ページでは4つの特性バーと16タイプのキャラクターを表示します。自分の服選びの癖を知ることで、買い物の失敗を減らしたり、いつもとは少し違うコーディネートを考えたりする手がかりになります。",
    ],
    actions: ["診断を始める", "タイプ一覧を見る"],
    footer: "永野（1994）女子大学生基準の平均点を50%として換算しています。",
  },
  en: {
    title: "About FATE | FATE Personality",
    nav: ["Diagnosis", "About FATE", "Fashion Types"],
    heroTitle: "About FATE",
    heroCopy:
      "FATE is a clothing-behavior diagnosis that organizes what you value when choosing clothes into four scales and displays the result as a four-letter fashion type.",
    scaleTitle: "The Four Scales",
    scales: [
      ["F: Functionality", "How much you value movement, warmth, breathability, durability, and other practical functions of clothing."],
      ["A: Appropriateness", "How much you care about social appropriateness, TPO, and dressing for the situation."],
      ["T: Trendiness", "Your interest in current fashion, trends, and incorporating what is popular."],
      ["E: Economy", "How much you value price, cost performance, and ease of purchase."],
    ],
    codeTitle: "How to Read the Type Code",
    codeCopy:
      "Each scale is converted so that the prior-study average is 50%. Scores above or below 50% are mapped onto four opposing axes, then shown as a four-letter fashion type.",
    axes: [
      ["Trendiness", "Trend orientation", "T: Trend", "A tendency to actively adopt popular or current styles.", "O: Own-style", "A tendency to prioritize personal taste over trends."],
      ["Functionality", "Functional orientation", "F: Function", "A tendency to value comfort, movement, durability, and practical use.", "A: Appearance", "A tendency to value impression, design, and visual atmosphere."],
      ["Appropriateness", "Context orientation", "C: Context", "A tendency to consider place, people, and TPO when dressing.", "E: Expression", "A tendency to value mood, individuality, and self-expression."],
      ["Economy", "Economic orientation", "P: Price", "A tendency to value affordability and cost performance.", "Q: Quality", "A tendency to value materials, construction, and long-term quality even at a higher price."],
    ],
    resultTitle: "What the Result Shows",
    resultCopy: [
      "FATE does not judge whether your fashion choices are right or wrong. It visualizes the standards you tend to use when choosing clothes. Some people prioritize function, while others value appearance or self-expression. Some focus on price, while others invest in quality.",
      "The result page shows four trait bars and one of 16 characters. Understanding your clothing-choice habits can help reduce shopping mistakes and give you ideas for trying outfits slightly outside your usual pattern.",
    ],
    actions: ["Start Diagnosis", "See Type List"],
    footer: "Scores are converted using the Nagano (1994) female university student average as 50%.",
  },
};

function renderAbout() {
  const text = aboutText[aboutLang];
  document.documentElement.lang = aboutLang;
  document.title = text.title;
  localStorage.setItem("fateLanguage", aboutLang);
  document.querySelectorAll(".site-nav__links a").forEach((link, index) => {
    link.textContent = text.nav[index];
    const href = link.getAttribute("href").split("?")[0];
    link.href = `${href}?lang=${aboutLang}`;
  });
  document.querySelector(".site-nav__brand").href = `index.html?lang=${aboutLang}`;

  document.querySelector("main").innerHTML = `
    <section class="type-page-hero" aria-labelledby="about-title">
      <p class="eyebrow">About FATE</p>
      <h1 id="about-title">${text.heroTitle}</h1>
      <p>${text.heroCopy}</p>
    </section>
    <section class="panel about-section">
      <h2>${text.scaleTitle}</h2>
      <div class="about-grid">
        ${text.scales.map(([title, copy]) => `<article><h3>${title}</h3><p>${copy}</p></article>`).join("")}
      </div>
    </section>
    <section class="panel about-section">
      <h2>${text.codeTitle}</h2>
      <p>${text.codeCopy}</p>
      <div class="axis-table" role="table" aria-label="${text.codeTitle}">
        ${text.axes
          .map(
            ([axis, jp, high, highCopy, low, lowCopy]) => `
              <div role="row">
                <strong role="cell"><span>${axis}</span><small>${jp}</small></strong>
                <span role="cell"><b>${high}</b><small>${highCopy}</small></span>
                <span role="cell"><b>${low}</b><small>${lowCopy}</small></span>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
    <section class="panel about-section">
      <h2>${text.resultTitle}</h2>
      ${text.resultCopy.map((copy) => `<p>${copy}</p>`).join("")}
    </section>
    <div class="about-actions">
      <a class="primary" href="index.html?lang=${aboutLang}">${text.actions[0]}</a>
      <a class="secondary" href="fashion-types.html?lang=${aboutLang}">${text.actions[1]}</a>
    </div>
  `;
  document.querySelector("footer p:first-child").textContent = text.footer;
  document.querySelectorAll("[data-lang-choice]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langChoice === aboutLang);
    button.setAttribute("aria-pressed", String(button.dataset.langChoice === aboutLang));
  });
}

document.querySelectorAll("[data-lang-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    aboutLang = button.dataset.langChoice;
    localStorage.setItem("fateLanguage", aboutLang);
    window.location.href = `about.html?lang=${aboutLang}`;
  });
});

renderAbout();
