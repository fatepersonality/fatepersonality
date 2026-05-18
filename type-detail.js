const detail = document.querySelector("#type-detail");
const params = new URLSearchParams(window.location.search);
const requestedType = params.get("type")?.toUpperCase();
const code = typeData[requestedType] ? requestedType : "TFCP";
const type = typeData[code];
const extended = typeDetailContent[code];
const typeColor = getTypeColor(code);

document.title = `${type.name} (${code}) | FATE診断`;

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
        <p>${extended.story[0]}</p>
        <div class="type-axis-chips" aria-label="タイプ軸">
          ${type.axes.map((axis) => `<span>${axis}</span>`).join("")}
        </div>
      </div>
    </section>

    <div class="type-detail-sections">
      <div class="panel type-article">
        <section>
          <h2>タイプの全体像</h2>
          ${renderParagraphs(extended.story.slice(1))}
        </section>
        <section>
          <h2>服選びの傾向</h2>
          <p>${type.sections.style}</p>
        </section>
        <section>
          <h2>このタイプの強み</h2>
          <p>${type.sections.strengths}</p>
        </section>
        <section>
          <h2>気をつけたいところ</h2>
          <p>${type.sections.blindspots}</p>
        </section>
        <section>
          <h2>活かし方とおすすめコーデ</h2>
          <p>${type.sections.advice}</p>
          <div class="outfit-recommendations">
            <div>
              <h3>男性におすすめ</h3>
              <p>${extended.outfits.men}</p>
            </div>
            <div>
              <h3>女性におすすめ</h3>
              <p>${extended.outfits.women}</p>
            </div>
          </div>
        </section>
      </div>

      <aside class="panel type-side-panel">
        <section>
          <h2>タイプの読み方</h2>
          <ul>
            <li>${type.axes[0]}: 流行との距離感</li>
            <li>${type.axes[1]}: 機能性と見た目の重心</li>
            <li>${type.axes[2]}: 場面適合と自己表現の重心</li>
            <li>${type.axes[3]}: 価格と品質の重心</li>
          </ul>
        </section>
        <section>
          <h2>キャラクター</h2>
          <ul>
            <li>${type.character}</li>
            <li>${type.tagline}</li>
          </ul>
        </section>
      </aside>
    </div>
  </article>
  <a class="back-link" href="fashion-types.html">ファッションタイプ一覧へ戻る</a>
`;
