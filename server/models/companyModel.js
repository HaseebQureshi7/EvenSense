import mongoose, { Schema} from 'mongoose';

const companySchema = new Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  lob: { type: String, required: true }
}, {timestamps : true});

const Company = mongoose.model('Company', companySchema);

export default Company;