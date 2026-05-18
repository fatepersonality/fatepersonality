const SPREADSHEET_ID = "1ebLAMI7lTgNX-vd3xc6H568Y3vMe69zW0MCftE1CMPA";
const SHEET_NAME = "FATE回答";
const QUESTION_IDS = [
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "A1",
  "A2",
  "A3",
  "A4",
  "A5",
  "T1",
  "T2",
  "T3",
  "T4",
  "T5",
  "E1",
  "E2",
  "E3",
  "E4",
  "E5",
];
const PHOTO_QUESTION_IDS = [
  "P1",
  "P2",
  "P3",
  "P4",
  "P5",
  "P6",
  "P7",
  "P8",
  "P9",
  "P10",
  "P11",
  "P12",
  "P13",
  "P14",
  "P15",
  "P16",
  "P17",
  "P18",
  "P19",
  "P20",
  "P21",
  "P22",
  "P23",
  "P24",
  "P25",
  "P26",
];
const COMMON_QUESTION_IDS = [
  "C1",
  "C2",
  "C3",
  "C4",
  "C5",
  "C6",
  "C7",
  "C8",
  "C9",
  "C10",
  "C11",
  "C12",
];
const QUESTION_LABELS = {
  F1: "衣服のデザインよりはそれを着たときの動きやすさを重視する",
  F2: "保温性や通気性の良い服を選ぶ",
  F3: "華美さよりは機能性を重視して衣服を選ぶ",
  F4: "吸湿性の良い生地の服を選ぶ",
  F5: "丈夫で長持ちする服が良い",
  A1: "不謹慎だと人に思われる服装はしたくない",
  A2: "その場に合った服装というものは必要であると思う",
  A3: "その時の仕事の内容にふさわしい服装をするようにしている",
  A4: "人が「場違いな」服装をしているのを見ることは耐え難い",
  A5: "自分の着ている衣服が社会的にみてふさわしいものであるかどうかをいつも考える",
  T1: "最新のファッションについて知るために多くの店を見てまわる",
  T2: "最新のファッションを着るようにいつもこころがけている",
  T3: "いまどのようなファッションがはやっているかについてよく知っている",
  T4: "ファッション雑誌をよく読む",
  T5: "自分自身を人と区別してより個性的に見せるために流行している服を着る",
  E1: "安い服であれば少しくらい気に入らなくても買うことがある",
  E2: "百貨店やブティックよりは、スーパーマーケットで服を買うことが多い",
  E3: "多少値段が高くても品質の良い衣服を選ぶ",
  E4: "自分にとって高価な衣服は必要がないと思う",
  E5: "どんなに気に入った服でも高ければ買わない",
  P1: "写真1のスニーカーは信頼できる商品に見える。",
  P2: "写真1のスニーカーの作りは良さそうだ。",
  P3: "写真1のスニーカーは品質が高そうだ。",
  P4: "写真1のスニーカーは清潔感があると感じる。",
  P5: "写真1のスニーカーは洗練されている。",
  P6: "写真1のスニーカーを購入する可能性は高い。",
  P7: "もしスニーカーを買うなら、写真1の商品を検討したい。",
  P8: "写真1のスニーカーの置き方は見やすい。",
  P9: "写真1の置き方は、スニーカーのデザインを確認しやすい。",
  P10: "写真1の置き方は、スニーカーの形やシルエットを把握しやすい。",
  P11: "写真1の置き方は、スニーカーの魅力を伝えている。",
  P12: "写真1の置き方は、商品を比較する際に役立つ。",
  P13: "写真1のスニーカーは手に取りやすいと感じる。",
  P14: "写真2のスニーカーは信頼できる商品に見える。",
  P15: "写真2のスニーカーの作りは良さそうだ。",
  P16: "写真2のスニーカーは品質が高そうだ。",
  P17: "写真2のスニーカーは清潔感があると感じる。",
  P18: "写真2のスニーカーは洗練されている。",
  P19: "写真2のスニーカーを購入する可能性は高い。",
  P20: "もしスニーカーを買うなら、写真2の商品を検討したい。",
  P21: "写真2のスニーカーの置き方は見やすい。",
  P22: "写真2の置き方は、スニーカーのデザインを確認しやすい。",
  P23: "写真2の置き方は、スニーカーの形やシルエットを把握しやすい。",
  P24: "写真2の置き方は、スニーカーの魅力を伝えている。",
  P25: "写真2の置き方は、商品を比較する際に役立つ。",
  P26: "写真2のスニーカーは手に取りやすいと感じる。",
  C1: "スニーカーを購入する際、実際の店舗で商品を確認したい。",
  C2: "店舗スタッフの対応が丁寧であれば、その店舗で購入したいと思う。",
  C3: "店舗スタッフの対応に満足すれば、次もその店舗を利用したい。",
  C4: "店舗で実際に商品を見ることで、安心して購入できる。",
  C5: "スニーカーは実店舗よりもインターネットで購入したい。",
  C6: "オンラインショップのスニーカー情報を信頼している。",
  C7: "オンラインで購入することで、できるだけ時間を節約したい。",
  C8: "写真やレビューが十分であれば、オンラインでスニーカーを購入できる。",
  C9: "人気のあるスニーカーを履きたい。",
  C10: "周囲で流行しているスニーカーは気になりやすい。",
  C11: "まだ多くの人が履いていないスニーカーに魅力を感じる。",
  C12: "話題性のあるスニーカーを購入したい。",
};
const HEADERS = [
  "送信日時",
  "名前",
  "メールアドレス",
  "年齢",
  "スニーカー購入頻度",
  "利き手",
  "個人情報同意",
  "次へ順番",
  "表示写真",
  "タイプコード",
  "タイプ名",
  "タイプ説明",
  "F合計",
  "F%",
  "A合計",
  "A%",
  "T合計",
  "T%",
  "E合計",
  "E%",
  ...QUESTION_IDS.map((id) => QUESTION_LABELS[id]),
  ...PHOTO_QUESTION_IDS.map((id) => QUESTION_LABELS[id]),
  ...COMMON_QUESTION_IDS.map((id) => QUESTION_LABELS[id]),
];

