import { logger, level } from '../../config/logger';
import sectionModel from '../../models/home_section';

export const getAllHomeSection = async () => {
  logger.log(level.debug, `>> getAllHomeSection()`);

  const sectionData = await sectionModel.get({});
  const data = {
    message: 'succ_2',
    data: sectionData,
  };
  return data;
};
