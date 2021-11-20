import { useCallback, useMemo, useState } from 'react'
import css from './Header.module.scss'
// Images
import LogoIcon from '../../assets/icons/logo.svg'
import ArrowIcon from '../../assets/icons/arrow.svg'
// Components
import Button from '../Button/Button'
// Hooks
import useBreakpoints from '../../hooks/useBreakpoints'

export default function Header() {
  const { breakpointsState } = useBreakpoints()
  const [isMobileMenu, setIsMobileMenu] = useState(false)

  const mobileMenuHandler = useCallback(
    () => setIsMobileMenu(!isMobileMenu),
    []
  )

  const menu = useMemo(
    () => [
      { id: 1, label: 'About', link: '/about' },
      {
        id: 2,
        label: 'Help',
        link: '/help',
        dropdown: [
          { id: 1, label: 'User Guide', link: '/user-guide' },
          { id: 2, label: 'Contact Support', link: '/contact-support' },
        ],
      },
      {
        id: 3,
        label: 'Features',
        link: '/features',
      },
    ],
    []
  )

  return (
    <div className={css.header}>
      <div className={css.header_wrapper}>
        <LogoIcon />
        <div className={css.menu}>
          {menu?.map((item) => (
            <div className={css.menu_item} key={item.id}>
              <div className={css.menu_item_label}>{item.label}</div>
              {item.dropdown && <ArrowIcon className={css.menu_item_arrow} />}
              {item.dropdown && (
                <div className={css.menu_item_dropdown} key={item.id}>
                  {item.dropdown?.map((dropdown) => (
                    <div
                      className={css.menu_item_dropdown_label}
                      key={dropdown.id}
                    >
                      {dropdown.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Button>Sign Up</Button>
    </div>
  )
}
