import React from 'react';

import JobListItem from './JobListItem';

const JobList = ({ jobs }) => (
  <div>
    {jobs.map(job => (
      <JobListItem key={job.id} job={job} />
    ))}
  </div>
);

export default JobList;
