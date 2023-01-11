import express from 'express'
import { createJob, deleteJob, getAllJobs, updateJob, showStats } from '../controllers/jobsController.js'

const router = express.Router()

/*
    At homepage ('/'), user can send POST request to create new job and GET request to get all jobs
    At '/stats', user can see all stats
    At '/:id', user can send request to delete and update job
*/
router.route('/').post(createJob).get(getAllJobs)
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router