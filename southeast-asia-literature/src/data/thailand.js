/* eslint max-len: 0 */
import audioPath from '../../static/audio/audio-thailand.mp3'
import mobileImage from '../../static/image/mobile-thailand-768x768.jpg'
import tabletImage from '../../static/image/tablet-thailand-1024x1024.jpg'

const interview = [
  {
    question: 'Q1. 你怎麼看待現在生活的城市曼谷？它給你許多創作的觸發和想像嗎？',
    answer: ['聽我這樣說你可能覺得傻眼，但我從這城市得到最多的靈感，大部分是從對曼谷的沮喪來的。通常我真的不需要被某座城市觸發後才寫或創作，但有一個知性且開心的環境觸發靈感是加分的，很不幸的，對我來說曼谷並非這樣的地方，所以囉，我在曼谷的沮喪，逼我要用更有創意的方法去想事情，以應對由此而生的挫敗感。'],
  },
  {
    question: 'Q2. 你的作品中常有令人莞爾一笑的幽默感，在生活中你會怎麼培養呢？',
    answer: ['幽默感是對抗愚蠢最棒的武器之一，我無法活得不幽默。我是個悲觀的憤青，而幽默幫我走過那些暗黑的日子，聽笑話和裝傻讓我覺得很爽，我覺得如果有一個地方所有事情都很搞笑，那大概是極快樂的世界，我相信事情都會有正經的一面，但不該被搞得太嚴肅，我的文章和作品也反映這樣的態度，這對我來說是很自然的，因為搞得嚴肅會讓我覺得很囧。'],
  },
  {
    question: 'Q3. 在〈括弧裡的或然率〉文中，你提到小時候有一次爸爸不買塑膠機器人模型給你而為此想自殺，聊一下你當時是怎麼想的？',
    answer: ['大概我小時候想太多吧，我總是懷疑事情，當人們質疑生活時，就會開始困惑、沮喪和憤怒，大人的世界很多謊言和騙子，我真的看透了，不過這樣想讓我很不開心。我想自殺那時的想法很天真，卻帶有很強的哲學性。我終究長大了，仍然覺得生命是一片虛無，差別在於，我發現活著本身就是一種挑戰。像人都會死亡，就像我們會長牙，但在某些時刻牙也會被拔走，當它們還能健康咬合時，為什麼要急著拔掉呢？生活和此沒有太多不同，生命終將逝去，為何要急著以這樣或那樣的方法終結它呢？不如活著時多找點樂子吧？'],
  },
  {
    question: 'Q4. 你曾在國中用的筆記本寫下「我永遠不會改變」，現在的你怎麼看當時的自己？你覺得自己改變了嗎？會如何思考改變這件事？',
    answer: ['我寫得很孩子氣，但那卻是故事的重點。人會改變是自然而然的，也理應如此，最好是變得更好，現在的我和當時寫下這句話的那個屁孩已經不同，也和在20歲左右寫下這個故事的年輕的我大異其趣。我個人覺得自己變得更好，也對此感到自豪，我比較喜歡現在而不是以前的自己，不像很多人說他們想重返童年時光。我從來就不是快樂的小孩，也不想再經歷一次。'],
  },
  {
    question: 'Q5. 從作品中得知你的外婆已離世，如果外婆還在世，你最想對她說什麼？',
    answer: ['我可能會說我心懷感激她一路拉拔我長大，她是單純的人，同時對事物有獨到的見解。我想跟她講好多我離家生活後的體驗，到美國唸書後我們疏於聯繫，有時想到這件事我仍覺得有些後悔。即使她的教育程度有限，卻是位狂熱的讀書人。'],
  },
]

const audio = {
  id: 'thailand',
  audioSrc: audioPath,
  translator: ['梁震牧'],
  title: {
    chinese: '選讀自〈括弧裡的或然率〉',
    origin: '〈ความน่าจะเป็น〉',
  },
  letter: {
    chinese: [
      '外婆一天一天變老，我不太有時間去探望她，不管何時打電話去，外婆的聲音都還是一樣清亮有活力，外婆每天早上都跟年紀相仿的朋友去公園運動，平常在家時也沒閒著，白天總是做志工似地幫朋友帶小孩，每天都用她最愛的古典樂陶冶自己跟孩子們，沒有一天休息。我不太擔心外婆，因為我知道她身心都很強壯，但說實話，有時我只是全心在煩惱自己的事卻忘了她，把外婆當作枯萎的葉子一樣拋下。多討人厭的比喻啊，枯萎的葉子，再曬多少太陽都沒有好處，也沒辦法吸收養分，摘下丟棄才能讓新生的葉子有地方生長。我必須時時提醒自己，別把他人忘掉，尤其是外婆，如果外婆走了，我就是這棵樹上最後一片葉子了。',
    ],
    // origin: [
    //   '',
    // ],
  },
  lang: 'thai',
}

const author = {
  image: {
    mobile: mobileImage,
    tablet: tabletImage,
    desktop: mobileImage,
  },
  nameChinese: '帕達・雲',
  nameOrigin: 'PRABDA YOON',
  country: '泰國',
  description: '1973 年出生曼谷，15 歲前往美國留學，1997 年取得紐約Cooper Union藝術學系學士學位；1998 年回泰國服兵役，後隨即投入文學創作。第一本作品 Muang Moon Chak（直譯：直角的城市）與短篇小說集 Kwam Na Ja Pen（直譯：或然率）於 2000 年接續出版，並獲重要東南亞文學獎 （S.E.A Write Award）。帕達被廣泛認為是推廣泰國「後現代」書寫的代表，首部小說集問世後，創作能量便從未停止，作品亦被翻譯成多國語言。',
}

export default {
  author,
  audio,
  interview,
}
