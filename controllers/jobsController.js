const createJob = (req, res) =>{
    res.send('job created')
}

const deleteJob = (req, res) =>{
    res.send('job deleted')
}

const getAllJobs = (req, res) =>{
    res.send('get all jobs')
}

const updateJob = (req, res) =>{
    res.send('job updated')
}

const showStats = (req, res) =>{
    res.send('stats showed')
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats }