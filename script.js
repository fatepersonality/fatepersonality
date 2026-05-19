const scales = [
  {
    key: "F",
    label: "Functionality",
    jp: "機能性",
    mean: 23.8,
    high: "F",
    low: "A",
    highLabel: "Function",
    lowLabel: "Appearance",
    questions: [
      "衣服のデザインよりはそれを着たときの動きやすさを重視する",
      "保温性や通気性の良い服を選ぶ",
      "華美さよりは機能性を重視して衣服を選ぶ",
      "吸湿性の良い生地の服を選ぶ",
      "丈夫で長持ちする服が良い",
    ],
  },
  {
    key: "A",
    label: "Appropriateness",
    jp: "適切性",
    mean: 26.7,
    high: "C",
    low: "E",
    highLabel: "Context",
    lowLabel: "Expression",
    questions: [
      "不謹慎だと人に思われる服装はしたくない",
      "その場に合った服装というものは必要であると思う",
      "その時の仕事の内容にふさわしい服装をするようにしている",
      "人が「場違いな」服装をしているのを見ることは耐え難い",
      "自分の着ている衣服が社会的にみてふさわしいものであるかどうかをいつも考える",
    ],
  },
  {
    key: "T",
    label: "Trendiness",
    jp: "流行性",
    mean: 20.7,
    high: "T",
    low: "O",
    highLabel: "Trend",
    lowLabel: "Own-style",
    questions: [
      "最新のファッションについて知るために多くの店を見てまわる",
      "最新のファッションを着るようにいつもこころがけている",
      "いまどのようなファッションがはやっているかについてよく知っている",
      "ファッション雑誌をよく読む",
      "自分自身を人と区別してより個性的に見せるために流行している服を着る",
    ],
  },
  {
    key: "E",
    label: "Economy",
    jp: "経済性",
    mean: 14.5,
    high: "P",
    low: "Q",
    highLabel: "Price",
    lowLabel: "Quality",
    reverse: [3],
    questions: [
      "安い服であれば少しくらい気に入らなくても買うことがある",
      "百貨店やブティックよりは、スーパーマーケットで服を買うことが多い",
      "多少値段が高くても品質の良い衣服を選ぶ",
      "自分にとって高価な衣服は必要がないと思う",
      "どんなに気に入った服でも高ければ買わない",
    ],
  },
];

const typeProfiles = {
  TFCP: ["バランス隊長", "トレンド・機能・場面・価格をバランスよく見て賢く選ぶ万能型"],
  TFCQ: ["上質参謀", "機能・TPO・流行を押さえつつ、品質にも投資する型"],
  OFCP: ["王道プランナー", "流行に流されず、堅実で失敗しにくい型"],
  OFCQ: ["伝統キュレーター", "王道・上質・きちんと感を大切にする型"],
  TFEP: ["ストリート技師", "自由さがありつつ、機能と流行を両立する型"],
  TFEQ: ["都会の発明家", "個性・トレンド・機能を自分流で組み合わせる型"],
  OFEP: ["実用クラフター", "流行より自分の使いやすさとコスパを重視する型"],
  OFEQ: ["孤高のギア職人", "自分流で、機能と品質を突き詰める型"],
  TACP: ["スマート・スタイリスト", "見た目重視だが、場面と流行もきちんと押さえる型"],
  TACQ: ["ラグジュアリー監督", "見た目・TPO・流行・品質を重んじる洗練型"],
  OACP: ["シンプル調整役", "流行に流されず、見た目と場面の調和を大切にする型"],
  OACQ: ["エレガント収集家", "自分の美意識と上質さを静かに楽しむ型"],
  TAEP: ["ポップ発信者", "自由にトレンドを楽しみ、コスパも意識する型"],
  TAEQ: ["モードスター", "トレンドと自己表現、そして品質を楽しむ華やか型"],
  OAEP: ["自由デザイナー", "自分らしい見た目を大切にし、価格感覚もある型"],
  OAEQ: ["シグネチャー・アーティスト", "流行や常識に縛られず、自分の世界観と上質さを貫く型"],
};

