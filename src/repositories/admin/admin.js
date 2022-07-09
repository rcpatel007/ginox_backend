import { logger, level } from '../../config/logger';
import JWTAuth from '../../services/jwt_auth/jwt_auth';
import adminModel from '../../models/admin';

export const superAdminLogin = async (body) => {
  logger.log(level.debug, `>> superAdminLogin()`);

  const { email, password } = body;

  let data = {};

  let adminData = await adminModel.get({
    email,
    // role: 'super_admin',
  });

  if (adminData && adminData.length === 0) {
    data = {
      error: true,
      message: 'err_3',
    };
  } else if (adminData[0].password !== password) {
    data = {
      error: true,
      message: 'err_4',
    };
  } else {
    adminData = adminData[0];
    const tokenPayload = {
      email: email,
      role: adminData.role,
      admin_id: adminData.admin_id,
    };

    const auth = new JWTAuth();
    const accessToken = await auth.createToken(tokenPayload);

    const payload = { ...tokenPayload, accessToken };

    data = {
      error: false,
      data: payload,
    };
  }

  return data;
};