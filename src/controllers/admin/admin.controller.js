import { logger, level } from '../../config/logger';
import {
  badRequestError,
  serverError,
  successResponse,
} from '../../utils/utility';
import { validationResult } from 'express-validator';
import * as superAdminRepo from '../../repositories/admin/admin';

export const superAdminLogin = async (req, res) => {
  logger.log(level.info, `>> superAdminLogin()`);
  const errors = validationResult(req);

  try {
    if (!errors.isEmpty()) {
      badRequestError(res, errors);
    } else {
      const data = await superAdminRepo.superAdminLogin(req.body);
      if (data.error) return badRequestError(res, data.message);
      successResponse(res, data);
    }
  } catch (error) {
    logger.log(level.error, `<< superAdminLogin error=${error}`);
    serverError(res);
  }
};