import { body, query } from 'express-validator';
import { constants as VALIDATOR } from '../constant/validator/admin';
import homeSectionModel from '../models/home_section';

export const validate = (method) => {
  let error = [];
  switch (method) {
    case VALIDATOR.SUPER_ADMIN_LOGIN: {
      error = [
        body('email', 'err_1').isEmail(),
        body('password', 'err_2').isLength({ min: 8 }),
      ];
      break;
    }
    case VALIDATOR.ADD_HOME_SECTION: {
      error = [
        body('section_type', 'err_6').not().isEmpty().custom(isSectionExist),
      ];
      break;
    }
    case VALIDATOR.EDIT_HOME_SECTION: {
      error = [
        query('home_section_id', 'err_8')
          .not()
          .isEmpty()
          .custom(sectionDataExist),
      ];
      break;
    }
    case VALIDATOR.DELETE_HOME_SECTION: {
      error = [
        query('home_section_id', 'err_8')
          .not()
          .isEmpty()
          .custom(sectionDataExist),
      ];
      break;
    }
  }
  return error;
};

const isSectionExist = async (value) => {
  const isSectionExist = await homeSectionModel.isExist({
    section_type: value,
  });

  if (isSectionExist) throw new Error('err_7');
};

const sectionDataExist = async (value) => {
  const sectionData = await homeSectionModel.get({
    home_section_id: value,
  });

  if (sectionData && sectionData.length === 0) throw new Error('err_9');
};
