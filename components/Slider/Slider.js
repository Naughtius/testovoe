import { useMemo } from 'react'
import css from './Slider.module.scss'
import cn from 'classnames'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
// Hooks
import useBreakpoints from '../../hooks/useBreakpoints'
// Images
import ArrowRightIcon from '../../assets/icons/arrow-right.svg'

export default function CustomSlider({ className, data }) {
  const { breakpointsState } = useBreakpoints()

  const sliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      dotsClass: css.slider_dots,
      arrows: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }),
    []
  )

  return (
    <div className={cn(css.slider, className)}>
      <div className={css.slider_wrap}>
        <Slider {...sliderSettings}>
          {data?.map((item, index) => (
            <div key={item.id}>
              <div className={css.slider_item}>
                <div className={css.slider_item_num}>{item.id}</div>
                <div className={css.slider_item_title}>{item.title}</div>
                <div className={css.slider_item_descr}>{item.description}</div>
                <div className={css.slider_item_btn}>
                  {item.buttonText}
                  <ArrowRightIcon className={css.slider_item_btn_arrow} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

CustomSlider.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
}
