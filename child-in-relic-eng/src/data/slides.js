import { FullpageSlidesConstants } from '@twreporter/react-components/lib/fullpage-slides'
import { cinemagraph001, cinemagraph003, cinemagraph009, cinemagraph024 } from './cinemagraph'
import * as subtitles from './subtitles'

import mobileBg002 from '../../static/mobile/mobile-002-768x1024-bg.jpg'
import mobileBg004 from '../../static/mobile/mobile-004-768x1024-bg.jpg'
import mobileBg005 from '../../static/mobile/mobile-005-768x1024-bg.jpg'
import mobileBg006 from '../../static/mobile/mobile-006-768x1024-bg.jpg'
import mobileBg007 from '../../static/mobile/mobile-007-768x1024-bg.jpg'
import mobileBg008 from '../../static/mobile/mobile-008-768x1024-bg.jpg'
import mobileBg010 from '../../static/mobile/mobile-010-768x1024-bg.jpg'
import mobileBg011 from '../../static/mobile/mobile-011-768x1024-bg.jpg'
import mobileBg012 from '../../static/mobile/mobile-012-768x1024-bg.jpg'
import mobileBg013 from '../../static/mobile/mobile-013-768x1024-bg.jpg'
import mobileBg014 from '../../static/mobile/mobile-014-768x1024-bg.jpg'
import mobileBg015 from '../../static/mobile/mobile-015-768x1024-bg.jpg'
import mobileBg016 from '../../static/mobile/mobile-016-768x1024-bg.jpg'
import mobileBg017 from '../../static/mobile/mobile-017-768x1024-bg.jpg'
import mobileBg018 from '../../static/mobile/mobile-018-768x1024-bg.jpg'
import mobileBg019 from '../../static/mobile/mobile-019-768x1024-bg.jpg'
import mobileBg020 from '../../static/mobile/mobile-020-768x1024-bg.jpg'
import mobileBg021 from '../../static/mobile/mobile-021-768x1024-bg.jpg'
import mobileBg022 from '../../static/mobile/mobile-022-768x1024-bg.jpg'
import mobileBg023 from '../../static/mobile/mobile-023-768x1024-bg.jpg'

import tabletBg002 from '../../static/tablet/tablet-002-1024x1024-bg.jpg'
import tabletBg004 from '../../static/tablet/tablet-004-1024x1024-bg.jpg'
import tabletBg005 from '../../static/tablet/tablet-005-1024x1024-bg.jpg'
import tabletBg006 from '../../static/tablet/tablet-006-1024x1024-bg.jpg'
import tabletBg007 from '../../static/tablet/tablet-007-1024x1024-bg.jpg'
import tabletBg008 from '../../static/tablet/tablet-008-1024x1024-bg.jpg'
import tabletBg010 from '../../static/tablet/tablet-010-1024x1024-bg.jpg'
import tabletBg011 from '../../static/tablet/tablet-011-1024x1024-bg.jpg'
import tabletBg012 from '../../static/tablet/tablet-012-1024x1024-bg.jpg'
import tabletBg013 from '../../static/tablet/tablet-013-1024x1024-bg.jpg'
import tabletBg014 from '../../static/tablet/tablet-014-1024x1024-bg.jpg'
import tabletBg015 from '../../static/tablet/tablet-015-1024x1024-bg.jpg'
import tabletBg016 from '../../static/tablet/tablet-016-1024x1024-bg.jpg'
import tabletBg017 from '../../static/tablet/tablet-017-1024x1024-bg.jpg'
import tabletBg018 from '../../static/tablet/tablet-018-1024x1024-bg.jpg'
import tabletBg019 from '../../static/tablet/tablet-019-1024x1024-bg.jpg'
import tabletBg020 from '../../static/tablet/tablet-020-1024x1024-bg.jpg'
import tabletBg021 from '../../static/tablet/tablet-021-1024x1024-bg.jpg'
import tabletBg022 from '../../static/tablet/tablet-022-1024x1024-bg.jpg'
import tabletBg023 from '../../static/tablet/tablet-023-1024x1024-bg.jpg'

