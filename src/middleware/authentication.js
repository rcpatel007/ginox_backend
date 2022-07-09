import httpContext from 'express-http-context';
import { logger, level } from '../config/logger';
import JWTAuth from '../services/jwt_auth/jwt_auth';
import { authError } from '../utils/utility';
import adminUserModel from '../models/admin';

const auth = new JWTAuth();
const tokenLength = 2;
const AUTH_TYPE = 'bearer';
const tokenSplitBy = ' ';
const AUTHORIZATION_HEADER_NAME = 'authorization';
const CURRENT_ADMIN_USER = 'currentAdminUser';

export const adminAuthMiddleware = async (req, res, next) => {
  const authorization = req.headers[AUTHORIZATION_HEADER_NAME];
  if (authorization) {
    let token = authorization.split(tokenSplitBy);
    let length = token.length;
    if (length == tokenLength && token[0].toLowerCase() == AUTH_TYPE) {
      let accessToken = token[1];
      try {
        let decoded = await auth.verifyToken(accessToken);
        logger.log(
          level.debug,
          `adminAuthMiddleware decoded=${JSON.stringify(decoded)}`
        );
        // TO-DO decoded.data.email decoded.data.admin
        const adminUser = decoded.data;

        const [adminUserDoc] = await adminUserModel.get({
          email: adminUser.email,
        });

        if (adminUserDoc && adminUserDoc.status === 1) {
          httpContext.set('email', adminUser.email);
          /* eslint-disable require-atomic-updates */
          req[CURRENT_ADMIN_USER] = adminUser;
          next();
          return;
        } else {
          logger.log(
            level.debug,
            `adminAuthMiddleware
            decoded=${JSON.stringify(decoded)},
            adminUserDoc=${JSON.stringify(adminUserDoc)}`
          );
        }
      } catch (e) {
        logger.log(level.error, `adminAuthMiddleware ${e}`);
      }
    }
  }
  authError(res);
};

