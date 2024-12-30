import User from "../models/userModel.js";
import Jobs from "../models/jobsModel.js";
const ping = (req, res) => {
  res.send("Hello Zishan");
};

// create new jobs
const postJobs = async (req, res) => {
  const {
    email,
    title,
    description,
    location,
    company_id = "",
    company_name,
    salary_range,
    employment_type,
    skills_required,
    minimum_experiance,
    workplace_type,
  } = req.body;

  // check user exists or not
  const user = await User.findById(email);
  if(!user) {
    res.json({
        message : "Create an account first"
    })

    
  }
  res.json({
    message: "Successfull creation",
    data: req.body,
  });
};

export { postJobs };
