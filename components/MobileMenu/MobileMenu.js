import { useState } from 'react'
import css from './MobileMenu.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'
// Images
import CloseIcon from '../../assets/icons/close-grey.svg'
import ArrowDown from '../../assets/icons/arrow-down-blue.svg'
// Components
import Link from '../Link/Link'
// Data
import { navHeader } from '../../data'

export default function MobileMenu({ close, light }) {
  const [menu, setMenu] = useState(navHeader)

  const onChangeMenu = (index) => {
    const menuCopy = [...menu]

    if (menuCopy[index].active) {
      menuCopy[index].active = false
    } else {
      menuCopy[index].active = true
    }

    setMenu(menuCopy)
  }

  return (
    <div className={cn(css.mobile_menu, light && css.light)}>
      <div className={css.mobile_menu_nav}>
        {menu?.map(({ name, link, list, active }, index) => (
          <div
            className={css.mobile_menu_nav_item}
            key={index}
            onClick={() => onChangeMenu(index)}
          >
            <div className={css.mobile_menu_nav_item_text}>
              {name}
              <ArrowDown
                className={cn(
                  css.mobile_menu_nav_item_icon,
                  active && css.active
                )}
              />
            </div>
            {list && menu[index].active && (
              <>
                {list?.column1 && list?.column2 ? (
                  <div className={css.mobile_menu_nav_item_list}>
                    {list?.column1 &&
                      list?.column2 &&
                      list.column1
                        .concat(list.column2)
                        .map(({ name, link }, index) => (
                          <Link
                            href={link}
                            key={index}
                            className={css.mobile_menu_nav_item_list_item}
                          >
                            {name}
                          </Link>
                        ))}
                  </div>
                ) : (
                  <div className={css.mobile_menu_nav_item_list}>
                    {list.column1?.map(({ name, link }, index) => (
                      <Link
                        href={link}
                        key={index}
                        className={css.mobile_menu_nav_item_list_item}
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <CloseIcon className={css.mobile_menu_close} onClick={close} />
    </div>
  )
}

MobileMenu.propTypes = {
  close: PropTypes.func,
  light: PropTypes.bool,
}
