import './BannerContent.css'

const BannerContent = ({data})=>{
    return(
        <div className="innerbanner">
            <div className="container">
                <img src={data['background_image']}></img>
            </div>
        </div>
    )
}

export default BannerContent