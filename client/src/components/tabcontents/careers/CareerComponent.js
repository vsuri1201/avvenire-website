import JobList from "./jobs/JobList"
const CareerComponent = ()=>{
    return (
        <>
            <div className="row bgcolr">
                <div className="container mar-t-50 wow bounceInLeft">
                    <div className="col-md-offset-4 col-md-8">
                        <h1>Avvenire solutions careers</h1>
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