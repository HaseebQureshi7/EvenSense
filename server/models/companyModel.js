import mongoose, { Schema} from 'mongoose';

const companySchema = new Schema({
  name: { type: String, required: true },
  logo: { type: String , default : "default"},
  lob: { type: String, default : "not specified"}
}, {timestamps : true});

const Company = mongoose.model('Company', companySchema);

export default Company;