import desktopBg002 from '../../static/desktop/desktop-002-1440x960-bg.jpg'
import desktopBg004 from '../../static/desktop/desktop-004-1440x960-bg.jpg'
import desktopBg005 from '../../static/desktop/desktop-005-1440x960-bg.jpg'
import desktopBg006 from '../../static/desktop/desktop-006-1440x960-bg.jpg'
import desktopBg007 from '../../static/desktop/desktop-007-1440x960-bg.jpg'
import desktopBg008 from '../../static/desktop/desktop-008-1440x960-bg.jpg'
import desktopBg010 from '../../static/desktop/desktop-010-1440x960-bg.jpg'
import desktopBg011 from '../../static/desktop/desktop-011-1440x960-bg.jpg'
import desktopBg012 from '../../static/desktop/desktop-012-1440x960-bg.jpg'
import desktopBg013 from '../../static/desktop/desktop-013-1440x960-bg.jpg'
import desktopBg014 from '../../static/desktop/desktop-014-1440x960-bg.jpg'
import desktopBg015 from '../../static/desktop/desktop-015-1440x960-bg.jpg'
import desktopBg016 from '../../static/desktop/desktop-016-1440x860-bg.jpg'
import desktopBg017 from '../../static/desktop/desktop-017-1440x960-bg.jpg'
import desktopBg018 from '../../static/desktop/desktop-018-1440x960-bg.jpg'
import desktopBg019 from '../../static/desktop/desktop-019-1440x960-bg.jpg'
import desktopBg020 from '../../static/desktop/desktop-020-1440x960-bg.jpg'
import desktopBg021 from '../../static/desktop/desktop-021-1440x810-bg.jpg'
import desktopBg022 from '../../static/desktop/desktop-022-1440x960-bg.jpg'
import desktopBg023 from '../../static/desktop/desktop-023-1440x960-bg.jpg'

import topicLandingMobile from '../../static/topic-landing-mobile.jpg'
import topicLandingTablet from '../../static/topic-landing-tablet.jpg'

import soundWorkEarly from '../../static/sound/05-work-early.mp3'
import soundPoisoned from '../../static/sound/09-poisoned.mp3'
import soundAboutSalary from '../../static/sound/12-about-salary.mp3'
import soundSpecial from '../../static/sound/20-special.mp3'
import soundFutureEnding from '../../static/sound/24-future-ending.mp3'

const { BG_TYPES, CONTENT_TYPES, TEXT_BOX_POSITIONS } = FullpageSlidesConstants

