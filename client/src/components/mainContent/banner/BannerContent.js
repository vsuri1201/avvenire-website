import './BannerContent.css'

const BannerContent = ({data})=>{

    return(
        data['background_image'] && <div className="innerbanner">
            <div className="container img-responsive">
                <img src={data['background_image']}></img>
            </div>
        </div>
    )
}

export default BannerContent