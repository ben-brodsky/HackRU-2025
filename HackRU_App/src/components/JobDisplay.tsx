import JobItem from "./Jobitem";

const handleSubmit = async (event:any) => {
    event.preventDefault();
  }

function JobDisplay(){
    return (
        <>
        <div id="job-display-container">
            <div className="job-display-tab">
                <p className="job-tab-header">Pending</p>
                <div id="spacer"></div>
                <JobItem></JobItem>
            </div>
            <div className="job-display-tab">
                <p className="job-tab-header">Under Review</p>
                <div id="spacer"></div>
                <JobItem></JobItem>
            </div>
            <div className="job-display-tab">
                <p className="job-tab-header">Completed</p>
                <div id="spacer"></div>
                <JobItem></JobItem>
            </div>
        </div>
        </>
    )
}

export default JobDisplay