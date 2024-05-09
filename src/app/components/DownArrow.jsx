import Image from "next/image"
import downArrow from "../../assets/down-arrow.svg"

const DownArrow = () => {
  return (
    <a href="#about" className="down-arrow" data-scroll-to>
      <Image
        className="down-arrow__image animate__animated animate__delay-1s"
        data-scroll
        data-scroll-repeat="false"
        data-scroll-class="animate__fadeIn"
        src={downArrow}
        alt=""
      />
    </a>
  )
}

export default DownArrow
