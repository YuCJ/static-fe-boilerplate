import pathProcessor from '../utils/path-processor'

const subtitles = [
  {
    text: '葉青，我親愛的豹比，生日快樂',
    start: 1.40,
    end: 4.40,
  },
  {
    text: '今天是你的生日，永遠的32歲，算一算已經比我小了喔',
    start: 5.90,
    end: 12.65,
  },
  {
    text: '我原本還以為我撐不了多久呢，沒想到走著走著，也過了6年',
    start: 14.90,
    end: 21.50,
  },
  {
    text: '你應該知道我結婚了吧',
    start: 23.80,
    end: 25.55,
  },
  {
    text: '上周有拿喜餅去山上給你，紅豆蛋黃麻糬鴛鴦餅，是你最愛吃的口味',
    start: 27,
    end: 34.05,
  },
  {
    text: '現在不用怕吃多變胖了喔',
    start: 34.8,
    end: 36.90,
  },
  {
    text: '我的婚紗照，想必你也看過很多次了吧',
    start: 39.50,
    end: 42.80,
  },
  {
    text: '如果你還在，一定會用很誇張的語氣，跟你朋友炫耀你妹有多美多正多可愛吧',
    start: 44.70,
    end: 51.55,
  },
  {
    text: '我真希望能親耳聽到你的稱讚與祝福',
    start: 53.70,
    end: 57.10,
  },
  {
    text: '親愛的豹，過去幾年，我時常在心裡跟你說對不起',
    start: 59.80,
    end: 65.70,
  },
  {
    text: '對不起我沒有好好保護你，陪你到最後',
    start: 67.50,
    end: 71.30,
  },
  {
    text: '當然我也有點怪你，把我丟下來，獨自面對這個世界',
    start: 72.90,
    end: 78.80,
  },
  {
    text: '但現在我更想跟你說的是謝謝',
    start: 80,
    end: 83.80,
  },
  {
    text: '謝謝你曾經那麼愛我',
    start: 86,
    end: 87.50,
  },
  {
    text: '不管世人，或是家人，如何定義我',
    start: 88.80,
    end: 92.70,
  },
  {
    text: '在你心中我始終是最好的妹妹',
    start: 94.40,
    end: 97.30,
  },
  {
    text: '因為你是如此珍惜我，並且真誠對待你的朋友',
    start: 101,
    end: 105.70,
  },
  {
    text: '所以到你走後這麼多年，你的朋友都還把我當成親妹妹一樣關照著',
    start: 107.20,
    end: 112.90,
  },
  {
    text: '謝謝你，豹比',
    start: 114.20,
    end: 116.80,
  },
  {
    text: '謝謝你曾經是我最好的姊姊',
    start: 118,
    end: 121.1,
  },
  {
    text: '以後也永遠都是我心裡最重要的人',
    start: 122.7,
    end: 126.10,
  },
  {
    text: '愛你的雪。你的豬仔',
    start: 127,
    end: 130,
  },
]


