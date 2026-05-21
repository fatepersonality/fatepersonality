const typeData = {
  TFCP: {
    name: "バランス隊長",
    character: "キャプテン・バランサー",
    color: "#2f9f7f",
    image: "assets/characters/TFCP.png",
    tagline: "流行、機能、場面、価格の4条件を手際よくまとめる万能型。",
    axes: ["Trend", "Function", "Context", "Price"],
    group: "トレンド機能派",
    summary:
      "バランス隊長は、今っぽさを楽しみながらも、着心地や使いやすさ、場面への適合、価格感覚を同時に見ています。服を選ぶときの判断が現実的で、失敗を避けながら新しさも取り入れられるタイプです。",
    sections: {
      style:
        "このタイプの服選びは、情報収集と実用判断のバランスが強みです。SNSや店頭で流行を把握しつつ、実際に動きやすいか、手入れしやすいか、どの場面で使えるかを冷静に確認します。流行品でも、用途が限られすぎるものや価格に見合わないものは選びにくいでしょう。",
      strengths:
        "ワードローブ全体を無理なく整える力があります。買い足しの優先順位をつけるのが得意で、仕事、学校、休日など複数の場面を横断して使える服を選べます。周囲からは、派手すぎないのに古く見えない、安心感のあるおしゃれとして映りやすいタイプです。",
      blindspots:
        "条件を多く見すぎるぶん、直感的に心が動く服を逃すことがあります。たまには、価格や汎用性を少し脇に置いて、自分が新鮮に感じる一着を選ぶと、装いに余白と個性が生まれます。",
      advice:
        "おすすめは、ベーシックな機能服に小さな流行要素を足すことです。靴、バッグ、色、シルエットのどれか一つだけを更新すると、このタイプらしい堅実さを保ちながら印象を変えられます。",
    },
  },
  TFCQ: {
    name: "上質参謀",
    character: "シルク参謀",
    color: "#4467a8",
    image: "assets/characters/TFCQ.png",
    tagline: "流行と機能を読み解き、長く使える品質へ投資する設計型。",
    axes: ["Trend", "Function", "Context", "Quality"],
    group: "トレンド機能派",
    summary:
      "上質参謀は、流行をただ追うのではなく、自分の生活に残る形へ編集して取り入れます。機能性とTPOを押さえつつ、素材や仕立ての良さにも価値を置くため、服選びには戦略性があります。",
    sections: {
      style:
        "新しいデザインやブランドをよく観察し、その中から長く使えるものを選び抜く傾向があります。通気性、耐久性、着回しやすさなどの実用条件に加え、質感や縫製にも目が向きます。",
      strengths:
        "短期的な流行と長期的な価値を両立できるのが強みです。安さだけで選ばないため、結果的に満足度の高い買い物が多くなります。きちんと感もあり、信頼される印象を作るのが得意です。",
      blindspots:
        "品質へのこだわりが強いと、選択肢を狭めすぎたり、少し試すだけの買い物が重く感じられたりします。小物やセール品で実験枠を作ると、柔軟さが増します。",
      advice:
        "投資する服と遊ぶ服を分けて考えると、このタイプの判断力がさらに活きます。コート、靴、バッグは上質に、インナーや色物は軽やかに更新するとよいでしょう。",
    },
  },
  OFCP: {
    name: "王道プランナー",
    character: "クラシック航路士",
    color: "#49646f",
    image: "assets/characters/OFCP.png",
    tagline: "流行に流されず、機能・場面・価格の納得感で選ぶ堅実型。",
    axes: ["Own-style", "Function", "Context", "Price"],
    group: "実用計画派",
    summary:
      "王道プランナーは、目立つ流行よりも、毎日の生活で確実に役立つ服を選びます。場面に合うこと、動きやすいこと、価格が妥当であることを大切にする安定感のあるタイプです。",
    sections: {
      style:
        "服選びでは、奇抜さよりも失敗しにくさを重視します。定番色、扱いやすい素材、長く使える形を好み、必要な場面から逆算して買い物をします。",
      strengths:
        "無駄買いが少なく、ワードローブが整いやすいのが強みです。TPOへの意識もあるため、初対面や公的な場面でも安心感のある印象を作れます。",
      blindspots:
        "安全な選択が続くと、印象がやや固定化しやすくなります。トレンドを全面的に追う必要はありませんが、靴の形やパンツの丈など一点だけ更新すると、今の空気に近づきます。",
      advice:
        "いつもの定番に、少しだけ質感やシルエットの変化を入れるのがおすすめです。大きく変えずに洗練度を上げられるため、このタイプの納得感とも相性が良いです。",
    },
  },
  OFCQ: {
    name: "伝統キュレーター",
    character: "ヘリテージ司書",
    color: "#6f5d8c",
    image: "assets/characters/OFCQ.png",
    tagline: "王道・上質・きちんと感を軸に、自分の基準で選び抜く型。",
    axes: ["Own-style", "Function", "Context", "Quality"],
    group: "実用計画派",
    summary:
      "伝統キュレーターは、流行よりも自分の審美眼と信頼できる品質を大切にします。控えめでも丁寧で、場面に合う装いを落ち着いて組み立てるタイプです。",
    sections: {
      style:
        "素材、仕立て、長く使えるデザインへの関心が高く、安易な流行品には動かされにくい傾向があります。クラシック、ミニマル、上品な実用品に惹かれやすいでしょう。",
      strengths:
        "装いに一貫性があり、信頼感を作るのが得意です。品質を見極める力があるため、少数精鋭のワードローブを育てられます。",
      blindspots:
        "完成度を重視するあまり、新しい雰囲気に踏み出すタイミングが遅れることがあります。自分の基準を壊さない範囲で、色や柄を少し足すと印象がやわらぎます。",
      advice:
        "上質な定番を軸にしつつ、季節ごとに一つだけ新しい要素を入れるとよいでしょう。スカーフ、靴下、バッグなど小面積から始めると自然です。",
    },
  },
  TFEP: {
    name: "ストリート技師",
    character: "ストリート・エンジニア",
    color: "#1f8f88",
    image: "assets/characters/TFEP.png",
    tagline: "自由さを残しながら、機能と流行を両立するアクティブ型。",
    axes: ["Trend", "Function", "Expression", "Price"],
    group: "自由機能派",
    summary:
      "ストリート技師は、動きやすさと今っぽさを同時に楽しむタイプです。TPOよりも自分の感覚を優先しやすく、実用的なアイテムを個性的に組み合わせます。",
    sections: {
      style:
        "スニーカー、バッグ、アウトドア要素、スポーティな素材など、機能を感じる服と相性が良いです。流行は好きですが、きれいにまとめるよりも自分らしく使い倒せるかが重要です。",
      strengths:
        "軽快で親しみやすい印象を作れます。価格感覚もあるため、古着、量販、限定品などを柔軟に組み合わせ、コストを抑えながら鮮度を出せます。",
      blindspots:
        "自由度が高いぶん、場面によってはラフに見えすぎることがあります。大事な場では、色数を減らす、靴を整える、上着だけきれいめにするなどの調整が効きます。",
      advice:
        "機能服の中に一つだけ清潔感のある要素を入れると強いです。白、グレー、黒を土台にして、流行色や小物で遊ぶと自然にまとまります。",
    },
  },
  TFEQ: {
    name: "都会の発明家",
    character: "メトロ発明師",
    color: "#5c77c8",
    image: "assets/characters/TFEQ.png",
    tagline: "個性・トレンド・機能を、自分の実験として組み合わせる型。",
    axes: ["Trend", "Function", "Expression", "Quality"],
    group: "自由機能派",
    summary:
      "都会の発明家は、新しいものへの感度と実用性へのこだわりを併せ持ちます。服を単なる装飾ではなく、生活を便利にし、自分らしさを示す道具として扱うタイプです。",
    sections: {
      style:
        "テック素材、変形シルエット、機能的なバッグや靴などに惹かれやすく、流行の中でも構造や仕組みに面白さを見つけます。価格より品質や新規性を重視しやすいでしょう。",
      strengths:
        "独自性がありながら、実用面でも説得力のある装いを作れます。新しいブランドやプロダクトを発掘する力があり、周囲に新鮮な印象を与えます。",
      blindspots:
        "こだわりが強くなると、少し近寄りがたい印象になることがあります。柔らかい素材や親しみやすい色を混ぜると、先進性と日常感のバランスが取れます。",
      advice:
        "主役アイテムを一つ決め、他は静かに支える構成がおすすめです。靴やアウターに実験性を置くと、このタイプらしさがきれいに出ます。",
    },
  },
  OFEP: {
    name: "実用クラフター",
    character: "ユーティリティ職人",
    color: "#577265",
    image: "assets/characters/OFEP.png",
    tagline: "流行より、自分の使いやすさとコスト感を大切にする型。",
    axes: ["Own-style", "Function", "Expression", "Price"],
    group: "自由機能派",
    summary:
      "実用クラフターは、誰かの基準よりも自分の生活に合うかを重視します。丈夫さ、動きやすさ、価格の納得感を見ながら、気負わない服選びをします。",
    sections: {
      style:
        "ワーク、アウトドア、カジュアルな定番と相性がよく、服をきれいに飾るよりも使い込むことに価値を感じます。流行品でも、実用性がないものにはあまり心が動きません。",
      strengths:
        "無理がなく、生活に根ざした装いができます。価格に対する判断も現実的で、必要なものを必要なだけ選べるタイプです。",
      blindspots:
        "便利さを優先しすぎると、場面によっては雑に見えることがあります。素材の清潔感やサイズ感を整えるだけで、実用性を保ったまま印象が大きく上がります。",
      advice:
        "おすすめは、よく着る実用品の中で一番目立つものを少し上質にすることです。靴、ジャケット、バッグのどれかを整えると全体が締まります。",
    },
  },
  OFEQ: {
    name: "孤高のギア職人",
    character: "ギア・マイスター",
    color: "#45536a",
    image: "assets/characters/OFEQ.png",
    tagline: "自分流で、機能と品質を突き詰めるこだわり型。",
    axes: ["Own-style", "Function", "Expression", "Quality"],
    group: "自由機能派",
    summary:
      "孤高のギア職人は、流行や常識よりも、自分が納得できる機能と品質を追求します。服選びには研究者のような姿勢があり、使い勝手や素材の違いを深く見ます。",
    sections: {
      style:
        "専門性のある服、長く使える道具的な服、細部に理由のあるデザインを好みます。周囲に合わせるためではなく、自分の生活性能を上げるために服を選びます。",
      strengths:
        "一つひとつの選択に理由があり、長期的な満足度が高いタイプです。派手ではなくても独特の説得力があり、分かる人には強く刺さる装いになります。",
      blindspots:
        "機能や品質に集中しすぎると、他者から見た印象への配慮が薄くなることがあります。場面に応じて、清潔感や柔らかさを少し加えると魅力が伝わりやすくなります。",
      advice:
        "こだわりのアイテムを主役にし、それ以外をシンプルに整えるとよいでしょう。説明しなくても伝わる完成度を意識すると、このタイプの強さが際立ちます。",
    },
  },
  TACP: {
    name: "スマート・スタイリスト",
    character: "スマート・スタイル案内人",
    color: "#c85d5a",
    image: "assets/characters/TACP.png",
    tagline: "見た目・流行・場面を整えながら、価格感覚も忘れない型。",
    axes: ["Trend", "Appearance", "Context", "Price"],
    group: "社交調整派",
    summary:
      "スマート・スタイリストは、見た目の印象と場面への適合を上手に合わせます。流行を取り入れつつ、価格とのバランスも見るため、現実的なおしゃれが得意です。",
    sections: {
      style:
        "人からどう見えるかをよく把握しており、場所や相手に応じて服装を調整します。高価なもので固めなくても、色合わせや小物の使い方で洗練された印象を作れます。",
      strengths:
        "場に馴染みつつ、少し華やかさを出すのが上手です。周囲からは、気が利いている、清潔感がある、今っぽいと見られやすいでしょう。",
      blindspots:
        "周囲の目や流行を意識しすぎると、自分の好みが後回しになることがあります。定番の中にも自分だけの好きな色や形を残すと、印象がより自然になります。",
      advice:
        "価格を抑えたいときは、服よりも靴や髪型、バッグに意識を向けると効果的です。小さな面積で印象を整えるのが得意なタイプです。",
    },
  },
  TACQ: {
    name: "ラグジュアリー監督",
    character: "ラグジュアリー監督官",
    color: "#7f5b96",
    image: "assets/characters/TACQ.png",
    tagline: "見た目・TPO・流行・品質を重んじる洗練型。",
    axes: ["Trend", "Appearance", "Context", "Quality"],
    group: "社交調整派",
    summary:
      "ラグジュアリー監督は、装いを印象設計として捉えます。場面にふさわしく、流行感があり、品質も感じられる服装を目指すため、全体の完成度が高いタイプです。",
    sections: {
      style:
        "シルエット、素材、ブランド感、清潔感など、複数の要素を総合して判断します。安さよりも、見たときの説得力や長く信頼できる質を重視しやすいでしょう。",
      strengths:
        "人前に立つ場面や大切な予定で力を発揮します。自分だけでなく、周囲の雰囲気まで整えるような存在感があり、洗練された印象を残せます。",
      blindspots:
        "完成度への意識が高いぶん、服選びが少し緊張感を帯びることがあります。完璧に整える日と、あえて軽く着る日を分けると余裕が生まれます。",
      advice:
        "上質な主役アイテムに、流行の小物を合わせるのがおすすめです。品質を軸にすることで、トレンドを取り入れても軽く見えにくくなります。",
    },
  },
  OACP: {
    name: "シンプル調整役",
    character: "ミニマル調整士",
    color: "#6b7d86",
    image: "assets/characters/OACP.png",
    tagline: "流行に流されず、見た目と場面の調和を大切にする型。",
    axes: ["Own-style", "Appearance", "Context", "Price"],
    group: "社交調整派",
    summary:
      "シンプル調整役は、目立つ流行よりも、相手や場面に対して失礼がなく、自分にも馴染む装いを選びます。価格にも現実的で、無理のない清潔感を作るタイプです。",
    sections: {
      style:
        "ベーシックで整った服装を好み、派手な主張よりも自然な調和を重視します。買い物では、使う場面がはっきりしているか、価格に納得できるかを確認します。",
      strengths:
        "安心感と親しみやすさを与えやすいタイプです。装いが過剰になりにくく、学校、職場、日常のどの場面でも違和感を少なくできます。",
      blindspots:
        "控えめな選択が続くと、印象がぼんやりすることがあります。色の濃淡や素材の違いを意識すると、シンプルなまま奥行きが出ます。",
      advice:
        "一つだけ輪郭のはっきりしたアイテムを入れるとよいでしょう。きれいな靴、形の良いジャケット、質感のあるバッグが全体を引き締めます。",
    },
  },
  OACQ: {
    name: "エレガント収集家",
    character: "エレガンス蒐集家",
    color: "#8f6382",
    image: "assets/characters/OACQ.png",
    tagline: "自分の美意識と上質さを静かに楽しむ型。",
    axes: ["Own-style", "Appearance", "Context", "Quality"],
    group: "社交調整派",
    summary:
      "エレガント収集家は、流行に振り回されず、自分の美意識に合う上質なものを選びます。場面への配慮もあるため、静かで品のある印象を作るタイプです。",
    sections: {
      style:
        "素材の落ち感、色の深み、形の美しさなど、視覚的な完成度に敏感です。派手なロゴや急な流行よりも、長く見て美しいものを好みます。",
      strengths:
        "落ち着いた華やかさがあり、控えめでも記憶に残る装いができます。品質への投資も自然で、時間をかけて自分らしいワードローブを育てられます。",
      blindspots:
        "好きな世界観が固まると、新鮮さが入りにくくなる場合があります。形は定番のまま、素材や小物で季節感を足すと自然に更新できます。",
      advice:
        "自分の定番色を決めたうえで、差し色を一つ持つのがおすすめです。静かな装いに焦点が生まれ、上質さがより伝わります。",
    },
  },
  TAEP: {
    name: "ポップ発信者",
    character: "ポップ・メッセンジャー",
    color: "#e15f75",
    image: "assets/characters/TAEP.png",
    tagline: "自由にトレンドを楽しみ、価格感覚も持つ表現型。",
    axes: ["Trend", "Appearance", "Expression", "Price"],
    group: "表現トレンド派",
    summary:
      "ポップ発信者は、服を気分や個性を伝えるメディアとして楽しみます。流行への反応が早く、価格を抑えながら見た目の変化を楽しむのが得意です。",
    sections: {
      style:
        "色、柄、シルエット、小物などで印象を変えることに抵抗が少ないタイプです。TPOよりも自分が楽しいか、写真映えするか、人と違うかが判断材料になりやすいでしょう。",
      strengths:
        "明るく印象に残りやすく、周囲の空気を動かす力があります。高価なものでなくても組み合わせで魅力を出せるため、実験の回数を増やせます。",
      blindspots:
        "自由な表現が強い場面では、相手や場所とのズレが出ることがあります。重要な場では、色数を少し抑えるだけで印象が整います。",
      advice:
        "遊びの強いアイテムは一つに絞り、他をシンプルにすると伝わりやすくなります。価格を抑えた流行品は、消耗期間を決めて楽しむとよいでしょう。",
    },
  },
  TAEQ: {
    name: "モードスター",
    character: "モード・スター",
    color: "#b54f9b",
    image: "assets/characters/TAEQ.png",
    tagline: "トレンド、自己表現、品質を華やかに楽しむ型。",
    axes: ["Trend", "Appearance", "Expression", "Quality"],
    group: "表現トレンド派",
    summary:
      "モードスターは、服で世界観を作ることに長けています。流行や品質への感度が高く、装いを通して自分の存在感を表現するタイプです。",
    sections: {
      style:
        "新しいデザイン、印象的なシルエット、質の高い素材に惹かれやすく、服を自己表現の中心に置きます。場に合わせるよりも、場の空気を変えるような装いを好むこともあります。",
      strengths:
        "華やかさと説得力があります。単に目立つだけでなく、素材や完成度にもこだわるため、個性的でも安っぽく見えにくいのが強みです。",
      blindspots:
        "主張の強い服が重なると、見る側が受け取る焦点を失うことがあります。強いアイテムを引き立てる余白を作ると、表現力がさらに高まります。",
      advice:
        "主役を決めて、残りは舞台装置として整える意識がおすすめです。靴、ヘア、アクセサリーまで含めた全体設計がこのタイプを輝かせます。",
    },
  },
  OAEP: {
    name: "自由デザイナー",
    character: "フリー・デザイナー",
    color: "#4f8fbd",
    image: "assets/characters/OAEP.png",
    tagline: "自分らしい見た目を大切にし、価格感覚もある型。",
    axes: ["Own-style", "Appearance", "Expression", "Price"],
    group: "表現トレンド派",
    summary:
      "自由デザイナーは、流行よりも自分の好きな見た目を優先します。価格への現実感もあるため、身近な選択肢を使って自分らしい雰囲気を作るタイプです。",
    sections: {
      style:
        "古着、手持ちの服の組み替え、色や小物の工夫など、自分の感覚で編集する力があります。周囲に合わせすぎず、気分や美意識を大切にします。",
      strengths:
        "自然体の個性が魅力です。高価な服に頼らず、組み合わせや選び方で自分らしさを出せるため、装いが人間味を持ちます。",
      blindspots:
        "好きな方向へ自由に進むぶん、場面との調整が後回しになることがあります。最低限の清潔感やサイズ感を整えるだけで、個性がより好意的に伝わります。",
      advice:
        "自分らしい色や形を残しつつ、ベースを整えるのがおすすめです。白、黒、グレー、ネイビーなどの土台に、好きな一点を足すと安定します。",
    },
  },
  OAEQ: {
    name: "シグネチャー・アーティスト",
    character: "シグネチャー作家",
    color: "#775aa0",
    image: "assets/characters/OAEQ.png",
    tagline: "流行や常識に縛られず、自分の世界観と上質さを貫く型。",
    axes: ["Own-style", "Appearance", "Expression", "Quality"],
    group: "表現トレンド派",
    summary:
      "シグネチャー・アーティストは、服を自分の世界観を形にする手段として扱います。流行や価格よりも、自分にとって意味があり、質のあるものを選ぶタイプです。",
    sections: {
      style:
        "独自の色、素材、シルエット、ブランド観を持ちやすく、周囲の評価よりも自分の納得を重視します。装いに一貫した物語があり、好きなものを深く掘る傾向があります。",
      strengths:
        "強い個性と上質感が両立します。誰にでも分かりやすい流行ではなく、自分の審美眼で選んだものが積み重なり、唯一無二の印象を作ります。",
      blindspots:
        "世界観が強いぶん、場面によっては距離を感じさせることがあります。素材や色のこだわりは残しつつ、形だけ少し場に寄せると伝わり方が滑らかになります。",
      advice:
        "自分の象徴になるアイテムを育てるとよいでしょう。靴、コート、アクセサリーなど、長く使うものに投資すると、このタイプの魅力が深まります。",
    },
  },
};

