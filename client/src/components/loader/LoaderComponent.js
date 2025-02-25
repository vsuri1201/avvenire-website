import './LoaderComponent.css'
import animationData from '../assets/animation/email_sending_animation.json'
import Lottie from 'react-lottie'

const LoaderComponent = (props)=>{


    const defaultOptions = {
        loop: true,
        autoplay: true, // Animation will play automatically
        animationData: animationData, // Path to the Lottie animation data
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

    return (
        <>
            <div className="loader-container">
                <Lottie options={defaultOptions} height={200} width={200} />
                <br></br>
                <h2 className="h2-center">Sending your {props.type}...</h2>
            </div>
        </>
    )
}

export default LoaderComponent