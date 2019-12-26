import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'

const pages = [
  ({ style }) => <animated.div style={{ ...style, background: '#1c88bf' }}>Click Me!</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}><img src="https://www.mastercard.com.au/content/mccom-admin/en-au-admin/referenced-content-admin/referenced-content-placeholder/mastercard-newsroom1/_jcr_content/contentpar/related_content_item/image.adaptive.767.high.jpg/1547105578628.jpg"></img></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
]

export default function Experience() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}

