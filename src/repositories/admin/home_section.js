import { logger, level } from '../../config/logger';
import sectionModel from '../../models/home_section';

export const addHomeSection = async (body) => {
  logger.log(level.debug, `>> addHomeSection()`);

  const { dynamic_data, section_type } = body;
  await sectionModel.add({
    dynamic_data,
    section_type,
  });
  const data = {
    message: 'succ_1',
  };
  return data;
};

export const getHomeSections = async (options) => {
  logger.log(level.debug, `>> getHomeSections()`);

  let data = {};
  const sectionData = await sectionModel.get({}, '', options);
  if (sectionData && sectionData.length > 0) {
    const count = await sectionModel.count();
    data = {
      message: 'succ_2',
      count,
      data: sectionData,
    };
  } else {
    data = {
      message: 'succ_2',
      count: 0,
      data: [],
    };
  }
  return data;
};

export const editHomeSection = async (body, query) => {
  logger.log(level.debug, `>> editHomeScreen()`);

  const { dynamic_data, section_type } = body;
  const { home_section_id } = query;
  const updatedData = {
    section_type,
    dynamic_data,
  };
  let data = {};

  const isSectionExist = await sectionModel.isExist({
    section_type,
    home_section_id: { $ne: home_section_id },
  });

  if (!isSectionExist) {
    await sectionModel.update(
      { home_section_id: home_section_id },
      { $set: updatedData }
    );
    data = {
      error: false,
      message: 'succ_3',
    };
  } else {
    data = {
      error: true,
      message: 'err_7',
    };
  }
  return data;
};

export const deleteHomeSection = async (query) => {
  logger.log(level.debug, `>> deleteHomeSection()`);

  const { home_section_id } = query;
  await sectionModel.delete({ home_section_id });
  const data = {
    message: 'succ_4',
  };
  return data;
};
