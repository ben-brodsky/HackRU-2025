
const handleSubmit = async (event:any) => {
    event.preventDefault();
  }

function AddJob(){
    return (
        <>
        <div id="job-form-container">
        <div className="tab-background" id="job-form">
          <p className="tab-header">Add Job</p>
          <form id="job-form-content">
          <form onSubmit={(event) => handleSubmit(event)}>
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
          </form>
        </div>
      </div>
        </>
    )
}

export default AddJob