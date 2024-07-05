import React, { useMemo, useState } from 'react'
import './Home.css'
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import { Button, Tooltip } from 'antd'
import { DownCircleTwoTone } from '@ant-design/icons'
const HomePage = () => {

  return (
    <div className='main'>
      <div className="container">
        <h3 className='small-headings'>India's Single Largest Horizontal Platform for Seed &amp; Early Stage Investing </h3>
        <h2 className='big-heading'>Money, Mentoring &amp; Market Access </h2>
        <h3 className='small-headings2'>Seeded &amp; Bred companies worth a market valuation of US $9 bn+ </h3>
        <Tippy content="Scroll Down">
          <button className='downbtn'><DownCircleTwoTone style={{margin:'auto'}}   twoToneColor="rgb(177,199,213)" /> <span>Scroll Down</span></button>
        </Tippy>
      </div>
    </div>
  )
}

export default HomePage