const typeGroups = [
  {
    id: "functional-context",
    title: "機能コンテキスト派",
    color: "#8a66a0",
    copy: "機能性と場面へのふさわしさを重視し、安心感のある選択をするタイプです。",
    codes: ["TFCP", "TFCQ", "OFCP", "OFCQ"],
  },
  {
    id: "functional-expression",
    title: "自由機能派",
    color: "#2fa06e",
    copy: "機能性を軸にしながら、自分らしい着方や自由な組み合わせを楽しむタイプです。",
    codes: ["TFEP", "TFEQ", "OFEP", "OFEQ"],
  },
  {
    id: "appearance-context",
    title: "印象コンテキスト派",
    color: "#4297b3",
    copy: "見た目の印象と場面への配慮を大切にし、装いを整えるタイプです。",
    codes: ["TACP", "TACQ", "OACP", "OACQ"],
  },
  {
    id: "appearance-expression",
    title: "印象エクスプレッション派",
    color: "#e0a82e",
    copy: "服を自己表現として楽しみ、見た目の変化や世界観を大切にするタイプです。",
    codes: ["TAEP", "TAEQ", "OAEP", "OAEQ"],
  },
];

const typeDataEn = {
  TFCP: {
    name: "Balance Captain",
    character: "Captain Balancer",
    tagline: "A versatile type that balances trend, function, context, and price.",
    summary: "Balance Captain enjoys a modern look while checking comfort, usefulness, context, and price. This type is realistic, avoids waste, and can add freshness without losing practicality.",
    sections: {
      style: "This type balances information gathering with practical judgment. It notices trends through social media and stores, then calmly checks whether an item is easy to move in, easy to care for, useful across situations, and worth the price.",
      strengths: "Balance Captain can organize a wardrobe without overdoing it. This type is good at choosing pieces that work for school, work, weekends, and casual plans, creating a reliable style that still feels current.",
      blindspots: "Because this type checks many conditions, it may miss clothes that feel exciting at first sight. Sometimes choosing one item simply because it feels fresh can add personality and breathing room to the outfit.",
      advice: "Start with practical basics and update one visible detail. Shoes, bags, color, or silhouette can bring freshness while keeping the steady balance that suits this type.",
    },
  },
  TFCQ: {
    name: "Quality Strategist",
    character: "Silk Strategist",
    tagline: "A strategic type that turns trends into long-lasting quality.",
    summary: "Quality Strategist does not simply chase trends. This type edits trends into pieces that fit daily life, while valuing function, TPO, materials, and construction.",
    sections: {
      style: "This type observes new designs and brands carefully, then selects the ones that can last. Practical conditions such as breathability, durability, and mix-and-match potential matter, but texture and construction matter too.",
      strengths: "Quality Strategist can connect short-term trend awareness with long-term satisfaction. Because this type does not choose only by low price, purchases often feel more convincing and dependable.",
      blindspots: "High standards can sometimes make small experiments feel difficult. Creating a low-risk trial zone with accessories, inner layers, or sale items can keep the style flexible.",
      advice: "Separate investment pieces from playful pieces. Coats, shoes, and bags can be higher quality, while colors and inner layers can change more lightly.",
    },
  },
  OFCP: {
    name: "Classic Planner",
    character: "Classic Navigator",
    tagline: "A steady type that chooses by function, context, and price rather than trends.",
    summary: "Classic Planner chooses clothes that reliably work in everyday life. This type values usefulness, appropriate situations, and reasonable price, creating a stable wardrobe.",
    sections: {
      style: "This type prioritizes choices that are unlikely to fail. It prefers standard colors, manageable materials, and shapes that can be used for a long time, often shopping backward from actual needs.",
      strengths: "Classic Planner avoids unnecessary purchases and keeps the wardrobe easy to use. Because this type is aware of context, it can create a calm and trustworthy impression in first meetings and public situations.",
      blindspots: "Safe choices can make the impression feel fixed. You do not need to chase trends, but updating one detail such as shoe shape, pant length, or fabric texture can make the look feel more current.",
      advice: "Add a small change in material or silhouette to familiar basics. This improves polish without forcing a dramatic change.",
    },
  },
  OFCQ: {
    name: "Heritage Curator",
    character: "Heritage Librarian",
    tagline: "A type that selects classic, quality, polished items by personal standards.",
    summary: "Heritage Curator values personal taste and trustworthy quality more than short-lived trends. The result is calm, careful, and appropriate styling.",
    sections: {
      style: "This type is drawn to materials, tailoring, and designs that can be used for years. Classic, minimal, and elegant practical items feel more convincing than short-lived trend pieces.",
      strengths: "Heritage Curator creates consistency and trust. With a strong eye for quality, this type can build a small but carefully selected wardrobe.",
      blindspots: "A strong sense of completion can make it harder to step into a new mood. Adding a little color, pattern, or seasonal detail can soften the impression without breaking personal standards.",
      advice: "Use high-quality classics as the base, then add one new element each season. Scarves, socks, bags, or small accessories are natural starting points.",
    },
  },
  TFEP: {
    name: "Street Engineer",
    character: "Street Engineer",
    tagline: "An active type that combines trend, function, and freedom.",
    summary: "Street Engineer enjoys movement and a current mood at the same time. This type uses practical items in individual, streetwise combinations.",
    sections: {
      style: "This type works well with sneakers, bags, outdoor details, sporty materials, and practical clothing. Trends are appealing, but the key question is whether the item can be used freely and actively.",
      strengths: "Street Engineer creates a light, friendly, and energetic impression. This type can mix secondhand pieces, mass-market items, and limited releases while keeping cost under control.",
      blindspots: "Because the style is free, it can look too casual in some settings. For important occasions, reducing colors, cleaning up the shoes, or choosing a neater jacket can change the impression quickly.",
      advice: "Add one clean element to functional clothing. A base of white, gray, or black with one trend color or accessory keeps the outfit natural and sharp.",
    },
  },
  TFEQ: {
    name: "Urban Inventor",
    character: "Metro Inventor",
    tagline: "An experimental type that mixes individuality, trend, function, and quality.",
    summary: "Urban Inventor treats clothes as tools for better living and personal expression. This type is drawn to new structures, technical materials, and meaningful design.",
    sections: {
      style: "This type is attracted to tech materials, unusual silhouettes, functional bags, and well-designed shoes. Within trends, it often notices structure, mechanism, and new ideas.",
      strengths: "Urban Inventor creates outfits that feel original but still practical. This type is good at discovering new brands and products, giving the style a fresh and convincing edge.",
      blindspots: "Strong preferences can sometimes feel distant or difficult to approach. Mixing in softer materials or familiar colors helps balance innovation with everyday warmth.",
      advice: "Choose one experimental main item and let the rest support it quietly. Shoes or outerwear are especially effective places to show this type's character.",
    },
  },
  OFEP: {
    name: "Utility Crafter",
    character: "Utility Maker",
    tagline: "A practical type that values usability and cost performance.",
    summary: "Utility Crafter chooses clothes as everyday tools. Comfort, durability, easy care, and price satisfaction matter more than trend or attention.",
    sections: {
      style: "This type suits workwear, outdoor items, and casual basics. Rather than decorating clothes beautifully, it values clothes that can be used, worn, and lived in.",
      strengths: "Utility Crafter creates a natural style rooted in real life. Price judgment is realistic, and this type is good at choosing what is needed without excess.",
      blindspots: "When convenience becomes too important, the outfit may look rough in certain situations. Clean materials and good fit can raise the impression while keeping practicality.",
      advice: "Upgrade the most visible everyday item. Better shoes, a sharper jacket, or a more structured bag can tighten the whole look.",
    },
  },
  OFEQ: {
    name: "Gear Artisan",
    character: "Gear Master",
    tagline: "A type that pursues personal standards of function and quality.",
    summary: "Gear Artisan looks deeply at structure, materials, and long-term value. This type chooses by conviction rather than popularity.",
    sections: {
      style: "This type likes specialized clothing, tool-like pieces, and designs with a reason behind every detail. Clothes are selected to improve daily performance rather than to match the crowd.",
      strengths: "Gear Artisan has clear reasons behind each choice, which often creates long-term satisfaction. The style may not be flashy, but it has a quiet persuasiveness for people who notice details.",
      blindspots: "Focusing too much on function and quality can reduce attention to how others read the outfit. Adding cleanliness, softness, or contextual adjustment makes the appeal easier to understand.",
      advice: "Let one carefully chosen item become the main character and keep the rest simple. Aim for quality that communicates even without explanation.",
    },
  },
  TACP: {
    name: "Smart Stylist",
    character: "Smart Style Guide",
    tagline: "A polished type that balances appearance, trend, context, and price.",
    summary: "Smart Stylist is good at creating a pleasant impression. This type updates style with trend elements while keeping the look suitable and approachable.",
    sections: {
      style: "This type understands how clothing is seen by others and adjusts based on place, people, and occasion. Even without expensive items, it can create polish through color coordination and accessories.",
      strengths: "Smart Stylist blends into the setting while adding a little brightness. Others are likely to see this type as thoughtful, clean, and modern.",
      blindspots: "If outside opinions and trends become too important, personal preference can move into the background. Keeping one favorite color or shape makes the impression more natural.",
      advice: "When keeping costs low, focus on shoes, hair, and bags rather than changing every piece of clothing. Small areas can strongly shape the whole impression.",
    },
  },
  TACQ: {
    name: "Luxury Director",
    character: "Luxury Director",
    tagline: "A refined type that values appearance, TPO, trend, and quality.",
    summary: "Luxury Director treats clothing as impression design. This type is sensitive to materials, silhouette, and the atmosphere of each occasion.",
    sections: {
      style: "This type judges silhouette, material, brand feeling, cleanliness, and context together. Rather than simply choosing low price, it values visual authority and quality that can be trusted.",
      strengths: "Luxury Director performs well in public-facing moments and important plans. This type can create a refined presence that lifts not only the self but also the atmosphere around them.",
      blindspots: "Because the desire for completion is high, clothing choices can sometimes feel tense. Separating polished days from intentionally relaxed days creates more ease.",
      advice: "Pair one high-quality main item with a trend accessory. When quality is the foundation, trend elements are less likely to look shallow.",
    },
  },
  OACP: {
    name: "Simple Coordinator",
    character: "Minimal Coordinator",
    tagline: "A calm type that values harmony between appearance and context.",
    summary: "Simple Coordinator prefers natural harmony over loud trends. This type creates a clean, reassuring impression with simple shapes and balanced colors.",
    sections: {
      style: "This type prefers basic, well-organized clothing and values natural harmony over strong statements. It checks whether the item has a clear use and whether the price feels reasonable.",
      strengths: "Simple Coordinator gives a sense of ease and approachability. The outfit rarely feels excessive, which makes it suitable for school, work, and everyday life.",
      blindspots: "When choices stay too modest, the impression can become vague. Paying attention to contrast, texture, or shape adds depth while keeping the style simple.",
      advice: "Add one item with a clear outline. Clean shoes, a well-shaped jacket, or a textured bag can make the whole outfit sharper.",
    },
  },
  OACQ: {
    name: "Elegant Collector",
    character: "Elegance Collector",
    tagline: "A type that quietly enjoys personal taste and quality.",
    summary: "Elegant Collector chooses refined items that match personal taste. This type values depth of color, texture, and quiet quality.",
    sections: {
      style: "This type is sensitive to fabric drape, depth of color, and beautiful shape. It prefers items that remain visually satisfying over time rather than loud logos or sudden trends.",
      strengths: "Elegant Collector has quiet glamour and can be memorable without being loud. Investing in quality feels natural, and the wardrobe can mature over time.",
      blindspots: "When the preferred worldview becomes fixed, freshness may become harder to add. Keeping classic shapes while changing materials or accessories is an easy update.",
      advice: "Choose your standard colors, then keep one accent color. This gives focus to a quiet outfit and makes quality easier to see.",
    },
  },
  TAEP: {
    name: "Pop Messenger",
    character: "Pop Messenger",
    tagline: "An expressive type that enjoys trends freely with price awareness.",
    summary: "Pop Messenger uses fashion to express mood and personality. This type responds quickly to trends and enjoys color, shape, and playful details.",
    sections: {
      style: "This type is comfortable changing impressions with color, pattern, silhouette, and accessories. Enjoyment, photo impact, and difference from others often become important standards.",
      strengths: "Pop Messenger is bright and memorable, with the power to move the atmosphere around them. Because expensive items are not required, this type can experiment often.",
      blindspots: "Strong expression can sometimes create a gap with the place or people around you. For important settings, reducing the number of colors can quickly organize the impression.",
      advice: "Limit the playful item to one main focus and keep the rest simple. Trend items at a reasonable price are best enjoyed with a clear period of use.",
    },
  },
  TAEQ: {
    name: "Mode Star",
    character: "Mode Star",
    tagline: "A vivid type that enjoys trend, expression, and quality.",
    summary: "Mode Star uses clothing to create presence and worldview. This type can handle bold silhouettes, strong materials, and memorable styling.",
    sections: {
      style: "This type is drawn to new designs, memorable silhouettes, and high-quality materials. Clothing often becomes the center of self-expression, sometimes changing the atmosphere of the place.",
      strengths: "Mode Star has both vividness and credibility. Because this type cares about material and completion, the style can be individual without looking cheap.",
      blindspots: "When too many strong items compete, the viewer may lose the focus. Creating space around the main item makes the expression more powerful.",
      advice: "Decide the main character of the outfit and let the rest act as the stage. Shoes, hair, and accessories should support one unified direction.",
    },
  },
  OAEP: {
    name: "Free Designer",
    character: "Free Designer",
    tagline: "A creative type that values personal appearance and realistic price sense.",
    summary: "Free Designer values a look that feels personally right. This type can build atmosphere through combinations, vintage pieces, and small styling ideas.",
    sections: {
      style: "This type edits clothing through personal feeling, using vintage pieces, recombinations, color choices, and accessories. It values mood and taste without over-adjusting to others.",
      strengths: "Free Designer has natural individuality. Because this type does not rely only on expensive clothing, the outfit often feels human, creative, and personal.",
      blindspots: "Moving freely toward what you like can delay adjustment to the situation. Basic cleanliness and good fit help individuality come across more positively.",
      advice: "Keep your personal color or shape, but organize the base. White, black, gray, or navy can stabilize the outfit while letting one favorite piece stand out.",
    },
  },
  OAEQ: {
    name: "Signature Artist",
    character: "Signature Creator",
    tagline: "A type that follows a personal worldview and quality standards.",
    summary: "Signature Artist treats clothing as a way to shape a personal world. This type values meaning, quality, and aesthetic consistency over trends.",
    sections: {
      style: "This type often has a strong sense of color, material, silhouette, and brand worldview. It values personal conviction more than broad approval, building a consistent story through clothing.",
      strengths: "Signature Artist combines strong individuality with a sense of quality. Instead of easy trends, this type gathers pieces chosen through a personal eye, creating a one-of-a-kind impression.",
      blindspots: "A strong worldview can sometimes create distance in certain contexts. Keeping the preferred material or color while adjusting only the shape can make the message smoother.",
      advice: "Grow items that can become your signature. Investing in shoes, coats, or accessories that last for years deepens this type's appeal.",
    },
  },
};

const typeGroupsEn = [
  {
    id: "functional-context",
    title: "Functional Context Types",
    color: "#8a66a0",
    copy: "Types that value functionality and appropriateness, creating reliable choices.",
    codes: ["TFCP", "TFCQ", "OFCP", "OFCQ"],
  },
  {
    id: "functional-expression",
    title: "Free Functional Types",
    color: "#2fa06e",
    copy: "Types that use function as a base while enjoying personal combinations.",
    codes: ["TFEP", "TFEQ", "OFEP", "OFEQ"],
  },
  {
    id: "appearance-context",
    title: "Appearance Context Types",
    color: "#4297b3",
    copy: "Types that value visual impression and consideration for the situation.",
    codes: ["TACP", "TACQ", "OACP", "OACQ"],
  },
  {
    id: "appearance-expression",
    title: "Appearance Expression Types",
    color: "#e0a82e",
    copy: "Types that enjoy fashion as self-expression and visual change.",
    codes: ["TAEP", "TAEQ", "OAEP", "OAEQ"],
  },
];

function getTypeGroup(code) {
  return typeGroups.find((group) => group.codes.includes(code));
}

function getTypeColor(code) {
  return getTypeGroup(code)?.color || typeData[code].color;
}

