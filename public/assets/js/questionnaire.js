document.addEventListener('DOMContentLoaded', function () {
  const questions = [
    {
      content: "問題の解決方法を考えるとき，いくつもの方法を考える",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-1",
      attribute: "Problemsolving"
    },

    {
      content: "困ったとき，状況について調べ，いろいろな情報を得る",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-2",
      attribute: "Problemsolving"
    },

    {
      content: "問題に直面したとき，周囲の環境要因についても分析する",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-3",
      attribute: "Problemsolving"
    },

    {
      content: "問題を解決した後，どこが上手く行ってどこが失敗だったかを分析してみる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-4",
      attribute: "Problemsolving"
    },

    {
      content: "決断をするとき，いくつかの選択肢を比較検討する",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-5",
      attribute: "Problemsolving"
    },

    {
      content: "問題の解決に最初に失敗してしまうと解決できないと考えてしまう",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-6",
      attribute: "Problemsolving"
    },
    {
      content: "問題解決のための時間を取らずにただボーッとしている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-7",
      attribute: "Problemsolving"
    },
    {
      content: "問題を解決しようとしても現実的に考えられず，右往左往する",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-8",
      attribute: "Problemsolving"
    },
    {
      content: "緊張しすぎて問題を解決するいろいろな方法を考えることができない",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-9",
      attribute: "Problemsolving"
    },
    {
      content: "問題に直面したとき，解決できる問題かどうか確信が持てない",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-10",
      attribute: "Problemsolving"
    },
    {
      content: "はじめは解決が困難に思える問題でもほとんどのことは解決できる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-11",
      attribute: "Problemsolving"
    },
    {
      content: "下した決断についてはその後も満足している",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-12",
      attribute: "Problemsolving"
    },
    {
      content: "問題解決のための計画を立てるとき上手く行くと確信している",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-13",
      attribute: "Problemsolving"
    },
    {
      content: "時間を掛けて努力すればほとんどの問題を解決できる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-14",
      attribute: "Problemsolving"
    },
    {
      content: "新しい状況で問題が生じても解決できる自信がある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-15",
      attribute: "Problemsolving"
    },
    {
      content: "色々なことに挑戦することが好きだ",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-16",
      attribute: "Resilience"
    },
    {
      content: "珍しい体験や新しいことに魅力を感じる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-17",
      attribute: "Resilience"
    },
    {
      content: "物事に対する好奇心や関心が高い方だ",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-18",
      attribute: "Resilience"
    },
    {
      content: "私は知識の幅を広げたいと強く思う",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-19",
      attribute: "Resilience"
    },
    {
      content: "困難があっても、それは人生において意義深いものだと感じる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-20",
      attribute: "Resilience"
    },
    {
      content: "慣れていないことに取り組むのが苦手な方だ",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-21",
      attribute: "Resilience"
    },
    {
      content: "慣れていないことに取り組むのが苦手な方だ",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-21",
      attribute: "Resilience"
    },
    {
      content: "新たなことに取り組むのは少し億劫だ",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-22",
      attribute: "Resilience"
    },
    {
      content: "感情をコントロールすることに長けている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-23",
      attribute: "Resilience"
    },
    {
      content: "自分が動揺した時でも、自分を静めることができる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-24",
      attribute: "Resilience"
    },
    {
      content: "いつも冷静な状態でいられるように意識している",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-25",
      attribute: "Resilience"
    },
    {
      content: "途中で諦めずに最後まで頑張るねばり強い人間だ",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-26",
      attribute: "Resilience"
    },
    {
      content: "気分転換するのが苦手で、なかなかリフレッシュできない",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-27",
      attribute: "Resilience"
    },
    {
      content: "つらい出来事が起こると、耐えることが難しくなる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-28",
      attribute: "Resilience"
    },
    {
      content: "その日の気分に左右されて、行動パターンが変わってしまうことが多い",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-29",
      attribute: "Resilience"
    },
    {
      content: "あきっぽさを持っていて、物事に興味を持つ時間が短い",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-30",
      attribute: "Resilience"
    },
    {
      content: "怒りを感じると、つい抑えられなくなってしまう傾向がある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-31",
      attribute: "Resilience"
    },
    {
      content: "未来は希望に満ちていて、素晴らしいことが起こると信じている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-32",
      attribute: "Resilience"
    },
    {
      content: "今後の展望を見ると、明るい道が待っていると思っている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-33",
      attribute: "Resilience"
    },
    {
      content: "自分の将来には希望を持っていて、良いことが待っていると思っている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-34",
      attribute: "Resilience"
    },
    {
      content: "自分には将来達成したい目標がある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-35",
      attribute: "Resilience"
    },
    {
      content: "自分の目標に向けて努力を積み重ねている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-36",
      attribute: "Resilience"
    },
    {
      content: "考えを整理して、状況を明確に把握できるようにした",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-37",
      attribute: "problemfocus"
    },
    {
      content: "望ましくない状況の要因を考慮し、解決方法を考えた",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-38",
      attribute: "problemfocus"
    },
    {
      content: "問題の背後にある原因を探り出すために努力した",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-39",
      attribute: "problemfocus"
    },
    {
      content: "状況を振り返りながら、その経緯を理解しようとした",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-40",
      attribute: "problemfocus"
    },
    {
      content: "状況を理解するために情報を収集したり調査したりした",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-41",
      attribute: "problemfocus"
    },
    {
      content: "行動計画を立てる前に問題の要素を分析し、優先順位を決めた",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-42",
      attribute: "problemfocus"
    },
    {
      content: "自分がやるべきことを考え出した",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-43",
      attribute: "problemfocus"
    },
    {
      content: "動するための計画を練った",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-44",
      attribute: "problemfocus"
    },
    {
      content: "問題に向き合って適切な対策を考案した",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-45",
      attribute: "problemfocus"
    },
    {
      content: "問題の本質を捉えて、どうやって解決できるかを考えた",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-46",
      attribute: "problemfocus"
    },
    {
      content: "解決への道筋を考慮して具体的なアイデアを出した",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-47",
      attribute: "problemfocus"
    },
    {
      content: "問題解決の結果に基づいて将来の展開を考慮した",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-48",
      attribute: "problemfocus"
    },
    {
      content: "自分の感情について考えながら行動することを意識した",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-49",
      attribute: "problemfocus"
    },
    {
      content: "自分のやりたいことを考えてみた",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-50",
      attribute: "problemfocus"
    },
    {
      content: "自分の将来について見通しを持とうと考えた",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-51",
      attribute: "problemfocus"
    },
    {
      content: "自分が将来どうなっていたいかを考えた",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-52",
      attribute: "problemfocus"
    },
    {
      content: "その問題について、他の人の意見やアドバイスを聞いてみた",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-53",
      attribute: "problemfocus"
    },
    {
      content: "ニュースや雑誌などを通じて、その問題に関する情報を入手した",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-54",
      attribute: "problemfocus"
    },
    {
      content: "問題の所在を明確にするために、様々な調査を行った",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-55",
      attribute: "problemfocus"
    },
    {
      content: "その問題について他の人に相談した",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-56",
      attribute: "problemfocus"
    },
    {
      content: "共通の経験を持つ人に話を聞いてみて参考にした",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-57",
      attribute: "problemfocus"
    },
    {
      content: "将来の目標や計画をある程度描いている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-58",
      attribute: "timeperspective"
    },
    {
      content: "自分の将来を考えて、現在から準備を進めている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-59",
      attribute: "timeperspective"
    },
    {
      content: "将来達成したい目標を持っている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-60",
      attribute: "timeperspective"
    },
    {
      content: "将来の方向性が明確に定まっていなくて、漠然としている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-61",
      attribute: "timeperspective"
    },
    {
      content: "将来のことを思い描くことにあまり興味がない",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-62",
      attribute: "timeperspective"
    },
    {
      content: "将来に向けて期待感や希望を抱いている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-63",
      attribute: "timeperspective"
    },
    {
      content: "10年後の自分の姿については、今のところ具体的なイメージが持てない",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-64",
      attribute: "timeperspective"
    },
    {
      content: "自分の将来は、自分の力で築いていけると信じている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-65",
      attribute: "timeperspective"
    },
    {
      content: "自分の将来について不安や不確かさを感じている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-66",
      attribute: "timeperspective"
    },
    {
      content: "毎日の生活が充実していて、満足している",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-67",
      attribute: "timeperspective"
    },
    {
      content: "今の生活には満足しており、幸せを感じている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-68",
      attribute: "timeperspective"
    },
    {
      content: "毎日のルーティンが同じで、ワンパターンな感じで退屈している",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-69",
      attribute: "timeperspective"
    },
    {
      content: "毎日が何気なく過ぎていく感じがする",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-70",
      attribute: "timeperspective"
    },
    {
      content: "現在の自分が、本来の自分とは違うような気がしている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-71",
      attribute: "timeperspective"
    },
    {
      content: "過去の自分を肯定し、受け入れることができる自信がある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-72",
      attribute: "timeperspective"
    },
    {
      content: "過去の出来事を思い出すことが、あまり好きではない",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-73",
      attribute: "timeperspective"
    },
    {
      content: "過去の経験は苦しいものが多く、辛い思い出ばかりが残っている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-74",
      attribute: "timeperspective"
    },
    {
      content: "過去の出来事について、なかなか忘れられずに引きずっている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-75",
      attribute: "timeperspective"
    },
    {
      content: "自分ならではの個性を重要視している",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-76",
      attribute: "Selfesteem"
    },
    {
      content: "自分には、自分だけの人生があると思っていて、それが良いと思っている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-77",
      attribute: "Selfesteem"
    },
    {
      content: "自分の良い面も悪い面も含めて、ありのままの自分を受け入れることができる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-78",
      attribute: "Selfesteem"
    },
    {
      content: "自分の個性に抵抗せず、むしろそれを受け入れている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-79",
      attribute: "Selfesteem"
    },
    {
      content: "自分の夢を叶えるために積極的に取り組み、情熱を注いでいる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-80",
      attribute: "Selfesteem"
    },
    {
      content: "自分が情熱を注いで取り組んでいることに充実感を感じている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-81",
      attribute: "Selfesteem"
    },
    {
      content: "ポジティブな姿勢で物事に取り組むことで、成果を上げることができる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-82",
      attribute: "Selfesteem"
    },
    {
      content: "自分の良い面をより伸ばすように心掛けている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-83",
      attribute: "Selfesteem"

    },
    {
      content: "やりたいことに情熱を注ぎ、やる気に満ちた生活を送っている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-84",
      attribute: "Selfesteem"
    },
    {
      content: "本当にやりたいことが何なのか分かっていない",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-85",
      attribute: "Selfesteem"
    },
    {
      content: "自分には目標というものがなく、模索している",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-86",
      attribute: "Selfesteem"
    },
    {
      content: "生活がとても楽しく、充実感を感じている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-87",
      attribute: "Selfesteem"
    },
    {
      content: "わだかまりがなく、心地よくスッキリしている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-88",
      attribute: "Selfesteem"
    },
    {
      content: "自分の日々の活動や成果に満足感と充実感を感じている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-89",
      attribute: "Selfesteem"
    },
    {
      content: "精神的に穏やかで楽な気分を保っている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-90",
      attribute: "Selfesteem"
    },
    {
      content: "自分が好きなことに時間を使い、それを楽しんでいる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-91",
      attribute: "Selfesteem"
    },
    {
      content: "自分自身を束縛せず、自由に生きている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-92",
      attribute: "Selfesteem"
    },
    {
      content: "今の現状に満足感がもてない",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-93",
      attribute: "Selfesteem"
    },
    {
      content: "心から楽しいと思える瞬間や体験がない",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-94",
      attribute: "Selfesteem"
    },
    {
      content: "人間関係において一定の距離を保つことがあり、その距離がコミュニケーションの妨げをしているように感じている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-95",
      attribute: "Selfesteem"
    },
    {
      content: "自分の内面を他人に見せないようにしていることがあり、こころを閉ざしているように感じている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-96",
      attribute: "Selfesteem"
    },
    {
      content: "自分は孤立しているように感じる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-97",
      attribute: "Selfesteem"
    },
    {
      content: "他人を信用することに対してハードルを感じている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-98",
      attribute: "Selfesteem"
    },
    {
      content: "友人との関係性において、心理的な距離を感じてしまい、孤独感や悲しみを抱えてしまう",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-99",
      attribute: "Selfesteem"
    },
    {
      content: "友人と話していても話が噛み合わず、わずらわしい",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-100",
      attribute: "Selfesteem"
    },
    {
      content: "他人と好意的になろうと思わない",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-101",
      attribute: "Selfesteem"
    },
    {
      content: "相手に気を配りながらも自分の言いたいことを言うことができる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-102",
      attribute: "Selfesteem"
    },
    {
      content: "自分の納得のいくまで相手と話し合うようにしている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-103",
      attribute: "Selfesteem"
    },
    {
      content: "疑問だと感じたらそれらを堂々と言える",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-104",
      attribute: "Selfesteem"
    },
    {
      content: "友だちと真剣に話し合う",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-105",
      attribute: "Selfesteem"
    },
    {
      content: "人前でもこだわりなく自由に感じたままを言うことができる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-106",
      attribute: "Selfesteem"
    },
    {
      content: "人前でもありのままの自分を出せる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-107",
      attribute: "Selfesteem"
    },
    {
      content: "自主的に友人に話しかけていく",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-108",
      attribute: "Selfesteem"
    },
    {
      content: "人から何が言われないか、変な目で見られないかと気にしている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-109",
      attribute: "Selfesteem"
    },
    {
      content: "人に対して、自分のイメージを悪くしないかと恐れている自分が他人の目にどう映るかを意識すると身動きできなくなる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-110",
      attribute: "Selfesteem"
    },
    {
      content: "他人に自分の良いイメージだけを印象づけようとしている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-111",
      attribute: "Selfesteem"
    },
    {
      content: "無理して人に合わせようとしてきゅうくつな思いをしている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-112",
      attribute: "Selfesteem"
    },
    {
      content: "社交能力に自信がある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-113",
      attribute: "Selfunderstand"
    },
    {
      content: "社交範囲が広い",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-114",
      attribute: "Selfunderstand"
    },
    {
      content: "同年代の異性と楽しく話ができる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-115",
      attribute: "Selfunderstand"
    },
    {
      content: "異性の誘い方が上手い",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-116",
      attribute: "Selfunderstand"
    },
    {
      content: "人に対して思いやりがある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-117",
      attribute: "Selfunderstand"
    },
    {
      content: "人に対して寛大である",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-118",
      attribute: "Selfunderstand"
    },
    {
      content: "おおらかな人柄である",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-119",
      attribute: "Selfunderstand"
    },
    {
      content: "自分の生き方に自信がある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-120",
      attribute: "Selfunderstand"
    },
    {
      content: "個性的な生き方をしている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-121",
      attribute: "Selfunderstand"
    },
    {
      content: "自分に自信がある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-122",
      attribute: "Selfunderstand"
    },
    {
      content: "几帳面な性格である",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-123",
      attribute: "Selfunderstand"
    },
    {
      content: "自分に厳しい",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-124",
      attribute: "Selfunderstand"
    },
    {
      content: "責任感が強い",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-125",
      attribute: "Selfunderstand"
    },
    {
      content: "体力・運動能力に自信がある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-126",
      attribute: "Selfunderstand"
    },
    {
      content: "運動神経が発達している",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-127",
      attribute: "Selfunderstand"
    },
    {
      content: "スポーツマンタイプに見られる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-128",
      attribute: "Selfunderstand"
    },
    {
      content: "得意なスポーツがある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-129",
      attribute: "Selfunderstand"
    },
    {
      content: "性的テクニックに自信がある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-130",
      attribute: "Selfunderstand"
    },
    {
      content: "性的能力に自信がある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-131",
      attribute: "Selfunderstand"
    },
    {
      content: "性的経験が豊富である",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-132",
      attribute: "Selfunderstand"
    },
    {
      content: "自由に使えるお金が多い",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-133",
      attribute: "Selfunderstand"
    },
    {
      content: "家庭が裕福である",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-134",
      attribute: "Selfunderstand"
    },
    {
      content: "経済的な面で自信がある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-135",
      attribute: "Selfunderstand"
    },
    {
      content: "社会的に評判の良い大学に在籍していた or いる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-136",
      attribute: "Selfunderstand"
    },
    {
      content: "出身校が有名である",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-137",
      attribute: "Selfunderstand"
    },
    {
      content: "家や大学などの社会的背景に自信がある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-138",
      attribute: "Selfunderstand"
    },
    {
      content: "知的知能に自信がある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-139",
      attribute: "Selfunderstand"
    },
    {
      content: "人より色々なことを知っている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-140",
      attribute: "Selfunderstand"
    },
    {
      content: "頭の回転が速い",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-141",
      attribute: "Selfunderstand"
    },
    {
      content: "目鼻立ちが整っている",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-142",
      attribute: "Selfunderstand"
    },
    {
      content: "自分の外見に自信がある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-143",
      attribute: "Selfunderstand"
    },
    {
      content: "自分の顔に気に入っているところがある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-144",
      attribute: "Selfunderstand"
    },
    {
      content: "趣味・特技に自信がある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-145",
      attribute: "Selfunderstand"
    },
    {
      content: "特技がある",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-146",
      attribute: "Selfunderstand"
    },
    {
      content: "自分の衝動や欲求を抑える",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-147",
      attribute: "Communication"
    },
    {
      content: "自分の感情をうまくコントロールする",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-148",
      attribute: "Communication"
    },
    {
      content: "善悪の判断に基づいて正しい行動を選択する",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-149",
      attribute: "Communication"
    },
    {
      content: "周りの期待に応じた振る舞いをする",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-150",
      attribute: "Communication"
    },
    {
      content: "自分の考えを言葉でうまく表現する",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-151",
      attribute: "Communication"
    },
    {
      content: "自分の気持ちをしぐさでうまく表現する",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-152",
      attribute: "Communication"
    },
    {
      content: "自分の気持ちを表情でうまく表現する",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-153",
      attribute: "Communication"
    },
    {
      content: "自分の感情や心理状態を正しく察してもらう",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-154",
      attribute: "Communication"
    },
    {
      content: "相手の考えを発言から正しく読み取る",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-155",
      attribute: "Communication"
    },
    {
      content: "相手の気持ちをしぐさから正しく読み取る",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-156",
      attribute: "Communication"
    },
    {
      content: "相手の気持ちを表情から正しく読み取る",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-157",
      attribute: "Communication"
    },
    {
      content: "相手の感情や心理状態を敏感に感じ取る",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-158",
      attribute: "Communication"
    },
    {
      content: "会話の主導権を握って話を進める",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-159",
      attribute: "Communication"
    },
    {
      content: "まわりとは関係なく自分の意見や立場を明らかにする",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-160",
      attribute: "Communication"
    },
    {
      content: "納得させるために相手に柔軟に対応して話を進める",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-161",
      attribute: "Communication"
    },
    {
      content: "自分の主張を論理的に筋道を立てて説明する",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-162",
      attribute: "Communication"
    },
    {
      content: "相手の意見や立場に共感する",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-163",
      attribute: "Communication"
    },
    {
      content: "友好的な態度で相手に接する",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-164",
      attribute: "Communication"
    },
    {
      content: "相手の意見をできるかぎり受け入れる",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-165",
      attribute: "Communication"
    },
    {
      content: "相手の意見や立場を尊重する",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-166",
      attribute: "Communication"
    },
    {
      content: "人間関係を第一に考えて行動する",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-167",
      attribute: "Communication"
    },
    {
      content: "人間関係を良好な状態に維持するように心がける",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-168",
      attribute: "Communication"
    },
    {
      content: "意見の対立による不和に適切に対処する",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-169",
      attribute: "Communication"
    },
    {
      content: "感情的な対立による不和に適切に対処する",
      options: [
        { value: "1", class: "option-A" },
        { value: "2", class: "option-B" },
        { value: "3", class: "option-C" },
        { value: "4", class: "option-D" },
        { value: "5", class: "option-E" }
      ],
      name: "que-170",
      attribute: "Communication"
    },
  ];


  let currentStep = -1;

  function createQuestionElement(question) {
    const questionElement = document.createElement('div');
    questionElement.classList.add('option-main');

    const questionContent = document.createElement('div');
    questionContent.classList.add('question-content');
    questionContent.style.whiteSpace = 'pre-wrap';
    questionContent.textContent = question.content;
    questionElement.appendChild(questionContent);

    const parentContainer = document.createElement('div');
    parentContainer.classList.add('parent-container');
    questionElement.appendChild(parentContainer);

    const alignmentContainer = document.createElement('div');
    alignmentContainer.classList.add('flex', 'justify-center');
    parentContainer.appendChild(alignmentContainer);

    const alignMiddle1 = document.createElement('div');
    alignMiddle1.classList.add('align-middle');
    alignmentContainer.appendChild(alignMiddle1);

    const alignMiddleInner1 = document.createElement('div');
    alignMiddleInner1.classList.add('align-middle-inner');
    alignMiddle1.appendChild(alignMiddleInner1);

    const textContainer1 = document.createElement('div');
    textContainer1.classList.add('md:flex', 'md:justify-center', 'md:items-center');
    alignMiddleInner1.appendChild(textContainer1);

    const text1 = document.createElement('div');
    text1.classList.add('text-center', 'md:text-left');
    text1.style.marginRight = '20px';
    textContainer1.appendChild(text1);

    const span1 = document.createElement('span');
    span1.classList.add('whitespace-nowrap');
    span1.textContent = 'まったく当てはまらない';
    text1.appendChild(span1);

    // いらなかったら削除
    const br = document.createElement('br'); // 改行用の要素を追加
    text1.appendChild(br);

    const alignMiddle2 = document.createElement('div');
    alignMiddle2.classList.add('align-middle');
    alignmentContainer.appendChild(alignMiddle2);

    const alignMiddleInner2 = document.createElement('div');
    alignMiddleInner2.classList.add('align-middle-inner');
    alignMiddle2.appendChild(alignMiddleInner2);

    const textContainer2 = document.createElement('div');
    textContainer2.classList.add('md:flex', 'md:justify-center', 'md:items-center');
    alignMiddleInner2.appendChild(textContainer2);

    const text2 = document.createElement('div');
    text2.classList.add('text-center', 'md:text-right');
    text2.style.marginLeft = '20px';
    textContainer2.appendChild(text2);

    const span2 = document.createElement('span');
    span2.classList.add('whitespace-nowrap');
    span2.textContent = '非常によく当てはまる';
    text2.appendChild(span2);

    const optionParent = document.createElement('div');
    optionParent.classList.add('option-parent');
    questionElement.appendChild(optionParent);

    question.options.forEach((option, index) => {
      const optionBox = document.createElement('div');
      optionBox.classList.add('option-box');
      optionParent.appendChild(optionBox);

      const optionElement = document.createElement('div');
      optionElement.classList.add('option', option.class);
      optionBox.appendChild(optionElement);

      const inputRadio = document.createElement('input');
      inputRadio.type = 'radio';
      inputRadio.name = question.name;
      inputRadio.dataset.question_id = currentStep + 1;
      inputRadio.value = option.value;
      inputRadio.addEventListener('change', () => showNextField());
      optionElement.appendChild(inputRadio);
    });

    return questionElement;
  }

  function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }

  shuffleQuestions(); // 質問をランダムに並び替える


  function showNextField() {
    const submitButton = document.getElementById('submitButton');
    currentStep++;

    if (currentStep >= questions.length) {
      console.log('フォームの入力が完了しました');
      submitButton.classList.remove('hidden');
      return;
    }

    updateProgressBar();

    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = '';

    const question = questions[currentStep];
    const questionElement = createQuestionElement(question);
    quizContainer.appendChild(questionElement);
  }

  function updateProgressBar() {
    const progress = document.getElementById('progress');
    const progressMarker = document.querySelector('.progress-marker');
    const progressPercentage = document.getElementById('progressPercentage');
    const percentage = ((currentStep) / questions.length) * 100;

    const percentageString = percentage.toFixed(0); // 2桁の小数点以下の桁数に制限

    progress.style.width = percentageString + '%';
    progressMarker.style.left = percentageString + '%';
    progressPercentage.textContent = percentageString + '%';
  }

  showNextField();

});