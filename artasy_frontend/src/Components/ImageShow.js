import ImageGallery from "react-image-gallery"
import "./img/art1.png"
import "./img/art2.png"
import "./img/art3.png"

const images = [
    {
        original: "./img/art1.png",
        thumbnail: "./img/art1.png"
    },
    {
        original: "./img/art2.png",
        thumbnail: "./img/art2.png"
    },
    {
        original: "./img/art3.png",
        thumbnail: "./img/art3.png"
    },
]

function ImageShow() {
    return(
        <ImageGallery items={images} />
    )
};

export default ImageShow;