const characterProfiles = {
  TFCP: ["キャプテン・バランサー", "#2f9f7f", "#d9ad3c", "cap", "chart"],
  TFCQ: ["シルク参謀", "#4467a8", "#c9a55a", "glasses", "tablet"],
  OFCP: ["クラシック航路士", "#49646f", "#8cb66d", "cap", "map"],
  OFCQ: ["ヘリテージ司書", "#6f5d8c", "#b8905c", "glasses", "book"],
  TFEP: ["ストリート・エンジニア", "#1f8f88", "#ef6b5a", "headphone", "wrench"],
  TFEQ: ["メトロ発明師", "#5c77c8", "#e2b64d", "goggles", "spark"],
  OFEP: ["ユーティリティ職人", "#577265", "#d08b42", "cap", "tool"],
  OFEQ: ["ギア・マイスター", "#45536a", "#8f78a8", "goggles", "gear"],
  TACP: ["スマート・スタイル案内人", "#c85d5a", "#4e9db7", "beret", "hanger"],
  TACQ: ["ラグジュアリー監督官", "#7f5b96", "#d8b45f", "beret", "gem"],
  OACP: ["ミニマル調整士", "#6b7d86", "#9cb36f", "cap", "ruler"],
  OACQ: ["エレガンス蒐集家", "#8f6382", "#caa66a", "beret", "pearl"],
  TAEP: ["ポップ・メッセンジャー", "#e15f75", "#41a6a3", "headphone", "megaphone"],
  TAEQ: ["モード・スター", "#b54f9b", "#e4b84e", "crown", "star"],
  OAEP: ["フリー・デザイナー", "#4f8fbd", "#ef8d54", "beret", "pen"],
  OAEQ: ["シグネチャー作家", "#775aa0", "#d15f73", "crown", "brush"],
};

const photoQuestionTexts = [
  "写真Nのスニーカーは信頼できる商品に見える。",
  "写真Nのスニーカーの作りは良さそうだ。",
  "写真Nのスニーカーは品質が高そうだ。",
  "写真Nのスニーカーは清潔感があると感じる。",
  "写真Nのスニーカーは洗練されている。",
  "写真Nのスニーカーを購入する可能性は高い。",
  "もしスニーカーを買うなら、写真Nの商品を検討したい。",
  "写真Nのスニーカーの置き方は見やすい。",
  "写真Nの置き方は、スニーカーのデザインを確認しやすい。",
  "写真Nの置き方は、スニーカーの形やシルエットを把握しやすい。",
  "写真Nの置き方は、スニーカーの魅力を伝えている。",
  "写真Nの置き方は、商品を比較する際に役立つ。",
  "写真Nのスニーカーは手に取りやすいと感じる。",
];

const commonQuestionTexts = [
  "スニーカーを購入する際、実際の店舗で商品を確認したい。",
  "店舗スタッフの対応が丁寧であれば、その店舗で購入したいと思う。",
  "店舗スタッフの対応に満足すれば、次もその店舗を利用したい。",
  "店舗で実際に商品を見ることで、安心して購入できる。",
  "スニーカーは実店舗よりもインターネットで購入したい。",
  "オンラインショップのスニーカー情報を信頼している。",
  "オンラインで購入することで、できるだけ時間を節約したい。",
  "写真やレビューが十分であれば、オンラインでスニーカーを購入できる。",
  "人気のあるスニーカーを履きたい。",
  "周囲で流行しているスニーカーは気になりやすい。",
  "まだ多くの人が履いていないスニーカーに魅力を感じる。",
  "話題性のあるスニーカーを購入したい。",
];

const photoFreeTextQuestion =
  "写真Nのスニーカーの置き方・見え方について、良いと思った点や気になった点を記入してください。(10文字以上)";

const photoSets = [
  {
    key: "R",
    label: "写真1",
    image: "assets/photos/photo1-right.png",
    alt: "写真1の靴売り場",
  },
  {
    key: "L",
    label: "写真2",
    image: "assets/photos/photo2-left.png",
    alt: "写真2の靴売り場",
  },
];

