import mongoose, { model } from "mongoose";
const { Schema, model } = mongoose;
const jobsSchema = Schema({
  id: { type: String, unique: true },
  title: { type: String, required: [true, "Enter the job title"], trim: true },
  description: { type: String, trim: true },
  location: { type: String, trim: true },
  company_id: { type: String, required: true, trim: true },
  company_name: { type: String, trim: true },
  salary_range: { type: String, trim: true },
  employment_type: {
    type: String,
    enum: ["Fulltime", "Part time", "Internship"],
    required: true,
  },
  skills_required: { type: [String] },
  minimum_experience: { type: Number },
  workplace_type: {
    type: String,
    enum: ["Remote", "On-site", "Hybrid"],
  },
  posted_at: { type: Date.now, required: true },
  expires_at: { type: Date, required: true },
  status: {
    type: String,
    enum: ["Active", "Not Active"],
    trim: true,
  },
  applications_count: { type: Number, default: 0 },
  education_required: { type: String },
  last_updated: { type: Date, default: Date.now },
});


const JobsModel = model("Jobs", jobsSchema)
export default JobsModel;