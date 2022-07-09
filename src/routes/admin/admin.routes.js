/**
 * Admin Routes
 */

import { Router } from 'express';
const routes = new Router();
import { constants as VALIDATOR } from '../../constant/validator/admin';
import { validate } from '../../validator/admin.validator';
import * as superAdminCtrl from '../../controllers/admin/admin.controller';
import homeSectionRoutes from './home_section.routes';

const PATH = {
  ROOT: '/',
  LOGIN: '/login',
  SECTION: '/section',
};

routes.use(PATH.SECTION, homeSectionRoutes);

/**
 * @api {POST} /api/admin/login
 * @desc Admin Login API
 * @access Public
 * **/
routes.post(
  PATH.LOGIN,
  validate(VALIDATOR.SUPER_ADMIN_LOGIN),
  superAdminCtrl.superAdminLogin
);

export default routes;
