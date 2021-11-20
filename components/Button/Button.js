import css from './Button.module.scss'
import cn from 'classnames'
import PropTypes from 'prop-types'

export default function Button({
  children,
  className,
  rightIcon,
  leftIcon,
  onClick,
  outline,
  variant = 'primary',
  onlyIcon,
  type = 'button',
  classNameIcon,
}) {
  return (
    <button
      className={cn(
        css.button,
        css[`_${variant}`],
        outline && css._outline,
        onlyIcon && css._onlyicon,
        !leftIcon || !rightIcon || !onlyIcon ? css.without_icon : null,
        className
      )}
      onClick={onClick}
      type={type}
    >
      {leftIcon && (
        <div className={cn(css.button_icon_left, classNameIcon)}>
          {leftIcon}
        </div>
      )}
      {onlyIcon && (
        <div className={cn(css.button_icon_center, classNameIcon)}>
          {onlyIcon}
        </div>
      )}
      {children}
      {rightIcon && (
        <div className={cn(css.button_icon_right, classNameIcon)}>
          {rightIcon}
        </div>
      )}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'orange']),
  className: PropTypes.string,
  children: PropTypes.node,
  rightIcon: PropTypes.node,
  onlyIcon: PropTypes.node,
  leftIcon: PropTypes.node,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  classNameIcon: PropTypes.string,
  type: PropTypes.string,
}
