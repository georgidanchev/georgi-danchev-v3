import "lazysizes"

const responsiveImage = (props) => {
  const { alt, public_id, code, image_class, height, width } = props

  return (
    <img
      className={`${image_class} lazyload`}
      data-sizes="auto"
      src={`https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_900,f_auto/${code}/${public_id}.webp`}
      data-srcset={`
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_360,f_auto/${code}/${public_id}.webp 360w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_590,f_auto/${code}/${public_id}.webp 590w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_900,f_auto/${code}/${public_id}.webp 900w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_1413,f_auto/${code}/${public_id}.webp 1413w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_1748,f_auto/${code}/${public_id}.webp 1748w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_2153,f_auto/${code}/${public_id}.webp 2153w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_2460,f_auto/${code}/${public_id}.webp 2460w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_2769,f_auto/${code}/${public_id}.webp 2769w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_3070,f_auto/${code}/${public_id}.webp 3070w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_3342,f_auto/${code}/${public_id}.webp 3342w,
        https://res.cloudinary.com/dmwadnfaz/image/upload/c_scale,w_3840,f_auto/${code}/${public_id}.webp 3840w,
      `}
      height={height}
      width={width}
      alt={alt}
    />
  )
}

export default responsiveImage
