import Axios from "axios";

const handleSubmit = async (event:any) => {
    event.preventDefault();
    const companyName = event.target[0].value;
    const jobTitle = event.target[1].value;
    const res = await Axios.post("http://localhost:8080/addjob", {companyName:companyName, jobTitle:jobTitle})
  }

function AddJob(){
    return (
        <>
        <div id="job-form-container">
        <div className="tab-background" id="job-form">
          <p className="tab-header">Add Job</p>
          <form id="job-form-content" onSubmit={(event) => handleSubmit(event)}>
                    <div className="job-form-div">
                        <p className="form-header">Company</p>
                        <textarea className="job-form-textarea"id="create-post-title"></textarea>
                    </div> 
                    <div className="job-form-div">
                        <p className="form-header">Job Title</p>
                        <textarea className="job-form-textarea"id="create-post-body"></textarea>
                    </div>  
                    <button 
                        className="medium-button orange" 
                        type="submit">Add Job</button>
          </form>
        </div>
      </div>
        </>
    )
}

export default AddJob