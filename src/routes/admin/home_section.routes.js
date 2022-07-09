/**
 * Home Sections Routes
 */

import { Router } from 'express';
const routes = new Router();
import * as homeSectionCtrl from '../../controllers/admin/home_section.controller';
import { adminAuthMiddleware } from '../../middleware/authentication';
import { constants as VALIDATOR } from '../../constant/validator/admin';
import { validate } from '../../validator/admin.validator';

const PATH = {
  ROOT: '/',
};

routes.use(adminAuthMiddleware);

routes
  .route(PATH.ROOT)
  /**
   * @api {POST} /api/admin/section
   * @desc Add Home Section API
   * @access Private
   * **/
  .post(validate(VALIDATOR.ADD_HOME_SECTION), homeSectionCtrl.addHomeSection)
  /**
   * @api {GET} /api/admin/section
   * @desc Get All Home Sections API
   * @access Private
   * **/
  .get(homeSectionCtrl.getHomeSections)
  /**
   * @api {PUT} /api/admin/section
   * @desc Update Home Section API
   * @access Private
   * **/
  .put(validate(VALIDATOR.EDIT_HOME_SECTION), homeSectionCtrl.editHomeSection)
  /**
   * @api {DELETE} /api/admin/section
   * @desc Delete Home Section API
   * @access Private
   * **/
  .delete(
    validate(VALIDATOR.DELETE_HOME_SECTION),
    homeSectionCtrl.deleteHomeSection
  );

export default routes;
