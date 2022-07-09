/**
 * User Home Section Routes
 */

import { Router } from 'express';
const routes = new Router();
import * as homeSectionCtrl from '../../controllers/user/home_section.controller';

const PATH = {
  SECTION: '/section',
};

/**
 * @api {POST} /api/user/section
 * @desc Get All Home Section API
 * @access Public
 * **/
routes.get(PATH.SECTION, homeSectionCtrl.getAllHomeSection);

export default routes;
