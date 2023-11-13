import { Blurhash } from "react-blurhash"
import { useState, useEffect } from "react"

const OptimizedImage = ({src, hash, classId, aria}) => {
    const [loaded, setLoaded] = useState(false)

    //will create the image and then set loaded to true to switch back the image
    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setLoaded(true)
        }
        img.src = src
    }, [src])

    //the blurhash image is a stand-in until the image is loaded
    return(
        <>
            {!loaded ? (
                <Blurhash 
                    className={classId}
                    hash={hash}
                    width="100%"
                    height="100%"
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            ) : (
                <img src={src} alt="unavailable" className={classId} aria-label={aria} />
            )}
        </>
    )
}

export default OptimizedImage