const slides = [
  {
    contentType: CONTENT_TYPES.TITLE_LEFT,
    showNextPageButton: false,
    content: {
      subtitle: 'A Youth in Ruins',
      title: 'At age of fifteen, I\'ve begun to earn my own living',
      date: '2017.11.01',
    },
    backgroundType: BG_TYPES.CINEMAGRAPH,
    background: {
      cinemagraphLayers: cinemagraph001.getAllLayerData(),
      bgColor: 'black',
      isParallel: false,
    },
  },
  {
    contentType: CONTENT_TYPES.TEXT_BOX,
    showNextPageButton: true,
    buttonTheme: 'bright',
    content: {
      title: 'A Youth Forced to Fend for Himself',
      htmlContent:
        '<p>This is a story of Tudou, a junior pesticide sprayer. There are so many juniors, like Tudou, who lack of family affection and social supports. They live among us and are relatively invisible. They have to fight against fate day after day.</p>',
      textBoxPosition: TEXT_BOX_POSITIONS.CENTER_CENTER,
    },
    backgroundType: BG_TYPES.COLOR,
    background: {
      bgColor: '#2c2c2c',
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'At age of fifteen, Tudou\'s father and grandmother passed away respectively. Since then, Tudou needed to sustain himself. He had worked as a cementer, a vegetable harvest labor, and other heavy labor jobs.',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg002,
          tablet: tabletBg002,
          desktop: desktopBg002,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'The dolls he\'d won at claw machines piles up in his room. They are the only ones who stay with him at night.',
    },
    backgroundType: BG_TYPES.CINEMAGRAPH,
    background: {
      cinemagraphLayers: cinemagraph003.getAllLayerData(),
      bgColor: 'black',
      isParallel: true,
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'The ancestral house he lives in is empty and antiquated. An abandoned stove stands alone in the corner.',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg004,
          tablet: tabletBg004,
          desktop: desktopBg004,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.TEXT_BOX,
    showNextPageButton: false,
    content: {
      title: 'The Cost of Economic Oppression',
      htmlContent:
        '<p>Yunlin has the highest density of pesticide spray trucks in Taiwan, and all the sprayers are young people. After finishing spraying, sometimes they might experience burning feeling throughout whole bodies and feel vomiting. They would drink milk and be put up a drip to detoxify.</p>',
      textBoxPosition: TEXT_BOX_POSITIONS.CENTER_CENTER,
    },
    backgroundType: BG_TYPES.COLOR,
    background: {
      bgColor: '#2c2c2c',
    },
  },
  {
    contentType: CONTENT_TYPES.AUDIO,
    showNextPageButton: false,
    content: {
      audioSrc: soundWorkEarly,
      subtitles: subtitles.workEarly,
      subtitleLines: 3,
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg005,
          tablet: tabletBg005,
          desktop: desktopBg005,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'Tudou eats only two meals a day, and breakfast is essential.',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg006,
          tablet: tabletBg006,
          desktop: desktopBg006,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'As he gets the pesticides provided by farmers, Tudou knows immediately the proper proportion of the ingredients and its toxicity.',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg007,
          tablet: tabletBg007,
          desktop: desktopBg007,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'The assistants need to take care of the pipelines. If the pipelines get entangled or broken, not only do they fail to finish their works, but also they have to pay for repair.',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg008,
          tablet: tabletBg008,
          desktop: desktopBg008,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.AUDIO,
    showNextPageButton: false,
    content: {
      audioSrc: soundPoisoned,
      subtitles: subtitles.poisoned,
      subtitleLines: 3,
    },
    backgroundType: BG_TYPES.CINEMAGRAPH,
    background: {
      cinemagraphLayers: cinemagraph009.getAllLayerData(),
      bgColor: 'black',
      isParallel: true,
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'Even for the most experienced masters, their lungs and bodies were infected with diffused pesticides after a full day\'s work.',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg010,
          tablet: tabletBg010,
          desktop: desktopBg010,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'After work, they need to clean pesticide tanks and trucks, as well as shower themselves.',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg011,
          tablet: tabletBg011,
          desktop: desktopBg011,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.AUDIO,
    showNextPageButton: false,
    content: {
      audioSrc: soundAboutSalary,
      subtitles: subtitles.aboutSalary,
      subtitleLines: 3,
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg012,
          tablet: tabletBg012,
          desktop: desktopBg012,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'They get paid by cash. It\'s hard for them to make saving since they will spend all of their money as soon as they receive it.',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg013,
          tablet: tabletBg013,
          desktop: desktopBg013,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.TEXT_BOX,
    showNextPageButton: false,
    content: {
      title: 'Nobody is Home',
      htmlContent: '<p>As Tudou goes home, he is left alone. Friends are the only ones he can count on. They support each other in face of difficulties.</p>',
      textBoxPosition: TEXT_BOX_POSITIONS.CENTER_CENTER,
    },
    backgroundType: BG_TYPES.COLOR,
    background: {
      bgColor: '#2c2c2c',
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'After work, Tudou used to hanging out with friends to eat, chat, and play claw machine.',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg014,
          tablet: tabletBg014,
          desktop: desktopBg014,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'Playing claw machine is Tudou\'s favorite pastime. As he grabs what he wants, he feels more fulfilled and relieved.',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg015,
          tablet: tabletBg015,
          desktop: desktopBg015,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'Tudou has become a well-known skilled clawer; however, it\'s the result of repeated money investing.',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg016,
          tablet: tabletBg016,
          desktop: desktopBg016,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'Once he\'s free, he must call friends to go out. He seldom stays home alone.',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg017,
          tablet: tabletBg017,
          desktop: desktopBg017,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'They will find a place to eat, drink, and chitchat with each other to kill time.',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg018,
          tablet: tabletBg018,
          desktop: desktopBg018,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'Tudou\'s friends will share whatever is steal and fun, and always hang out together. ',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg019,
          tablet: tabletBg019,
          desktop: desktopBg019,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.AUDIO,
    showNextPageButton: false,
    content: {
      audioSrc: soundSpecial,
      subtitles: subtitles.special,
      subtitleLines: 3,
      iconTheme: 'dark',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg020,
          tablet: tabletBg020,
          desktop: desktopBg020,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.BLANK,
    showNextPageButton: true,
    buttonTheme: 'dark',
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg021,
          tablet: tabletBg021,
          desktop: desktopBg021,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'Back home, Tudou inclines to indulge in internet to either play mobile games or chat online.',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg022,
          tablet: tabletBg022,
          desktop: desktopBg022,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.TEXT_BOX,
    showNextPageButton: false,
    content: {
      title: 'Desire for His Own Home',
      htmlContent: '<p>Tudou entered into society too early and felt too tired. He no longer expects there to be the possibility of going back to school. Being alive is his daily task.</p>',
      textBoxPosition: TEXT_BOX_POSITIONS.CENTER_CENTER,
    },
    backgroundType: BG_TYPES.COLOR,
    background: {
      bgColor: '#2c2c2c',
    },
  },
  {
    contentType: CONTENT_TYPES.CAPTION,
    showNextPageButton: false,
    content: {
      caption: 'Though Tudou had performed well in school, he had no chance to continue his studies because of deteriorating family financial situation.',
    },
    backgroundType: BG_TYPES.IMAGE,
    background: {
      bgImage: {
        resizedTargets: {
          mobile: mobileBg023,
          tablet: tabletBg023,
          desktop: desktopBg023,
        },
      },
      bgColor: 'black',
    },
  },
  {
    contentType: CONTENT_TYPES.AUDIO,
    showNextPageButton: false,
    content: {
      audioSrc: soundFutureEnding,
      subtitles: subtitles.aboutFuture,
      subtitleLines: 3,
      iconTheme: 'dark',
    },
    backgroundType: BG_TYPES.CINEMAGRAPH,
    background: {
      cinemagraphLayers: cinemagraph024.getAllLayerData(),
      bgColor: 'black',
      isParallel: true,
    },
  },
  {
    contentType: CONTENT_TYPES.TEXT_BOX,
    showNextPageButton: false,
    content: {
      title: '',
      htmlContent: '<p>Before the day the reportage was published, Tudou told us that he decided to quit the job of pesticide spray, and would find new ones more secure and safe.</p>',
      textBoxPosition: TEXT_BOX_POSITIONS.CENTER_CENTER,
    },
    backgroundType: BG_TYPES.COLOR,
    background: {
      bgColor: '#2c2c2c',
    },
  },
  {
    contentType: CONTENT_TYPES.COLOPHON,
    showNextPageButton: false,
    content: {
      topicTitle: 'Special Report: A Youth in Ruins',
      topicImage: {
        mobile: topicLandingMobile,
        tablet: topicLandingTablet,
        desktop: topicLandingTablet,
      },
      topicLink: 'https://www.twreporter.org/topics/high-risk-youth-left-in-relic',
      relateds: [],
      team: [
        {
          job: 'Photography',
          members: ['Chih-Wei Yu', 'Yu-En Lin'],
        },
        {
          job: 'Text',
          members: ['Sherry Lee', ' Chih-Wei Yu'],
        },
        {
          job: 'Translation',
          members: ['Karen Wu'],
        },
        {
          job: 'Project Manager',
          members: ['Chen-Hua Chen'],
        },
        {
          job: 'Design',
          members: ['Yu-Chen Huang'],
        },
        {
          job: 'Developement',
          members: ['Chung-Jen Yu'],
        },
        {
          job: 'Producer',
          members: ['Sherry Lee'],
        },
      ],
    },
    backgroundType: BG_TYPES.COLOR,
    background: {
      bgColor: '#2c2c2c',
    },
  },
]

export default slides
