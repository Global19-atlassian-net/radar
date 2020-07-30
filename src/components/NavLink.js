import { forwardRef } from 'react'
import { colors } from '../styles.config'

export default forwardRef((props, ref) => {
  return <>
    <style jsx>{`
        a, a:hover, a:focus, a:visited, a:active {
          color: white;
          background: ${colors.darkPurple};
        }
        
        a:hover {
          color: ${colors.pink};
        }
    `}
    </style>
    <a className="navbar-item" {...props} ref={ref}>{props.children}</a>
  </>
})
