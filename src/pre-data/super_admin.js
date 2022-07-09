import { logger, level } from '../config/logger';
import adminModel from '../models/admin';
import { decryptText } from '../utils/utility';

(async () => {
  try {
    const adminData = await adminModel.get({
      role: 'super_admin',
    });

    const data = {
      email: decryptText(process.env.SUPER_ADMIN_EMAIL),
      password: decryptText(process.env.SUPER_ADMIN_PASSWORD),
      role: 'super_admin',
    };

    if (adminData.length > 0) {
      await adminModel.update({ role: 'super_admin' }, { $set: data });
    } else {
      await adminModel.add(data);
    }
  } catch (error) {
    logger.log(
      level.error,
      `Error while during adding predata error: ${error}`
    );
  }
})();
