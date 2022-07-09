import { logger, level } from '../../config/logger';
import { serverError, successResponse } from '../../utils/utility';
import * as sectionRepo from '../../repositories/user/home_section';

export const getAllHomeSection = async (req, res) => {
  logger.log(level.info, `>> getAllHomeSection()`);

  try {
    const sectionData = await sectionRepo.getAllHomeSection();
    successResponse(res, sectionData);
  } catch (error) {
    logger.log(level.error, `<< getAllHomeSection error=${error}`);
    serverError(res);
  }
};
