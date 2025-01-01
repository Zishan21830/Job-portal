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
    company_name,
    salary_range,
    employment_type,
    skills_required,
    minimum_experiance,
    workplace_type,
    expires_at,
    status,
    education_required,
  } = req.body;

  try {
    // check user exists or not
    const user = await User.findOne({ email });

    // If user doen't exists then first create an account redirect the user to signup page
    if (!user) {
      res.json({
        success: false,
        message: "Create an account first",
      });
    }

    // checks only job provider and admin can create the jobs no can rather then these two persons
    if (user.role != "job_provider" || user.role != "admin") {
      res.json({
        success: false,
        message: "You are not recruiter.",
      });
    }

    // Create the jobs based on details provided by job provider or admin
    const job = await Jobs.create({
      title,
      description,
      location,
      company_id : user.id,
      company_name,
      salary_range,
      employment_type,
      skills_required,
      minimum_experiance,
      workplace_type,
      posted_at : Date.now(),
      expires_at,
      status,
      education_required,
    });

    // Save the job in the database
    job.save();

    res.status(500).json({
      success: true,
      message: "Successfull creation",
      data: req.body,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Some error occured!! ",
      data: error.message,
    });
  }
};

export { postJobs, ping };
