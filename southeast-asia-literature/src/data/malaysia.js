/* eslint max-len: 0 */
import audioPath from '../../static/audio/audio-malaysia.mp3'
import mobileImage from '../../static/image/mobile-malaysia-768x768.jpg'
import tabletImage from '../../static/image/tablet-malaysia-1024x1024.jpg'

const interview = [
  {
    question: 'Q1. 你為馬航370風波寫詩、為巴勒斯坦寫詩，對你而言，詩在這些事件中扮演甚麼樣的位置？你如何看待寫詩和社會時事之間的關係？',
    answer: ['寫詩是詩人對生活周遭環境展現感受和想法的一種方式，包括悲劇、時事、災難和戰爭。詩人僅能聽和看，這是他能為罹難者表達的方式。藉此，詩人也有機會感同身受，這是一件有意義和價值深遠的事，詩人扮演捕捉當下事件的重要角色，詩作將被封存，在被閱讀的某一天又會被重新追憶，這是詩人能有的貢獻。'],
  },
  {
    question: 'Q2. 你也為你的生活的城市寫詩嗎？',
    answer: ['有，我寫了許多關於祖國的詩，我是怡保 Karyawan PK 作家協會的成員，這也是我的出生地。我的詩選中有很多關於家鄉的美景，我同樣在每首詩的結尾記下地點，而這些資訊是為了方便記憶時空。'],
  },
  {
    question: 'Q3. 你寫的情詩動人，若以植物比喻愛情，你認為會是哪種植物？',
    answer: ['其實我不確定哪種花草足以代表愛情，這取決於個人。植物是造物主的創作，美也能被轉譯成愛或其他的感覺，雖然無論植物是大、是小、是香的、還是腐臭的，它還是有自己的故事、有它的魅力。當我心中有愛，會將所有眼前植物化作愛的感受，我擁抱並且親吻。感受喚起我創作的靈魂，花草的美麗和香氣總是伴隨愛的感受而更為清新。'],
  },
  {
    question: 'Q4. 寫童書和寫給大人看的作品，在創作過程中有沒有相同的地方？或者不同的靈感來源？',
    answer: ['寫童書和寫成人書籍的不同之處，在於語言夠不夠淺顯易懂，要讓小孩覺得吸睛，童書圖片搭配就必須有趣，甚至可以先不顧內容的限制，反正兒童不宜的元素會再被學校和家長擋下。我非常渴望創作一本童書，目前時間尚未允許我這麼做，三年前我認識幾位童書作家：Basari Mat Yazit, Mohd Azhar Ishak，接著教我說故事的老師 Fauziah Sulaiman 夫人帶我近來這圈子，因此，為了更增添圖書的創作經驗和知識，我們將在四月初前往韓國南怡島（Nami Island）取經，對孩子們來說那是一座得天獨厚的魔幻島嶼。'],
  },
  {
    question: 'Q5. 在警隊服務期間，帶給你寫作最大的影響是什麼？',
    answer: [
      '其實在我加入馬來西亞皇家警察前，我已經開始寫作，在無人知曉的情況下我把詩寄給媒體，當我得知被分配到公關部門時，我覺得是幸運的，作為警政部門的記者有助於​​探索我的寫作潛力，我寫了大量的新聞和警察團隊活動稿，提供給在地雜誌社和新聞通訊社，還擔任「Polis Dan Anda」廣播節目的播音員，在這樣有創意的園地裡，也間接幫助發展我的寫作才華。',
      '我在警界獲得了常人實屬難得的寶貴經驗，也時常感到自豪，因為我是這個圈子裡幾乎唯一的女性，對如我一般的女人而言，是極具挑戰性的工作。感謝馬來西亞皇家警察（PDRM, Polis Diraja Malaysia）、我的家人與我的朋友們。',
    ],
  },
]

const audio = {
  id: 'malaysia',
  audioSrc: audioPath,
  translator: ['區秀詒'],
  title: {
    chinese: '〈等〉',
    origin: '〈MENUNGGU〉',
  },
  letter: {
    chinese: [
      '我忠於愛情<br />至今仍在等待<br />我很確定你將依約出現',
      '我在心蹦跳的那一刻知道了我對你的留念<br />你的嘴唇將說出我的名字<br />於你因思念而靈魂顫抖的時刻<br />確定我心會憂傷地凝視著遠方尋找你',
      '當時我拖曳著寂寞與失望<br />你那魅惑的一簇愛的眼淚',
      '我們怨懟的影子雖終將擦肩而過<br />但那已足以述說著思念<br />和我們曾經合一的感情',
      '讓他永遠在心深處<br />雖然死亡即將提出邀約<br />你說我們的相遇已然註定',
      '我們待會在彼處相聚。',
      '<em>2012 年 9 月 29 日</em><br /><em>彩虹公寓</em>',
    ],
    // origin: [
    //   '',
    // ],
  },
  lang: 'malaysian',
}

const author = {
  image: {
    mobile: mobileImage,
    tablet: tabletImage,
    desktop: mobileImage,
  },
  nameChinese: '諾拉茲瑪阿布巴卡',
  nameOrigin: 'NORAZIMAH ABU BAKAR',
  country: '馬來西亞',
  description: '1962 年出生於馬來西亞怡保，畢業於瑪拉工藝大學（UiTM Shah Alam）大眾傳播學系。1990 年代初期便投入文學創作，服務於馬來西亞皇家警察學院多年。退休後更加創作不綴，詩作曾在諸多地方報紙與雜誌刊出。編輯多達 35 本詩集，並創作詩集《夜之紀年》（2014）與《天空、土地與大海》（2016）。2016年榮獲國家圖書發展基金會潛力詩人獎，2017年更獲頒大馬來世界文學協會獎勵女性作家之「施麗甘蒂獎」。',
}

export default {
  author,
  audio,
  interview,
}