function doPost(e) {
  try {
    assertConfigured_();
    const payload = JSON.parse(e.postData.contents);
    const sheet = getSheet_();
    appendResponse_(sheet, payload);

    if (payload.email) {
      sendResultMail_(payload);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: error.message }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    if (typeof e !== "undefined" && e.parameter?.action === "assignPhoto") {
      return assignPhoto_(e.parameter.callback);
    }

    assertConfigured_();
    getSheet_();
    return ContentService.createTextOutput(
      "FATE診断のSpreadsheet接続は有効です。",
    ).setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    return ContentService.createTextOutput(
      `FATE診断のSpreadsheet接続エラー: ${error.message}`,
    ).setMimeType(ContentService.MimeType.TEXT);
  }
}

function assignPhoto_(callback) {
  const callbackName = callback && /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(callback)
    ? callback
    : "callback";
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const properties = PropertiesService.getScriptProperties();
    const sequence = Number(properties.getProperty("PHOTO_ASSIGNMENT_COUNT") || "0") + 1;
    properties.setProperty("PHOTO_ASSIGNMENT_COUNT", String(sequence));
    const photoKey = sequence % 2 === 1 ? "R" : "L";
    const photoLabel = photoKey === "R" ? "写真1" : "写真2";
    const body = `${callbackName}(${JSON.stringify({ sequence, photoKey, photoLabel })});`;

    return ContentService.createTextOutput(body).setMimeType(ContentService.MimeType.JAVASCRIPT);
  } finally {
    lock.releaseLock();
  }
}

function assertConfigured_() {
  if (!SPREADSHEET_ID || SPREADSHEET_ID === "ここにGoogleスプレッドシートIDを入れる") {
    throw new Error("SPREADSHEET_IDが設定されていません。");
  }
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  ensureHeaders_(sheet);

  return sheet;
}

function testConnection() {
  assertConfigured_();
  getSheet_();
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    return;
  }

  const currentHeaders = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const needsUpdate = HEADERS.some((header, index) => currentHeaders[index] !== header);

  if (needsUpdate) {
    const width = Math.max(sheet.getLastColumn(), HEADERS.length);
    sheet.getRange(1, 1, 1, width).clearContent();
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }
}

function appendResponse_(sheet, payload) {
  const scores = Object.fromEntries(payload.scores.map((score) => [score.key, score]));
  const photoValues = buildPhotoValues_(payload);

  sheet.appendRow([
    new Date(payload.submittedAt),
    payload.name,
    payload.email,
    payload.age,
    getSneakerFrequencyScore_(payload.sneakerFrequency),
    getHandednessScore_(payload.handedness),
    payload.privacyConsent ? "同意" : "",
    payload.photoAssignment?.sequence,
    payload.photoAssignment?.photoLabel,
    payload.typeCode,
    payload.typeName,
    payload.typeCopy,
    scores.F.total,
    scores.F.percent,
    scores.A.total,
    scores.A.percent,
    scores.T.total,
    scores.T.percent,
    scores.E.total,
    scores.E.percent,
    ...QUESTION_IDS.map((id) => getAnswerValue_(payload, id)),
    ...PHOTO_QUESTION_IDS.map((id) => photoValues[id] || ""),
    ...COMMON_QUESTION_IDS.map((id) => payload.commonAnswers[id]?.value || ""),
  ]);
}

function getSneakerFrequencyScore_(frequency) {
  const scores = {
    "めったに購入しない": 1,
    "めったに行かない(1年に1回程度)": 1,
    "たまに行く(1年に2回以上)": 2,
    "時々行く(1年に4回以上)": 3,
    "よく行く(1年に6回以上)": 4,
    "頻繁に行く(1年に10回以上)": 5,
  };

  return scores[frequency] || frequency || "";
}

function getHandednessScore_(handedness) {
  const scores = {
    右: 1,
    左: 2,
  };

  return scores[handedness] || handedness || "";
}

function getAnswerValue_(payload, id) {
  if (id === "E3") {
    return payload.answers[id].scoredValue;
  }

  return payload.answers[id].value;
}

function buildPhotoValues_(payload) {
  const photoKey = payload.photoAssignment?.photoKey;
  const offset = photoKey === "L" ? 13 : 0;

  return Object.fromEntries(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((number) => {

      const sourceId = `P${number}`;
      const targetId = `P${number + offset}`;
      return [targetId, payload.photoAnswers[sourceId]?.value || ""];
    }),
  );
}

function sendResultMail_(payload) {
  const scoreLines = payload.scores
    .map((score) => `${score.key}：${score.total}点 / ${score.percent}%`)
    .join("\n");

  const body = `${payload.name}さん

FATE診断の結果は以下の通りです。

${payload.typeCode}：${payload.typeName}
${payload.typeCopy}

各尺度のスコア
${scoreLines}

ご回答ありがとうございました。`;

  MailApp.sendEmail({
    to: payload.email,
    subject: `FATE診断結果：${payload.typeCode} ${payload.typeName}`,
    body,
  });
}
