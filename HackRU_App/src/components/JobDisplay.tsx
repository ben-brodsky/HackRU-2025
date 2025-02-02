import JobItem from "./Jobitem";

const handleSubmit = async (event:any) => {
    event.preventDefault();
  }

function JobDisplay(){
    return (
        <>
        <div id="job-display-container">
            <div className="job-display-tab">
                <p className="job-tab-header">New</p>
                <div id="spacer"></div>
                <JobItem></JobItem>
            </div>
            <div className="job-display-tab">
                <p className="job-tab-header">In Progress</p>
                <div id="spacer"></div>
                <JobItem></JobItem>
            </div>
            <div className="job-display-tab">
                <p className="job-tab-header">Results</p>
                <div id="spacer"></div>
                <JobItem></JobItem>
            </div>
        </div>
        </>
    )
}

export default JobDisplay