const data = {
  title: '贖罪與共存',
  image: {
    resizedTargets: {
      mobile: pathProcessor('case1_mobile.jpg'),
      tablet: pathProcessor('case1_tablet.jpg'),
      desktop: pathProcessor('case1_desktop.jpg'),
    },
  },
  profile: {
    name: '夏雪',
    age: '33',
    occupation: '大學行政人員',
    incident: '姊姊6年前自殺過世',
  },
  content: [
    '當<a href="https://goo.gl/2Bb93y" target="_blank">葉青</a>於2011年自殺過世，人們才逐漸知道除了歌仔戲天后，這個名字也屬於一位詩人。過世後出版的兩本詩集每年再刷，每隔一段時間，詩句就會在網路被轉貼、引用，書寫在城市一隅的玻璃牆上。雨水、太陽、雲、風、影子、橘子、麵包⋯⋯生活化的意象穿透抽象詩句，像是通關密語，直達敏感的青春愁緒。',
    '「每當在臉書看到有人分享葉青的詩，我都會按讚。看到這麼多不認識的人，共感葉青的情愁，我好想跟她說，如果還在，就會發現這世界上很多人懂妳。」夏雪感嘆，葉青過世後，她聯繫出版社、協助修訂稿件，把原本只發表在BBS個人版的作品出版成詩集，完成姊姊念茲在茲的心願。',
    '對夏雪而言，那是贖罪。',
    '與姊姊同住一個屋簷下的記憶，是夏雪生命中最好的時光。大學時的葉青交友廣闊、興趣多元，住處像是文藝沙龍，各路朋友往來談詩論藝、品茶酒咖啡，讓還在讀高中的妹妹大開眼界，「有許多朋友，尤其是女同志朋友來家裡，她們都和葉青一樣有才華，令我崇拜，所以我一直以來都很支持同性婚姻。」夏雪笑著回憶。',
    '一路考上北一女、台大，離家上台北唸第一志願，是葉青遠離傷害的方式。連同哥哥，三個孩子從小就在父母婚姻破碎、言語與肢體暴力下長大，「雖然姊姊成績好較少被打，可是精神傷害沒有比較少，每天看著父母吵架鬧離婚、質問孩子要跟誰，甚至上演社會新聞中的暴力脫序行為⋯⋯在那個階段我們都被迫面對太多，不是任何小孩可以承受的事情。」夏雪說。',
    '大二時葉青第一次躁鬱症發病，家人要妹妹北上同住照應。生病後，如太陽般耀眼的光芒逐漸熄滅，在他人眼中漸漸崩壞的生命，卻拉近了過往只能遠望卻不可及的距離。姊妹倆每晚聊天長談，訴說笑容背後的痛苦經歷，成為彼此的心靈支柱。',
    '但因罹病無法承受太大壓力，葉青再難達成父母望女成鳳的心願，重複陷入研究所落榜、工作與感情不順、再度發病的循環，「對一般人，或葉青本人來說，她的人生最高點在考完大學後就結束了。從生病的那一刻起，是一路向下、沒有終點的下坡。到後來甚至沒辦法獨立生活，要持續接受父母的金援，這讓她感到非常挫敗。」夏雪說。',
    '父母的關注與資源大多給予兄姐，帶給夏雪強烈的相對剝奪感，加上對於姊姊病情的疲憊，夏雪在大學畢業後選擇到高雄獨自生活、逃離一切。',
    '「離開中北部的導火線，是和父親起了口角，他衝口要我滾蛋，去投靠我母親。我回想一直以來為這個家、為葉青付出那麼多，但卻一點也不被珍惜，只因為沒有姊姊那麼優秀，就像垃圾一樣被隨便拋棄，這讓我很傷心，不想再和家人有聯繫。」',
    '葉青在世上最後兩年的日子，夏雪大部份的時間沉浸在線上遊戲的虛擬世界，組隊打怪忘卻沉重的現實。從心理到物理，都與姊姊保持遙遠的距離，曾經相依為命的手足，成為陌生的旁觀者，「最後幾個月，她曾打電話給我試圖聊天，聊在台北生活的景況，她問我，『可以回來嗎？』我說沒有辦法。我不想再受傷了。」夏雪說。沒想到這一別就是永遠。',
    '葉青留下的遺書中，唯一提及的家人，只有妹妹。如果詩集有一天出版，要將版稅給她。看到一無所有的姊姊，在生命的最後一刻仍掛念著遠走他鄉的妹妹，夏雪無限自責。逼自己處理完詩集的出版事宜，她陷入生命的幽谷，白天強迫自己出門工作、維持社交，夜裡邊哭邊整理與葉青有關的回憶，時不時萌生隨姊姊而去的念頭。',
    '「自責是很痛苦的事情，到一個程度會覺得活不下去。為了不要過度責怪自己，只好責怪家人⋯⋯結果就是我沒辦法原諒自己也無法面對家人。但我還是想留下來為姊姊做些甚麼，彌補我在她人生最後那段時間沒有陪在她身邊的遺憾，於此同時，也必須做一些事讓留下來的這段路沒有那麼痛苦。除了推廣姊姊的詩集、保留她存在過的痕跡，我也想知道，以同樣方式失去家人的人怎麼撐過來，因此在網路上找到『自殺者遺族』這個詞，才明白我不是孤獨的，這世界上有很多人和我一樣努力著。」',
    '葉青過世兩年，2013年夏雪與現在的先生相識、結婚，對方的理解與包容，讓她意識到要為另一個人負責，不能再把想死這件事放在心上或掛在嘴邊。此外，她一直記得，葉青生前的友人，透過網路傳來的話語，形容哀傷如同雪崩，痛苦地讓人難以呼吸，但如果努力往前，有一天它會變得越來越小，像一個小小的雪球，可以放進口袋，帶著它走下去。',
  ],
  subtitles,
  catchphrase: '夏雪想對姊姊說⋯⋯',
  catchphraseFace: {
    mobile: pathProcessor('face1_mobile.png'),
    tablet: pathProcessor('face1_tablet.png'),
    desktop: pathProcessor('face1_desktop.png'),
  },
  audioFile: 'case1_audio.mp3',
}

// catchphrase face === audio recorder substitute

export default data