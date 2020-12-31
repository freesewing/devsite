import React from 'react'
import { Link } from 'gatsby'
import PrevIcon from '@material-ui/icons/KeyboardArrowLeft'
import NextIcon from '@material-ui/icons/KeyboardArrowRight'

const PrevNext = ({ prev = false, next = false }) => (
  <div className='prev-next'>
    {['prev', 'next'].map((side) => {
      if (side === 'prev' && !prev) return <PrevIcon key={`icon-${side}`} />
      if (side === 'next' && !next) return <NextIcon key={`icon-${side}`} />
      let { slug, title } = (side === 'next') ? next : prev

      return (
        <Link key={side} to={slug} style={{ textAlign: side === 'prev' ? 'left' : 'right' }}>
          {side === 'prev' ? <PrevIcon style={{ marginBottom: '-6px' }} /> : null}
            <b>{title}</b>
          {side === 'next' ? <NextIcon style={{ marginBottom: '-6px' }} /> : null}
        </Link>
      )
    })}
  </div>
)

export default PrevNext