const quiz = document.querySelector("#quiz");
const photoStep = document.querySelector("#photo-step");
const intro = document.querySelector(".intro");
const contactStep = document.querySelector("#contact-step");
const contactForm = document.querySelector("#contact-form");
const contactError = document.querySelector("#contact-error");
const result = document.querySelector("#result");
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxDgTWI8XLrVb2zXV_23qw3Pv7zug3ZNclRtJKcTXTCx34IGSws-O0hyqLqlHaKqBbr/exec";

let pendingScores = null;
let pendingAnswers = null;
let pendingPhotoAnswers = null;
let pendingCommonAnswers = null;
let pendingPhotoFreeTextAnswer = null;
let selectedPhotoSet = null;
let photoAssignmentSequence = null;

function scorePercent(total, mean) {
  if (total <= mean) {
    return 50 * ((total - 5) / (mean - 5));
  }
  return 50 + 50 * ((total - mean) / (35 - mean));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function renderQuiz() {
  const fragment = document.createDocumentFragment();

  scales.forEach((scale) => {
    scale.questions.forEach((text, index) => {
      const number = index + 1;
      const id = `${scale.key}${number}`;
      fragment.append(createQuestionCard(id, text));
    });
  });

  const actions = document.createElement("div");
  actions.className = "actions";
  actions.innerHTML = `
    <button class="primary" type="submit" id="go-to-photo">次へ</button>
    <button class="secondary" type="reset">回答をリセット</button>
  `;

  const error = document.createElement("p");
  error.className = "form-error";
  error.id = "form-error";
  error.textContent = "未回答の項目があります。すべての項目に回答してください。";

  fragment.append(error, actions);
  quiz.append(fragment);
}

function renderPhotoStep(photo) {
  photoStep.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");
  section.className = "photo-section";
  section.innerHTML = `
    <img class="photo-section__image" src="${photo.image}" alt="${photo.alt}" />
    <div class="photo-section__body">
      <h2>${photo.label}</h2>
      <p>${photo.label}に置かれている靴について答えてください。</p>
    </div>
  `;
  fragment.append(section);

  photoQuestionTexts.forEach((text, index) => {
    const id = `P${index + 1}`;
    fragment.append(createQuestionCard(id, text.replaceAll("写真N", photo.label)));
  });

  commonQuestionTexts.forEach((text, index) => {
    const id = `C${index + 1}`;
    fragment.append(createQuestionCard(id, text));
  });

  fragment.append(createFreeTextCard(photoFreeTextQuestion.replaceAll("写真N", photo.label)));

  const error = document.createElement("p");
  error.className = "form-error";
  error.id = "photo-form-error";
  error.textContent = "未回答の項目があります。25問すべてに回答し、自由記述を10文字以上で入力してください。";

  const actions = document.createElement("div");
  actions.className = "actions";
  actions.innerHTML = `
    <button class="secondary" type="button" id="back-to-fate">FATE診断を修正する</button>
    <button class="primary" type="submit">診断する</button>
  `;

  fragment.append(error, actions);
  photoStep.append(fragment);
  document.querySelector("#back-to-fate").addEventListener("click", () => {
    photoStep.hidden = true;
    intro.hidden = false;
    quiz.hidden = false;
    quiz.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function createQuestionCard(id, text) {
  const card = document.createElement("div");
  card.className = "question-card";
  card.innerHTML = `
    <div class="question-head">
      <p>${text}</p>
    </div>
    <div class="choices" role="radiogroup" aria-label="${id}">
      <span class="choice-label choice-label--agree">そう思う</span>
      ${[
        { value: 7, size: 58, color: "var(--accent-2)" },
        { value: 6, size: 48, color: "var(--accent-2)" },
        { value: 5, size: 40, color: "var(--accent-2)" },
        { value: 4, size: 30, color: "var(--neutral)" },
        { value: 3, size: 40, color: "var(--disagree)" },
        { value: 2, size: 48, color: "var(--disagree)" },
        { value: 1, size: 58, color: "var(--disagree)" },
      ]
        .map(
          ({ value, size, color }) => `
            <label class="choice">
              <input type="radio" name="${id}" value="${value}" required />
              <span style="--size: ${size}px; --color: ${color}" aria-hidden="true"></span>
            </label>
          `,
        )
        .join("")}
      <span class="choice-label choice-label--disagree">そう思わない</span>
    </div>
  `;
  return card;
}

function createFreeTextCard(text) {
  const card = document.createElement("div");
  card.className = "question-card free-text-card";
  card.innerHTML = `
    <label class="free-text-field" for="photo-free-text">
      <span>${text}</span>
      <textarea id="photo-free-text" name="photoFreeText" rows="5" minlength="10" required></textarea>
    </label>
  `;
  return card;
}

function collectScores() {
  return scales.map((scale) => {
    const answers = scale.questions.map((_, index) => {
      const number = index + 1;
      const selected = quiz.querySelector(`input[name="${scale.key}${number}"]:checked`);
      const raw = Number(selected.value);
      return scale.reverse?.includes(number) ? 8 - raw : raw;
    });
    const total = answers.reduce((sum, value) => sum + value, 0);
    const percent = clamp(scorePercent(total, scale.mean), 0, 100);
    return { ...scale, total, percent };
  });
}

function collectAnswers() {
  return Object.fromEntries(
    scales.flatMap((scale) =>
      scale.questions.map((text, index) => {
        const number = index + 1;
        const id = `${scale.key}${number}`;
        const selected = quiz.querySelector(`input[name="${id}"]:checked`);
        return [
          id,
          {
            scale: scale.key,
            question: text,
            value: Number(selected.value),
            scoredValue: scale.reverse?.includes(number) ? 8 - Number(selected.value) : Number(selected.value),
          },
        ];
      }),
    ),
  );
}

function collectPhotoAnswers() {
  return Object.fromEntries(
    photoQuestionTexts.map((text, index) => {
      const number = index + 1;
      const id = `P${number}`;
      const selected = photoStep.querySelector(`input[name="${id}"]:checked`);
      return [
        id,
        {
          photo: selectedPhotoSet.label,
          photoKey: selectedPhotoSet.key,
          question: text.replaceAll("写真N", selectedPhotoSet.label),
          value: Number(selected.value),
        },
      ];
    }),
  );
}

function collectCommonAnswers() {
  return Object.fromEntries(
    commonQuestionTexts.map((text, index) => {
      const number = index + 1;
      const id = `C${number}`;
      const selected = photoStep.querySelector(`input[name="${id}"]:checked`);
      return [
        id,
        {
          question: text,
          value: Number(selected.value),
        },
      ];
    }),
  );
}

function collectPhotoFreeTextAnswer() {
  const textarea = photoStep.querySelector("#photo-free-text");
  const question = photoFreeTextQuestion.replaceAll("写真N", selectedPhotoSet.label);

  return {
    photo: selectedPhotoSet.label,
    photoKey: selectedPhotoSet.key,
    question,
    value: textarea.value.trim(),
  };
}

function getQuestionNames() {
  return scales.flatMap((scale) => scale.questions.map((_, index) => `${scale.key}${index + 1}`));
}

function getPhotoQuestionNames() {
  return [
    ...photoQuestionTexts.map((_, index) => `P${index + 1}`),
    ...commonQuestionTexts.map((_, index) => `C${index + 1}`),
  ];
}

function getType(scores) {
  const byKey = Object.fromEntries(scores.map((score) => [score.key, score]));
  return [
    byKey.T.percent >= 50 ? byKey.T.high : byKey.T.low,
    byKey.F.percent >= 50 ? byKey.F.high : byKey.F.low,
    byKey.A.percent >= 50 ? byKey.A.high : byKey.A.low,
    byKey.E.percent >= 50 ? byKey.E.high : byKey.E.low,
  ].join("");
}

function renderScores(scores) {
  const scoreList = document.querySelector("#score-list");
  const axisMeta = {
    T: { left: "Own-style", right: "Trend", color: "#5f9fba" },
    F: { left: "Appearance", right: "Function", color: "#d9ad3c" },
    A: { left: "Expression", right: "Context", color: "#55a36f" },
    E: { left: "Quality", right: "Price", color: "#8a66a0" },
  };
  const ordered = ["T", "F", "A", "E"].map((key) => {
    const score = scores.find((item) => item.key === key);
    const meta = axisMeta[key];
    const isHigh = score.percent >= 50;
    return {
      ...score,
      ...meta,
      activeLabel: isHigh ? meta.right : meta.left,
      marker: isHigh ? score.percent : 100 - score.percent,
    };
  });

  scoreList.innerHTML = ordered
    .map((score) => {
      return `
        <div class="trait-row" style="--trait-color: ${score.color}; --marker: ${score.marker}%">
          <div class="trait-row__score">
            <span>${score.percent.toFixed(0)}%</span> ${score.activeLabel}
            <button type="button" aria-label="${score.jp}の説明">?</button>
          </div>
          <div class="trait-bar" aria-hidden="true">
            <span></span>
          </div>
          <div class="trait-row__labels">
            <span>${score.left}</span>
            <span>${score.right}</span>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderCharacter(code) {
  const [characterName] = characterProfiles[code];
  const avatar = document.querySelector("#type-avatar");
  document.querySelector("#character-name").textContent = characterName;
  avatar.src = `assets/characters/${code}.png`;
}

function buildCharacterSvg(main, accent, headwear, item) {
  const headwearParts = {
    cap: `<path d="M95 60h72l10 22H86z" fill="${accent}"/><path d="M128 42l40 18H92z" fill="${main}"/>`,
    glasses: `<path d="M91 86h32m24 0h32M123 86h24" stroke="#303643" stroke-width="5" stroke-linecap="round"/><circle cx="106" cy="86" r="16" fill="none" stroke="#303643" stroke-width="5"/><circle cx="164" cy="86" r="16" fill="none" stroke="#303643" stroke-width="5"/>`,
    headphone: `<path d="M82 98v-9c0-35 24-58 53-58s53 23 53 58v9" fill="none" stroke="${accent}" stroke-width="10" stroke-linecap="round"/><rect x="68" y="92" width="23" height="45" rx="10" fill="${main}"/><rect x="179" y="92" width="23" height="45" rx="10" fill="${main}"/>`,
    goggles: `<path d="M88 70h94l-8 31H96z" fill="${accent}"/><circle cx="113" cy="86" r="15" fill="#eaf6f8"/><circle cx="157" cy="86" r="15" fill="#eaf6f8"/>`,
    beret: `<path d="M80 62c23-29 82-31 112 2-19 17-80 24-112-2z" fill="${main}"/><path d="M130 42l18-16" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>`,
    crown: `<path d="M87 78l13-38 29 30 29-30 25 38z" fill="${accent}"/><path d="M90 78h90v18H90z" fill="${main}"/>`,
  };

  const itemParts = {
    chart: `<path d="M184 182h46v54h-46z" fill="#f5f7f8" stroke="${main}" stroke-width="5"/><path d="M193 218l10-16 12 8 9-18" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>`,
    tablet: `<rect x="184" y="174" width="48" height="66" rx="7" fill="#f5f7f8" stroke="${main}" stroke-width="5"/><circle cx="208" cy="228" r="3" fill="${main}"/>`,
    map: `<path d="M181 178l24-10 24 10v58l-24-10-24 10z" fill="#f5f7f8" stroke="${main}" stroke-width="5"/><path d="M205 169v56" stroke="${accent}" stroke-width="4"/>`,
    book: `<path d="M178 180h58v58h-58z" fill="${main}"/><path d="M186 188h42v42h-42z" fill="#fff" opacity=".72"/>`,
    wrench: `<path d="M190 170l38 38-14 14-38-38c-11 4-24 2-33-7 11 0 18-4 22-12s4-16 1-25c10 4 17 12 19 23z" fill="${accent}"/>`,
    spark: `<path d="M204 160l10 28 29 8-27 12-8 30-13-28-29-8 27-13z" fill="${accent}"/>`,
    tool: `<path d="M185 170h16v66h-16zM210 170h16v66h-16z" fill="${accent}"/><path d="M180 168h51v14h-51z" fill="${main}"/>`,
    gear: `<circle cx="205" cy="204" r="30" fill="${accent}"/><circle cx="205" cy="204" r="12" fill="#fff"/><path d="M205 164v18M205 226v18M165 204h18M227 204h18M177 176l13 13M220 219l13 13M233 176l-13 13M190 219l-13 13" stroke="${main}" stroke-width="7" stroke-linecap="round"/>`,
    hanger: `<path d="M204 171c0-13 20-11 13 3-4 7-13 8-13 18" fill="none" stroke="${accent}" stroke-width="6" stroke-linecap="round"/><path d="M204 192l-40 32h80z" fill="none" stroke="${main}" stroke-width="6" stroke-linejoin="round"/>`,
    gem: `<path d="M204 166l34 22-34 50-34-50z" fill="${accent}"/><path d="M170 188h68M190 188l14 50 14-50" stroke="#fff" stroke-width="4" opacity=".7"/>`,
    ruler: `<path d="M180 175l52 52-12 12-52-52z" fill="${accent}"/><path d="M186 184l8-8M198 196l8-8M210 208l8-8" stroke="#fff" stroke-width="3"/>`,
    pearl: `<circle cx="204" cy="204" r="32" fill="#f3eee4" stroke="${accent}" stroke-width="6"/><circle cx="193" cy="193" r="8" fill="#fff"/>`,
    megaphone: `<path d="M174 197l55-25v60l-55-25z" fill="${accent}"/><path d="M169 194h18v18h-18zM188 211l10 28" stroke="${main}" stroke-width="8" stroke-linecap="round"/>`,
    star: `<path d="M204 160l12 31 33 2-26 21 8 32-27-18-28 18 9-32-27-21 33-2z" fill="${accent}"/>`,
    pen: `<path d="M176 230l14-42 38-38 24 24-38 38z" fill="${accent}"/><path d="M190 188l24 24M172 238l18-8" stroke="${main}" stroke-width="6" stroke-linecap="round"/>`,
    brush: `<path d="M176 232c14 2 30-4 31-18l37-52-17-12-36 53c-13 1-19 14-15 29z" fill="${accent}"/><path d="M174 233c-4 15-16 22-31 23 8-10 8-22 17-29z" fill="${main}"/>`,
  };

  return `
    <svg viewBox="0 0 270 300" role="img" aria-label="">
      <ellipse cx="135" cy="266" rx="88" ry="12" fill="#dfe3e7"/>
      ${headwearParts[headwear]}
      <path d="M87 117c0-37 20-58 48-58s48 21 48 58c0 35-21 59-48 59s-48-24-48-59z" fill="#c99c78"/>
      <path d="M96 112c12 6 25 7 39-8 13 15 28 18 42 10-4-31-19-48-42-48-24 0-39 17-39 46z" fill="#303643" opacity=".72"/>
      <circle cx="116" cy="118" r="5" fill="#303643"/><circle cx="154" cy="118" r="5" fill="#303643"/>
      <path d="M121 145c11 8 23 8 34 0" fill="none" stroke="#72513f" stroke-width="5" stroke-linecap="round"/>
      <path d="M87 188l34-31h28l34 31-17 76H104z" fill="${main}"/>
      <path d="M121 157l14 34 14-34z" fill="#fff"/>
      <path d="M84 194l-28 48M186 194l32 38" stroke="${main}" stroke-width="18" stroke-linecap="round"/>
      <path d="M105 264h24M143 264h24" stroke="#6d5167" stroke-width="14" stroke-linecap="round"/>
      ${itemParts[item]}
    </svg>
  `;
}

function showResult(scores) {
  const code = getType(scores);
  const [name, copy] = typeProfiles[code];
  document.querySelector("#type-code").textContent = `(${code})`;
  document.querySelector("#type-name").textContent = name;
  document.querySelector("#type-copy").textContent = copy;
  document.querySelector("#type-detail-link").href = `type-detail.html?type=${code}`;
  renderCharacter(code);
  document.querySelector("#result-date").textContent = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  renderScores(scores);
  result.hidden = false;
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildSubmission(user, scores) {
  const code = getType(scores);
  const [typeName, typeCopy] = typeProfiles[code];
  return {
    submittedAt: new Date().toISOString(),
    ...user,
    typeCode: code,
    typeName,
    typeCopy,
    scores: scores.map(({ key, jp, label, total, percent, mean }) => ({
      key,
      jp,
      label,
      total,
      percent: Number(percent.toFixed(1)),
      mean,
    })),
    answers: pendingAnswers,
    photoAnswers: pendingPhotoAnswers,
    commonAnswers: pendingCommonAnswers,
    photoFreeTextAnswer: pendingPhotoFreeTextAnswer,
    photoAssignment: {
      sequence: photoAssignmentSequence,
      photoKey: selectedPhotoSet.key,
      photoLabel: selectedPhotoSet.label,
    },
  };
}

async function submitToGoogle(payload) {
  if (!GOOGLE_SCRIPT_URL) {
    throw new Error("Google Apps Script のWebアプリURLがまだ設定されていません。");
  }

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });
}

function getFallbackPhotoAssignment() {
  const key = "fatePhotoAssignmentCount";
  const count = Number(localStorage.getItem(key) || "0") + 1;
  localStorage.setItem(key, String(count));
  return {
    sequence: count,
    photoKey: count % 2 === 1 ? "R" : "L",
  };
}

function requestPhotoAssignment() {
  return new Promise((resolve) => {
    if (!GOOGLE_SCRIPT_URL) {
      resolve(getFallbackPhotoAssignment());
      return;
    }

    const callbackName = `handleFatePhotoAssignment_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
    const script = document.createElement("script");
    const cleanup = () => {
      delete window[callbackName];
      script.remove();
    };
    const timer = window.setTimeout(() => {
      cleanup();
      resolve(getFallbackPhotoAssignment());
    }, 4000);

    window[callbackName] = (data) => {
      window.clearTimeout(timer);
      cleanup();
      if (data?.photoKey) {
        resolve(data);
      } else {
        resolve(getFallbackPhotoAssignment());
      }
    };

    const url = new URL(GOOGLE_SCRIPT_URL);
    url.searchParams.set("action", "assignPhoto");
    url.searchParams.set("callback", callbackName);
    script.onerror = () => {
      window.clearTimeout(timer);
      cleanup();
      resolve(getFallbackPhotoAssignment());
    };
    script.src = url.toString();
    document.body.append(script);
  });
}

renderQuiz();

const ageSelect = document.querySelector("#user-age");
for (let age = 10; age <= 80; age += 1) {
  const option = document.createElement("option");
  option.value = String(age);
  option.textContent = String(age);
  ageSelect.append(option);
}

document.querySelector("#privacy-consent").addEventListener("change", (event) => {
  document.querySelector("#send-result").disabled = !event.target.checked;
});

quiz.addEventListener("submit", async (event) => {
  event.preventDefault();
  const error = document.querySelector("#form-error");
  const nextButton = document.querySelector("#go-to-photo");
  const questionNames = getQuestionNames();
  const totalQuestions = questionNames.length;
  const answered = quiz.querySelectorAll("input[type='radio']:checked").length;

  if (answered !== totalQuestions) {
    error.classList.add("is-visible");
    error.textContent = `未回答の項目があります。${totalQuestions}問すべてに回答してください。`;
    const firstMissing = questionNames.find((name) => !quiz.querySelector(`input[name="${name}"]:checked`));
    quiz.querySelector(`input[name="${firstMissing}"]`)?.focus();
    return;
  }

  error.classList.remove("is-visible");
  pendingScores = collectScores();
  pendingAnswers = collectAnswers();
  nextButton.disabled = true;
  nextButton.textContent = "読み込み中...";

  const assignment = await requestPhotoAssignment();
  selectedPhotoSet = photoSets.find((photo) => photo.key === assignment.photoKey) || photoSets[0];
  photoAssignmentSequence = assignment.sequence;
  renderPhotoStep(selectedPhotoSet);

  quiz.hidden = true;
  intro.hidden = true;
  photoStep.hidden = false;
  result.hidden = true;
  contactStep.hidden = true;
  nextButton.disabled = false;
  nextButton.textContent = "次へ";
  photoStep.scrollIntoView({ behavior: "smooth", block: "start" });
});

quiz.addEventListener("reset", () => {
  document.querySelector("#form-error").classList.remove("is-visible");
  photoStep.hidden = true;
  photoStep.innerHTML = "";
  contactStep.hidden = true;
  intro.hidden = false;
  quiz.hidden = false;
  result.hidden = true;
  pendingScores = null;
  pendingAnswers = null;
  pendingPhotoAnswers = null;
  pendingCommonAnswers = null;
  pendingPhotoFreeTextAnswer = null;
  selectedPhotoSet = null;
  photoAssignmentSequence = null;
});

document.querySelector("#back-to-quiz").addEventListener("click", () => {
  contactStep.hidden = true;
  photoStep.hidden = false;
  photoStep.scrollIntoView({ behavior: "smooth", block: "start" });
});

photoStep.addEventListener("submit", (event) => {
  event.preventDefault();
  const error = document.querySelector("#photo-form-error");
  const questionNames = getPhotoQuestionNames();
  const answered = photoStep.querySelectorAll("input[type='radio']:checked").length;
  const freeText = photoStep.querySelector("#photo-free-text");
  const freeTextValue = freeText.value.trim();

  if (answered !== questionNames.length) {
    error.classList.add("is-visible");
    error.textContent = "未回答の項目があります。25問すべてに回答し、自由記述を10文字以上で入力してください。";
    const firstMissing = questionNames.find((name) => !photoStep.querySelector(`input[name="${name}"]:checked`));
    photoStep.querySelector(`input[name="${firstMissing}"]`)?.focus();
    return;
  }

  if (freeTextValue.length < 10) {
    error.classList.add("is-visible");
    error.textContent = "自由記述は10文字以上で入力してください。";
    freeText.focus();
    return;
  }

  error.classList.remove("is-visible");
  pendingPhotoAnswers = collectPhotoAnswers();
  pendingCommonAnswers = collectCommonAnswers();
  pendingPhotoFreeTextAnswer = collectPhotoFreeTextAnswer();
  photoStep.hidden = true;
  contactStep.hidden = false;
  contactStep.scrollIntoView({ behavior: "smooth", block: "start" });
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = document.querySelector("#send-result");
  const user = {
    name: document.querySelector("#user-name").value.trim(),
    email: document.querySelector("#user-email").value.trim(),
    age: document.querySelector("#user-age").value,
    sneakerFrequency: document.querySelector("#sneaker-frequency").value,
    handedness: contactForm.elements.handedness.value,
    privacyConsent: document.querySelector("#privacy-consent").checked,
  };

  if (!contactForm.reportValidity()) {
    contactError.textContent = "未入力の項目があります。必須項目を入力し、同意欄にチェックしてください。";
    contactError.classList.add("is-visible");
    return;
  }

  contactError.classList.remove("is-visible");
  submitButton.disabled = true;
  submitButton.textContent = "送信中...";

  try {
    await submitToGoogle(buildSubmission(user, pendingScores));
    contactStep.hidden = true;
    showResult(pendingScores);
  } catch (error) {
    contactError.textContent = error.message;
    contactError.classList.add("is-visible");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "診断結果を見る";
  }
});
