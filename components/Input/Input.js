import css from './Input.module.scss'
import cn from 'classnames'
import PropTypes from 'prop-types'

export default function Input({ className, value, onChange, placeholder }) {
  return (
    <div className={cn(css.container, className)}>
      <input
        value={value}
        onChange={onChange}
        className={css.input}
        placeholder={placeholder}
      />
    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  textarea: PropTypes.bool,
}
