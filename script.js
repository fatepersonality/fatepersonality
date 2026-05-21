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
    questionsEn: [
      "I prioritize ease of movement over clothing design.",
      "I choose clothes with good warmth retention or breathability.",
      "I prioritize functionality over flashiness when choosing clothes.",
      "I choose clothes made from fabrics with good moisture absorption.",
      "I prefer clothes that are durable and long-lasting.",
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
    questionsEn: [
      "I do not want to wear clothing that others might see as inappropriate.",
      "I think it is necessary to dress appropriately for each situation.",
      "I try to dress in a way that fits the work or task I am doing.",
      "I find it hard to tolerate seeing someone dressed out of place.",
      "I often think about whether my clothing is socially appropriate.",
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
    questionsEn: [
      "I visit many stores to learn about the latest fashion.",
      "I always try to wear the latest fashion.",
      "I know well what kinds of fashion are currently popular.",
      "I often read fashion magazines.",
      "I wear trendy clothes to distinguish myself and look more individual.",
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
    questionsEn: [
      "If clothes are inexpensive, I may buy them even if I do not fully like them.",
      "I more often buy clothes at supermarkets than at department stores or boutiques.",
      "I choose high-quality clothes even if they are somewhat expensive.",
      "I do not think expensive clothes are necessary for me.",
      "No matter how much I like an item, I will not buy it if it is expensive.",
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

const typeProfilesEn = {
  TFCP: ["Balance Captain", "A versatile type who balances trend, function, context, and price with practical judgment."],
  TFCQ: ["Quality Strategist", "A type who understands trends and TPO while investing in lasting quality."],
  OFCP: ["Classic Planner", "A steady type who avoids chasing trends and makes reliable, low-risk choices."],
  OFCQ: ["Heritage Curator", "A type who values classic style, quality, and a polished sense of propriety."],
  TFEP: ["Street Engineer", "A type who combines freedom, function, and trend in an active streetwise way."],
  TFEQ: ["Urban Inventor", "A type who mixes individuality, trend, function, and quality in their own way."],
  OFEP: ["Utility Crafter", "A type who prioritizes usability, comfort, and cost performance over trends."],
  OFEQ: ["Gear Artisan", "A type who pursues their own standards of function, durability, and quality."],
  TACP: ["Smart Stylist", "A type who values appearance while keeping trends and context in mind."],
  TACQ: ["Luxury Director", "A polished type who values appearance, TPO, trends, and quality."],
  OACP: ["Simple Coordinator", "A type who values harmony between appearance and context without being led by trends."],
  OACQ: ["Elegant Collector", "A type who quietly enjoys personal taste, refinement, and quality."],
  TAEP: ["Pop Messenger", "A type who freely enjoys trends and expression while keeping price in mind."],
  TAEQ: ["Mode Star", "A vivid type who enjoys trend, self-expression, and quality."],
  OAEP: ["Free Designer", "A type who values their own look and expression while keeping a realistic sense of price."],
  OAEQ: ["Signature Artist", "A type who follows their own worldview and quality standards beyond trends or conventions."],
};

const typeShareDetails = {
  TFCP: {
    features: ["流行をほどよく取り入れる", "動きやすさとTPOの両方を見る", "価格感覚があり買い物上手"],
    match: "OACQ：エレガント収集家",
    caution: "全部を平均点以上に整えようとして、決めきれなくなることも。",
  },
  TFCQ: {
    features: ["流行と品質のバランスが上手", "機能性にもきちんとこだわる", "場面に合う上質感を選べる"],
    match: "OAEP：自由デザイナー",
    caution: "良いものを探しすぎて、買うまでに時間がかかることも。",
  },
  OFCP: {
    features: ["流行に流されにくい", "実用性と場面への安心感を重視", "堅実で失敗しにくい選び方"],
    match: "TAEQ：モードスター",
    caution: "無難さを優先しすぎて、新しい魅力を逃すことも。",
  },
  OFCQ: {
    features: ["王道で上質なものを好む", "きちんと感を自然に出せる", "長く使える服を選びやすい"],
    match: "TAEP：ポップ発信者",
    caution: "完成度を求めすぎて、遊び心を抑えがちになることも。",
  },
  TFEP: {
    features: ["トレンドと機能を両立する", "自由な着こなしを楽しめる", "街歩きに強い実用感がある"],
    match: "OACQ：エレガント収集家",
    caution: "自由さが先に立つと、場面とのズレが出ることも。",
  },
  TFEQ: {
    features: ["個性と流行をミックスできる", "品質や機能にも妥協しにくい", "新しい組み合わせを試すのが得意"],
    match: "OACP：シンプル調整役",
    caution: "こだわりが重なって、コーデの情報量が増えすぎることも。",
  },
  OFEP: {
    features: ["使いやすさを最優先できる", "価格と機能のバランスに強い", "自分の生活に合う服を選ぶ"],
    match: "TACQ：ラグジュアリー監督",
    caution: "実用性に寄りすぎて、見た目の高揚感を後回しにすることも。",
  },
  OFEQ: {
    features: ["機能と品質を深く追求する", "自分に合う道具感を大切にする", "流行より納得感で選べる"],
    match: "TACP：スマート・スタイリスト",
    caution: "こだわりが強くなり、選択肢を狭めてしまうことも。",
  },
  TACP: {
    features: ["見た目と場面のバランスが上手", "トレンド感をきれいに整える", "第一印象を意識した服選び"],
    match: "OFEQ：孤高のギア職人",
    caution: "周囲からの見え方を気にしすぎて、疲れることも。",
  },
  TACQ: {
    features: ["洗練された印象を作るのが得意", "流行と品質を華やかに扱える", "TPOに合う存在感を出せる"],
    match: "OFEP：実用クラフター",
    caution: "完成度が高いぶん、気軽さが出にくくなることも。",
  },
  OACP: {
    features: ["落ち着いた見た目を大切にする", "場面に合わせて調和できる", "流行に振り回されにくい"],
    match: "TFEQ：都会の発明家",
    caution: "控えめにまとめすぎて、個性が伝わりにくいことも。",
  },
  OACQ: {
    features: ["自分の美意識を大切にする", "上質で品のある服を選びやすい", "静かなこだわりが伝わる"],
    match: "TFEP：ストリート技師",
    caution: "理想の雰囲気を守ろうとして、変化を避けることも。",
  },
  TAEP: {
    features: ["トレンドを自由に楽しめる", "価格感覚があり挑戦しやすい", "明るく発信力のある服選び"],
    match: "OFCQ：伝統キュレーター",
    caution: "勢いで選ぶと、あとで使いにくさを感じることも。",
  },
  TAEQ: {
    features: ["華やかで印象に残る", "流行と品質を自分らしく楽しめる", "服で世界観を表現できる"],
    match: "OFCP：王道プランナー",
    caution: "主役感を出しすぎると、日常使いしにくくなることも。",
  },
  OAEP: {
    features: ["自分らしい見た目を大切にする", "価格とのバランスも見られる", "気分に合う服選びが得意"],
    match: "TFCQ：上質参謀",
    caution: "気分優先で選ぶと、場面に合わないことも。",
  },
  OAEQ: {
    features: ["独自の世界観を貫ける", "品質と美意識を重視する", "人と違う魅力を作れる"],
    match: "TFCP：バランス隊長",
    caution: "自分の基準が強く、周囲に伝わりにくいことも。",
  },
};

const typeShareDetailsEn = {
  TFCP: {
    features: ["Adds trends in a balanced way", "Checks both comfort and TPO", "Good at smart, price-conscious shopping"],
    match: "OACQ: Elegant Collector",
    caution: "Trying to balance everything can make decisions harder.",
  },
  TFCQ: {
    features: ["Balances trend and quality", "Cares about practical function", "Chooses quality that fits the occasion"],
    match: "OAEP: Free Designer",
    caution: "Searching for the best item can make shopping take longer.",
  },
  OFCP: {
    features: ["Not easily swayed by trends", "Values practicality and safe choices", "Makes steady choices with fewer regrets"],
    match: "TAEQ: Mode Star",
    caution: "Safe choices can sometimes hide fresh possibilities.",
  },
  OFCQ: {
    features: ["Likes classic, quality items", "Naturally creates a polished look", "Chooses pieces that last"],
    match: "TAEP: Pop Messenger",
    caution: "Aiming for perfection can make outfits feel less playful.",
  },
  TFEP: {
    features: ["Combines trend and function", "Enjoys free styling", "Strong at practical city outfits"],
    match: "OACQ: Elegant Collector",
    caution: "Too much freedom can sometimes feel out of place.",
  },
  TFEQ: {
    features: ["Mixes individuality and trend", "Does not easily compromise on quality", "Enjoys trying new combinations"],
    match: "OACP: Simple Coordinator",
    caution: "Too many ideas can make an outfit feel busy.",
  },
  OFEP: {
    features: ["Prioritizes ease of use", "Balances price and function well", "Chooses clothes that fit real life"],
    match: "TACQ: Luxury Director",
    caution: "Practicality may push excitement or visual impact aside.",
  },
  OFEQ: {
    features: ["Deeply pursues function and quality", "Values gear-like usefulness", "Chooses by conviction rather than trend"],
    match: "TACP: Smart Stylist",
    caution: "Strong standards can narrow your options too much.",
  },
  TACP: {
    features: ["Balances appearance and context", "Keeps trends looking polished", "Thinks about first impressions"],
    match: "OFEQ: Gear Artisan",
    caution: "Worrying about how others see you can become tiring.",
  },
  TACQ: {
    features: ["Creates a refined impression", "Handles trend and quality elegantly", "Brings presence that fits the setting"],
    match: "OFEP: Utility Crafter",
    caution: "High polish can make casual moments feel less relaxed.",
  },
  OACP: {
    features: ["Values a calm appearance", "Blends naturally with the situation", "Not easily pushed around by trends"],
    match: "TFEQ: Urban Inventor",
    caution: "Keeping things subtle can make your individuality harder to see.",
  },
  OACQ: {
    features: ["Values personal taste", "Chooses elegant, quality pieces", "Shows quiet attention to detail"],
    match: "TFEP: Street Engineer",
    caution: "Protecting your ideal look can make change feel difficult.",
  },
  TAEP: {
    features: ["Enjoys trends freely", "Can experiment without overspending", "Has a bright, expressive shopping style"],
    match: "OFCQ: Heritage Curator",
    caution: "Impulse choices may feel hard to use later.",
  },
  TAEQ: {
    features: ["Leaves a vivid impression", "Enjoys trend and quality with personality", "Uses fashion to express a worldview"],
    match: "OFCP: Classic Planner",
    caution: "Too many statement pieces can be hard to wear daily.",
  },
  OAEP: {
    features: ["Values a look that feels personal", "Still keeps price balance in mind", "Chooses by mood and expression"],
    match: "TFCQ: Quality Strategist",
    caution: "Mood-first choices may not always fit the situation.",
  },
  OAEQ: {
    features: ["Keeps a unique worldview", "Values quality and aesthetic standards", "Creates a style others cannot easily copy"],
    match: "TFCP: Balance Captain",
    caution: "Strong personal standards may be hard for others to understand.",
  },
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

const photoQuestionTextsEn = [
  "The sneaker in Photo N looks like a trustworthy product.",
  "The sneaker in Photo N appears to be well made.",
  "The sneaker in Photo N seems to be high quality.",
  "The sneaker in Photo N feels clean.",
  "The sneaker in Photo N looks sophisticated.",
  "I would be likely to purchase the sneaker in Photo N.",
  "If I were buying sneakers, I would consider the product in Photo N.",
  "The way the sneaker is displayed in Photo N is easy to view.",
  "The display in Photo N makes it easy to check the sneaker design.",
  "The display in Photo N makes it easy to understand the sneaker shape and silhouette.",
  "The display in Photo N communicates the appeal of the sneaker.",
  "The display in Photo N is helpful when comparing products.",
  "The sneaker in Photo N feels easy to pick up.",
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

const commonQuestionTextsEn = [
  "When buying sneakers, I want to check the product in a physical store.",
  "If the store staff are polite and helpful, I would want to buy from that store.",
  "If I am satisfied with the store staff, I would use that store again.",
  "Seeing the product in a store helps me buy with confidence.",
  "I would rather buy sneakers online than in a physical store.",
  "I trust sneaker information on online shops.",
  "I want to save as much time as possible by buying online.",
  "If there are enough photos and reviews, I can buy sneakers online.",
  "I want to wear popular sneakers.",
  "I tend to notice sneakers that are popular around me.",
  "I am attracted to sneakers that not many people are wearing yet.",
  "I want to buy sneakers that are getting attention.",
];

const photoFreeTextQuestion =
  "写真Nのスニーカーの置き方・見え方について、良いと思った点や気になった点を記入してください。(10文字以上)";
const photoFreeTextQuestionEn =
  "Please write what you liked or noticed about the way the sneaker in Photo N is displayed or looks. (At least 10 characters)";

const photoSets = [
  {
    key: "R",
    label: "写真1",
    labelEn: "Photo 1",
    image: "assets/photos/photo1-right.png",
    alt: "写真1の靴売り場",
    altEn: "Sneaker store display in Photo 1",
  },
  {
    key: "L",
    label: "写真2",
    labelEn: "Photo 2",
    image: "assets/photos/photo2-left.png",
    alt: "写真2の靴売り場",
    altEn: "Sneaker store display in Photo 2",
  },
];

const quiz = document.querySelector("#quiz");
const photoStep = document.querySelector("#photo-step");
const intro = document.querySelector(".intro");
const contactStep = document.querySelector("#contact-step");
const contactForm = document.querySelector("#contact-form");
const contactError = document.querySelector("#contact-error");
const result = document.querySelector("#result");
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwL_JMNAk0XwenQPyFCwxOaVIaTHUPOJOhe-EQ3Xgxy83dAc8TYMD6c1zBlS33gc_eE1w/exec";
const SITE_URL = "https://fatepersonality.github.io/fatepersonality/index.html";
const supportedLangs = ["ja", "en"];
const urlLang = new URLSearchParams(window.location.search).get("lang");
let currentLang = supportedLangs.includes(urlLang)
  ? urlLang
  : localStorage.getItem("fateLanguage") || "ja";
if (!supportedLangs.includes(currentLang)) {
  currentLang = "ja";
}

let pendingScores = null;
let pendingAnswers = null;
let pendingPhotoAnswers = null;
let pendingCommonAnswers = null;
let pendingPhotoFreeTextAnswer = null;
let selectedPhotoSet = null;
let photoAssignmentSequence = null;
let fallbackPhotoAssignmentCount = null;

function scorePercent(total, mean) {
  if (total <= mean) {
    return 50 * ((total - 5) / (mean - 5));
  }
  return 50 + 50 * ((total - mean) / (35 - mean));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

const uiText = {
  ja: {
    title: "FATE診断 | 被服行動尺度",
    navDiagnosis: "診断",
    navAbout: "FATE診断とは",
    navTypes: "ファッションタイプ",
    heroEyebrow: "Find Your Fashion Compass",
    heroTitle: "あなたの服選びに、名前をつけよう。",
    heroLead:
      "なんとなく選んでいる服にも、ちゃんと理由がある。FATE診断は、あなたの「好き」「似合う」「選びがち」を16タイプでひもとくファッション診断です。",
    heroMeta: ["約3分で完了", "16タイプでわかる服選び診断", "46問・7段階回答"],
    introTitle: "直感で選んでください",
    introCopy:
      "服を選ぶときの考え方や、写真の靴から受ける印象について答えてください。最後に、あなたの服選びのクセを4文字コードとキャラクターで表示します。",
    agree: "そう思う",
    disagree: "そう思わない",
    next: "次へ",
    reset: "回答をリセット",
    loading: "読み込み中...",
    missingFate: (count) => `未回答の項目があります。${count}問すべてに回答してください。`,
    missingAll: "未回答の項目があります。すべての項目に回答してください。",
    photoInstruction: (label) => `${label}に置かれている靴について答えてください。`,
    photoMissing: "未回答の項目があります。25問すべてに回答し、自由記述を10文字以上で入力してください。",
    freeTextMissing: "自由記述は10文字以上で入力してください。",
    backToFate: "FATE診断を修正する",
    diagnose: "診断する",
    contactTitle: "診断結果を受け取る",
    contactCopy: "メールアドレスは入力しなくても診断できます。結果を自分に送信したい場合のみ入力してください。",
    name: "名前",
    email: "メールアドレス（任意）",
    age: "年齢",
    select: "選択してください",
    frequency: "スニーカーの購入頻度",
    frequencyOptions: [
      ["めったに行かない(1年に1回程度)", "めったに行かない(1年に1回程度)"],
      ["たまに行く(1年に2回以上)", "たまに行く(1年に2回以上)"],
      ["時々行く(1年に4回以上)", "時々行く(1年に4回以上)"],
      ["よく行く(1年に6回以上)", "よく行く(1年に6回以上)"],
      ["頻繁に行く(1年に10回以上)", "頻繁に行く(1年に10回以上)"],
    ],
    handedness: "利き手",
    right: "右",
    left: "左",
    consent: "個人情報は研究目的以外のために第三者へ共有されません",
    back: "回答を修正する",
    resultButton: "診断結果を見る",
    contactError: "未入力の項目があります。必須項目を入力し、同意欄にチェックしてください。",
    sending: "送信中...",
    profileTitle: "あなたのプロフィール",
    profileCopy: "FATE診断の結果を確認して、あなたの服選びの中心的な傾向を見てみましょう。",
    typeLabel: "被服行動タイプ",
    features: "特徴",
    match: "相性がいいタイプ",
    caution: "ひとこと注意",
    detail: "詳しく見る",
    traits: "被服行動特性",
    resultDate: "診断日：",
    shareDefault: "結果をスクリーンショットしてSNSでシェアしよう！",
    shareButton: "シェア文をコピー",
    copied: "コピーしました",
    copyFailed: "コピーできませんでした",
    shareHash: "#FATE診断",
    footerNote: "永野（1994）女子大学生基準の平均点を50%として換算しています。",
    shareMessage: (name) => `私は「${name}」でした。あなたは何タイプ？`,
    shareText: (name) => `私は「${name}」でした！\nあなたは何タイプ？\n\n#FATE診断\n${SITE_URL}`,
  },
  en: {
    title: "FATE Diagnosis | Clothing Behavior Scale",
    navDiagnosis: "Diagnosis",
    navAbout: "About FATE",
    navTypes: "Fashion Types",
    heroEyebrow: "Find Your Fashion Compass",
    heroTitle: "Give your fashion choices a name.",
    heroLead:
      "The clothes you choose are not random. FATE reveals your preferences, fit, and shopping habits as one of 16 fashion types.",
    heroMeta: ["Takes about 3 minutes", "Discover your fashion type", "46 items / 7-point scale"],
    introTitle: "Answer intuitively",
    introCopy:
      "Answer questions about how you choose clothes and what impressions you get from the sneaker photos. At the end, your fashion tendency appears as a 4-letter code and character.",
    agree: "Agree",
    disagree: "Disagree",
    next: "Next",
    reset: "Reset answers",
    loading: "Loading...",
    missingFate: (count) => `Some items are unanswered. Please answer all ${count} questions.`,
    missingAll: "Some items are unanswered. Please answer every item.",
    photoInstruction: (label) => `Please answer about the shoes displayed in ${label}.`,
    photoMissing: "Some items are unanswered. Please answer all 25 items and write at least 10 characters.",
    freeTextMissing: "Please write at least 10 characters.",
    backToFate: "Edit FATE answers",
    diagnose: "See result",
    contactTitle: "Receive your result",
    contactCopy: "You can see your result without entering an email address. Enter it only if you want the result sent to you.",
    name: "Name",
    email: "Email address (optional)",
    age: "Age",
    select: "Please select",
    frequency: "How often do you buy sneakers?",
    frequencyOptions: [
      ["めったに行かない(1年に1回程度)", "Rarely (about once a year or less)"],
      ["たまに行く(1年に2回以上)", "Occasionally (at least twice a year)"],
      ["時々行く(1年に4回以上)", "Sometimes (at least 4 times a year)"],
      ["よく行く(1年に6回以上)", "Often (at least 6 times a year)"],
      ["頻繁に行く(1年に10回以上)", "Very often (at least 10 times a year)"],
    ],
    handedness: "Dominant hand",
    right: "Right",
    left: "Left",
    consent: "Personal information will not be shared with third parties except for research purposes.",
    back: "Edit answers",
    resultButton: "View diagnosis result",
    contactError: "Some required fields are missing. Please complete the required fields and consent checkbox.",
    sending: "Sending...",
    profileTitle: "Your Profile",
    profileCopy: "Check your FATE result and discover the core tendencies behind your clothing choices.",
    typeLabel: "Clothing Behavior Type",
    features: "Features",
    match: "Compatible type",
    caution: "Quick note",
    detail: "See details",
    traits: "Clothing Behavior Traits",
    resultDate: "Date: ",
    shareDefault: "Screenshot your result and share it on social media!",
    shareButton: "Copy share text",
    copied: "Copied",
    copyFailed: "Could not copy",
    shareHash: "#FATEDiagnosis",
    footerNote: "Scores are converted using the Nagano (1994) female university student average as 50%.",
    shareMessage: (name) => `I got “${name}.” What type are you?`,
    shareText: (name) => `I got “${name}”!\nWhat type are you?\n\n#FATEDiagnosis\n${SITE_URL}`,
  },
};

function t(key, ...args) {
  const value = uiText[currentLang][key];
  return typeof value === "function" ? value(...args) : value;
}

function getLocalizedScaleQuestions(scale) {
  return currentLang === "en" ? scale.questionsEn : scale.questions;
}

function localizePhotoLabel(photo) {
  return currentLang === "en" ? photo.labelEn : photo.label;
}

function localizePhotoAlt(photo) {
  return currentLang === "en" ? photo.altEn : photo.alt;
}

function replacePhotoToken(text, photo) {
  const label = localizePhotoLabel(photo);
  return currentLang === "en" ? text.replaceAll("Photo N", label) : text.replaceAll("写真N", label);
}

function renderQuiz() {
  quiz.innerHTML = "";
  const fragment = document.createDocumentFragment();

  scales.forEach((scale) => {
    getLocalizedScaleQuestions(scale).forEach((text, index) => {
      const number = index + 1;
      const id = `${scale.key}${number}`;
      fragment.append(createQuestionCard(id, text));
    });
  });

  const actions = document.createElement("div");
  actions.className = "actions";
  actions.innerHTML = `
    <button class="primary" type="submit" id="go-to-photo">${t("next")}</button>
    <button class="secondary" type="reset">${t("reset")}</button>
  `;

  const error = document.createElement("p");
  error.className = "form-error";
  error.id = "form-error";
  error.textContent = t("missingAll");

  fragment.append(error, actions);
  quiz.append(fragment);
}

function renderPhotoStep(photo) {
  photoStep.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");
  const photoLabel = localizePhotoLabel(photo);
  section.className = "photo-section";
  section.innerHTML = `
    <img class="photo-section__image" src="${photo.image}" alt="${localizePhotoAlt(photo)}" />
    <div class="photo-section__body">
      <h2>${photoLabel}</h2>
      <p>${t("photoInstruction", photoLabel)}</p>
    </div>
  `;
  fragment.append(section);

  const photoQuestions = currentLang === "en" ? photoQuestionTextsEn : photoQuestionTexts;
  photoQuestions.forEach((text, index) => {
    const id = `P${index + 1}`;
    fragment.append(createQuestionCard(id, replacePhotoToken(text, photo)));
  });

  const commonQuestions = currentLang === "en" ? commonQuestionTextsEn : commonQuestionTexts;
  commonQuestions.forEach((text, index) => {
    const id = `C${index + 1}`;
    fragment.append(createQuestionCard(id, text));
  });

  fragment.append(createFreeTextCard(replacePhotoToken(currentLang === "en" ? photoFreeTextQuestionEn : photoFreeTextQuestion, photo)));

  const error = document.createElement("p");
  error.className = "form-error";
  error.id = "photo-form-error";
  error.textContent = t("photoMissing");

  const actions = document.createElement("div");
  actions.className = "actions";
  actions.innerHTML = `
    <button class="secondary" type="button" id="back-to-fate">${t("backToFate")}</button>
    <button class="primary" type="submit">${t("diagnose")}</button>
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
      <span class="choice-label choice-label--agree">${t("agree")}</span>
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
      <span class="choice-label choice-label--disagree">${t("disagree")}</span>
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
            <button type="button" aria-label="${currentLang === "en" ? score.label : score.jp}">?</button>
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
  const [characterName] = currentLang === "en" ? typeProfilesEn[code] : characterProfiles[code];
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
  const profiles = currentLang === "en" ? typeProfilesEn : typeProfiles;
  const shareDetails = currentLang === "en" ? typeShareDetailsEn : typeShareDetails;
  const [name, copy] = profiles[code];
  const details = shareDetails[code];
  document.querySelector("#type-code").textContent = `(${code})`;
  document.querySelector("#type-name").textContent = name;
  document.querySelector("#type-copy").textContent = copy;
  document.querySelector("#type-features").innerHTML = details.features.map((feature) => `<li>${feature}</li>`).join("");
  document.querySelector("#type-match").textContent = details.match;
  document.querySelector("#type-caution").textContent = details.caution;
  document.querySelector("#type-detail-link").href = `type-detail.html?type=${code}&lang=${currentLang}`;
  document.querySelector("#share-message").textContent = t("shareMessage", name);
  document.querySelector("#copy-share-status").textContent = "";
  document.querySelector("#copy-share-text").dataset.shareText = buildShareText(code);
  renderCharacter(code);
  document.querySelector("#result-date").textContent = new Intl.DateTimeFormat(currentLang === "en" ? "en-US" : "ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  renderScores(scores);
  result.hidden = false;
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildShareText(code) {
  const [name] = (currentLang === "en" ? typeProfilesEn : typeProfiles)[code];
  return t("shareText", name);
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
  const firstCount = () => (crypto.getRandomValues(new Uint8Array(1))[0] % 2 === 0 ? 1 : 2);
  let count;

  try {
    const stored = Number(localStorage.getItem(key));
    count = Number.isFinite(stored) && stored > 0 ? stored + 1 : firstCount();
    localStorage.setItem(key, String(count));
  } catch (error) {
    if (!fallbackPhotoAssignmentCount) {
      fallbackPhotoAssignmentCount = firstCount();
    } else {
      fallbackPhotoAssignmentCount += 1;
    }
    count = fallbackPhotoAssignmentCount;
  }

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

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function setSelectOptions(select, options) {
  if (!select) {
    return;
  }
  const selectedValue = select.value;
  select.innerHTML = `<option value="">${t("select")}</option>`;
  options.forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    select.append(option);
  });
  select.value = selectedValue;
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.title = t("title");
  localStorage.setItem("fateLanguage", currentLang);

  setText(".site-nav__links a[href='index.html']", t("navDiagnosis"));
  setText(".site-nav__links a[href='about.html']", t("navAbout"));
  setText(".site-nav__links a[href='fashion-types.html']", t("navTypes"));
  setText(".hero .eyebrow", t("heroEyebrow"));
  setText(".hero h1", t("heroTitle"));
  setText(".hero .lead", t("heroLead"));
  document.querySelectorAll(".hero__meta span").forEach((item, index) => {
    item.textContent = t("heroMeta")[index];
  });
  setText("#intro-title", t("introTitle"));
  setText(".intro p", t("introCopy"));
  document.querySelectorAll(".response-preview > span").forEach((item, index) => {
    item.textContent = index === 0 ? t("agree") : t("disagree");
  });
  setText("#contact-step h2", t("contactTitle"));
  setText(".contact-step__copy", t("contactCopy"));
  setText("label[for='user-name'] span", t("name"));
  setText("#contact-form label:nth-of-type(1) span", t("name"));
  setText("#contact-form label:nth-of-type(2) span", t("email"));
  setText("#contact-form label:nth-of-type(3) span", t("age"));
  setText("#contact-form label:nth-of-type(4) span", t("frequency"));
  setText(".handedness-field legend", t("handedness"));
  document.querySelectorAll(".handedness-field label span").forEach((item, index) => {
    item.textContent = index === 0 ? t("right") : t("left");
  });
  setText(".consent-field span", t("consent"));
  setText("#back-to-quiz", t("back"));
  setText("#send-result", t("resultButton"));
  setText(".profile-hero h2", t("profileTitle"));
  setText(".profile-hero p", t("profileCopy"));
  setText(".type-card__label", t("typeLabel"));
  setText(".type-snapshot h4", t("features"));
  document.querySelectorAll(".type-snapshot__pair span").forEach((item, index) => {
    item.textContent = index === 0 ? t("match") : t("caution");
  });
  setText("#type-detail-link", t("detail"));
  setText(".traits-panel__head h3", t("traits"));
  const resultDate = document.querySelector(".result-date");
  if (resultDate?.firstChild) {
    resultDate.firstChild.textContent = t("resultDate");
  }
  setText("#share-message", t("shareDefault"));
  setText(".share-callout strong", t("shareHash"));
  setText("#copy-share-text", t("shareButton"));
  setText("footer p:first-child", t("footerNote"));

  setSelectOptions(document.querySelector("#sneaker-frequency"), t("frequencyOptions"));
  const agePlaceholder = document.querySelector("#user-age option[value='']");
  if (agePlaceholder) {
    agePlaceholder.textContent = t("select");
  }
  document.querySelectorAll("[data-lang-choice]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langChoice === currentLang);
    button.setAttribute("aria-pressed", String(button.dataset.langChoice === currentLang));
  });
}

const ageSelect = document.querySelector("#user-age");
for (let age = 10; age <= 80; age += 1) {
  const option = document.createElement("option");
  option.value = String(age);
  option.textContent = String(age);
  ageSelect.append(option);
}

applyLanguage();

document.querySelectorAll("[data-lang-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    const nextLang = button.dataset.langChoice;
    if (!supportedLangs.includes(nextLang) || nextLang === currentLang) {
      return;
    }
    currentLang = nextLang;
    localStorage.setItem("fateLanguage", currentLang);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", currentLang);
    window.location.href = url.toString();
  });
});

document.querySelector("#privacy-consent").addEventListener("change", (event) => {
  document.querySelector("#send-result").disabled = !event.target.checked;
});

document.querySelector("#copy-share-text").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  const status = document.querySelector("#copy-share-status");
  const text = button.dataset.shareText || `${SITE_URL}\n${t("shareHash")}`;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.append(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    status.textContent = t("copied");
  } catch (error) {
    status.textContent = t("copyFailed");
  }
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
    error.textContent = t("missingFate", totalQuestions);
    const firstMissing = questionNames.find((name) => !quiz.querySelector(`input[name="${name}"]:checked`));
    quiz.querySelector(`input[name="${firstMissing}"]`)?.focus();
    return;
  }

  error.classList.remove("is-visible");
  pendingScores = collectScores();
  pendingAnswers = collectAnswers();
  nextButton.disabled = true;
  nextButton.textContent = t("loading");

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
  nextButton.textContent = t("next");
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
    error.textContent = t("photoMissing");
    const firstMissing = questionNames.find((name) => !photoStep.querySelector(`input[name="${name}"]:checked`));
    photoStep.querySelector(`input[name="${firstMissing}"]`)?.focus();
    return;
  }

  if (freeTextValue.length < 10) {
    error.classList.add("is-visible");
    error.textContent = t("freeTextMissing");
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
    contactError.textContent = t("contactError");
    contactError.classList.add("is-visible");
    return;
  }

  contactError.classList.remove("is-visible");
  submitButton.disabled = true;
  submitButton.textContent = t("sending");

  try {
    await submitToGoogle(buildSubmission(user, pendingScores));
    contactStep.hidden = true;
    showResult(pendingScores);
  } catch (error) {
    contactError.textContent = error.message;
    contactError.classList.add("is-visible");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = t("resultButton");
  }
});
