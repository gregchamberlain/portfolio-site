import React from 'react';

import JobListItem from './JobListItem';

const JobList = ({ jobs, readOnly }) => (
  <div>
    {jobs.map(job => (
      <JobListItem key={job.id} job={job} readOnly={readOnly}/>
    ))}
  </div>
);

export default JobList;
