import mongoose from "mongoose";

import addStatics from './statics_accounts.js'
import addMethods from './methods_accounts.js'
import schema from './schema_accounts.js'

addStatics(schema);
addMethods(schema);

export default mongoose.model('accounts', schema, 'accounts');