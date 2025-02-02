import { useEffect, useState } from "react";
import axios from "axios";
import JobItem from "./Jobitem";

const handleSubmit = async (event:any) => {
    event.preventDefault();
  }

function JobDisplay(){
    const [pendingListings, setPendingListings] = useState([]);
    const [reviewListings, setReivewListings] = useState([]);
    const [completedListings, setCompletedListings] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/jobs/pending/test_username").then((res) => {
            const pendingListings = res.data.listings;
            setPendingListings(pendingListings);
        })

        axios.get("http://localhost:8080/jobs/underreview/test_username").then((res) => {
            const reviewListings = res.data.listings;
            setReivewListings(reviewListings);
        })

        axios.get("http://localhost:8080/jobs/completed/test_username").then((res) => {
            const completedListings = res.data.listings;
            setCompletedListings(completedListings);
        })
    }, [])

    return (
        <>
        <div id="job-display-container">
            <div className="job-display-tab">
                <p className="job-tab-header">Pending</p>
                <div id="spacer"></div>
                {pendingListings.map((listing) =>(
                <li id="job-item-container">
                    <JobItem></JobItem>
                </li>
                ))}
            </div>
            <div className="job-display-tab">
                <p className="job-tab-header">Under Review</p>
                <div id="spacer"></div>
                {reviewListings.map((listing) =>(
                <li id="job-item-container">
                    <JobItem></JobItem>
                </li>
                ))}
            </div>
            <div className="job-display-tab">
                <p className="job-tab-header">Completed</p>
                <div id="spacer"></div>
                {completedListings.map((listing) =>(
                <li id="job-item-container">
                    <JobItem></JobItem>
                </li>
                ))}
            </div>
        </div>
        </>
    )
}

export default JobDisplay