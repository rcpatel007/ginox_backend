import DBOperation from '../services/database/database_operation';
import SchemaModel from '../services/database/schema_model';
import { v4 as uuidv4 } from 'uuid';
import { encryptText, decryptText } from '../utils/utility';

/**
 * STATUS
 * 1 - active
 * 2 - inactive
 * 3 - deleted
 */

const schema = {
  admin_id: {
    type: String,
    default: uuidv4,
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Admin email is required'],
    trim: true,
    lowercase: true,
    set: encryptText,
    get: decryptText,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    set: encryptText,
    get: decryptText,
  },
  role: {
    type: String,
    enum: ['super_admin', 'employee'],
    default: 'employee',
  },
  status: {
    type: Number,
    enum: [1, 2, 3],
    default: 1,
  },
};
const modelName = 'AdminUsers';
let AdminUserModel = DBOperation.createModel(modelName, schema);

let admin = new SchemaModel(AdminUserModel);

export default admin;
