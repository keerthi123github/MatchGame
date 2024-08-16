import './index.css'

const ThumbNailImg = props => {
  const {eachImage, onClickThumbnailImg} = props
  const {imageUrl, thumbnailUrl} = eachImage

  const onClickImg = () => onClickThumbnailImg(imageUrl)

  return (
    <li className="thumbnail-img-item">
      <button type="button" className="img-button" onClick={onClickImg}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}
export default ThumbNailImg
