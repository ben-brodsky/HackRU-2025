interface Props {
    companyName: string;
    jobName: string;
}

function JobItem({companyName, jobName}: Props){
    return (
        <>
        <div id="job-item">
            <p id="company-name">Filler</p>
            <p id="job-name">Filler</p>
        </div>
        </>
    )
}

export default JobItem;