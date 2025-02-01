import JobItem from "./Jobitem";

const handleSubmit = async (event:any) => {
    event.preventDefault();
  }

function JobDisplay(){
    return (
        <>
        <div id="job-display-container">
            <div className="job-display-tab">
                <p className="tab-header">New</p>
                <JobItem></JobItem>
            </div>
            <div className="job-display-tab">
                <p className="tab-header">In Progress</p>
            </div>
            <div className="job-display-tab">
                <p className="tab-header">Results</p>
            </div>
        </div>
        </>
    )
}

export default JobDisplay