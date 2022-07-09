import DBOperation from '../services/database/database_operation';
import SchemaModel from '../services/database/schema_model';
import { v4 as uuidv4 } from 'uuid';

const schema = {
  home_section_id: {
    type: String,
    default: uuidv4,
  },
  dynamic_data: {
    type: Object,
  },
  section_type: {
    type: String,
  },
  section_path: String,
};
const modelName = 'home_section';
let HomeSectionModel = DBOperation.createModel(modelName, schema);

let homeSection = new SchemaModel(HomeSectionModel);

export default homeSection;
