import { useCallback, useMemo, useState } from 'react'
import css from './Footer.module.scss'
import cn from 'classnames'
import PropTypes from 'prop-types'
// Components
import LogoWhite from '../../assets/icons/logo-white.svg'
// Data
import Button from '../Button/Button'
import Input from '../Input/Input'

export default function Footer({ className }) {
  const [searchTerm, setSearchTerm] = useState('')

  const menu = useMemo(
    () => [
      { id: 1, label: 'About Us', link: '/about-us' },
      {
        id: 2,
        label: 'Privacy Policy',
        link: '/privacy-policy',
      },
    ],
    []
  )

  const searchChangeHandler = useCallback((e) => {
    setSearchTerm(e.target.value)
  }, [])

  return (
    <div className={cn(css.footer, className)}>
      <LogoWhite />
      <div className={css.menu}>
        {menu?.map((item) => (
          <div className={css.menu_item} key={item.id}>
            <div className={css.menu_item_label}>{item.label}</div>
          </div>
        ))}
      </div>
      <Input
        value={searchTerm}
        onChange={searchChangeHandler}
        placeholder="Enter your email"
      />
      <Button variant="orange">Sign Up Now</Button>
    </div>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}
