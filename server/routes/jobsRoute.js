import express from "express"
const router = express.Router();
import { postJobs } from "../controller/jobsController.js";


// POST /api/jobs – Create a job posting (Admin/Company)
router.post("/postJobs", postJobs)
// GET /api/jobs – List all job postings
// GET /api/jobs/:id – View job details
// PUT /api/jobs/:id – Update a job posting
// DELETE /api/jobs/:id – Delete a job posting

router.get("/home", ping);
export default router;