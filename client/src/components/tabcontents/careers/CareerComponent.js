import JobList from "./jobs/JobList"
const CareerComponent = ()=>{
    return (
        <>
            <div className="row bgcolr">
                <div className="container mar-t-50 wow bounceInLeft">
                    <div className="col-md-12">
                        <h1 className="text-center">Job Listings</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <JobList />
            </div>
        </>
    )
}

export default CareerComponent