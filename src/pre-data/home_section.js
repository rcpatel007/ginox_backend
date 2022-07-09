import { logger, level } from '../config/logger';
import sectionModel from '../models/home_section';

const addedSectionData = [
  {
    section_type: 'Home',
    dynamic_data: {
      title: 'Revolving and hovering 3D animation of diamond rough',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequinesciunt.',
      button_name: 'White Paper',
      button_link: 'http://localhost:3000',
    },
    section_path: 'home',
  },
  {
    section_type: 'About',
    dynamic_data: {
      title: 'About Genexo',
      description: 'Ut enim ad minima veniam quis nostrum exercitationem ullam',
      title_1: 'Productive & Customizable For Developers',
      description_1:
        'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil atque corrupti molestiae.',
      description_2: 'Marketing program activities',
      description_3: 'Customization product',
      description_4: 'At vero eos accusamus iusto',
      button_name: 'More Information',
      button_link: 'http://localhost:3000',
    },
    section_path: 'about',
  },
  {
    section_type: 'Features',
    dynamic_data: {
      title: 'Features',
      description:
        'Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.',
      card_1_title: 'Awesome Support',
      card_1_description:
        'Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.',
      card_1_button: 'More',
      card_1_button_link: '',
      card_2_title: 'Analytics Security',
      card_2_description:
        'Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.',
      card_2_button: 'More',
      card_2_button_link: '',
    },
    section_path: 'Features',
  },
  {
    section_type: 'Media Partner',
    dynamic_data: {
      title: 'Media Partners',
      description:
        'Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.',
      image:
        'https://www.linkpicture.com/q/Group-12.png',
    },
    section_path: 'Media_Partner',
  },
  {
    section_type: 'Investors & Partners',
    dynamic_data: {
      title: 'Investors & Partners',
      description:
        'Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.',
      image:
        'https://www.linkpicture.com/q/Group-12.png',
    },
    section_path: 'Investors_Partners',
  },
  {
    section_type: 'Tokenomics',
    dynamic_data: {
      title: 'Tokenomics',
      description:
        'Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.',
      image:
        'https://www.linkpicture.com/q/Group-12.png',
    },
    section_path: 'Tokenomics',
  },
  {
    section_type: 'Roadmap',
    dynamic_data: {
      title: 'Roadmap',
      description: 'veniam quis Launch Timeline',
      q1_title: 'Q1 2022',
      q1_description_1: '$NIFTY PreSale',
      q1_description_2: '$NIFTY Public Sale',
      q2_title: 'Q2 2022',
      q2_description_1: 'Staking Alpha Farm Launch',
      q2_description_2: 'Staking Farm PROD',
      q3_title: 'Q3 2022',
      q3_description_1: '$NIFTY INO Launchpad',
      q3_description_2: '$NIFTY PawnShop',
      q3_description_3: 'DEFI Integration',
      q4_title: 'Q4 2022',
      q4_description_1: 'Fractional Pool',
      q4_description_2: 'Contact Launch',
    },
    section_path: 'Roadmap',
  },
  {
    section_type: 'Core Team',
    dynamic_data: {
      title: 'Core Team',
      description:
        'Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.',
      card_1_image: '',
      card_1_title: 'Chief Executive Officer',
      card_1_description_1: 'Shantilal Matariya',
      card_1_description_2:
        'With 7+ years of experience as a software engineer in the IT field, an Elite in Back-end development, DevOps, and Project & Team Management.',
      card_2_image: '',
      card_2_title: 'Chief Executive Officer',
      card_2_description_1: 'Shantilal Matariya',
      card_2_description_2:
        'With 7+ years of experience as a software engineer in the IT field, an Elite in Back-end development, DevOps, and Project & Team Management.',
    },
    section_path: 'Core_Team',
  },
];

(async () => {
  try {
    const sectionData = await sectionModel.get({});
    if (sectionData && sectionData.length > 0) {
      logger.log(level.info, `Section data already exists.`);
    } else {
      for await (let elem of addedSectionData) {
        await sectionModel.add(elem);
      }
      logger.log(level.info, `>> Section data added successfully`);
    }
  } catch (error) {
    logger.log(
      level.error,
      `Error while during adding predata error: ${error}`
    );
  }
})();
