import { validationResult } from 'express-validator';
import { logger, level } from '../../config/logger';
import {
  badRequestError,
  getOptionsJson,
  serverError,
  standardStructureStringToJson,
  successResponse,
} from '../../utils/utility';
import * as homeSectionRepo from '../../repositories/admin/home_section';

export const addHomeSection = async (req, res) => {
  logger.log(level.info, `>> addHomeSection()`);
  const errors = validationResult(req);

  try {
    if (!errors.isEmpty()) {
      return badRequestError(res, errors);
    }
    const homeSectionData = await homeSectionRepo.addHomeSection(req.body);
    successResponse(res, homeSectionData);
  } catch (error) {
    logger.log(level.error, `<< addHomeSection error=${error}`);
    serverError(res);
  }
};

export const getHomeSections = async (req, res) => {
  logger.log(level.info, `>> getHomeSections()`);
  const extraParams = standardStructureStringToJson(req.query);
  const options = getOptionsJson(extraParams);

  try {
    const homeSectionData = await homeSectionRepo.getHomeSections(options);
    successResponse(res, homeSectionData);
  } catch (error) {
    logger.log(level.error, `<< getHomeSections error=${error}`);
    serverError(res);
  }
};

export const editHomeSection = async (req, res) => {
  logger.log(level.info, `>> editHomeSection()`);
  const errors = validationResult(req);

  try {
    if (!errors.isEmpty()) {
      return badRequestError(res, errors);
    }
    const homeSectionData = await homeSectionRepo.editHomeSection(
      req.body,
      req.query
    );
    if (homeSectionData.error)
      return badRequestError(res, homeSectionData.message);
    successResponse(res, homeSectionData);
  } catch (error) {
    logger.log(level.error, `<< editHomeSection error=${error}`);
    serverError(res);
  }
};

export const deleteHomeSection = async (req, res) => {
  logger.log(level.info, `>> deleteHomeSection()`);
  const errors = validationResult(req);

  try {
    if (!errors.isEmpty()) {
      return badRequestError(res, errors);
    }
    const homeSectionData = await homeSectionRepo.deleteHomeSection(req.query);
    successResponse(res, homeSectionData);
  } catch (error) {
    logger.log(level.error, `<< deleteHomeSection error=${error}`);
    serverError(res);
  }
};
