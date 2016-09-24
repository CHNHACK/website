/**
 * Created by shuding on 7/23/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'

import { TITLE, Space, Compress, __ } from '../common/const'

const TTime = props => <div className='tl-1'>{props.children}</div>
const TNote = props => {
  if (props.square) {
    return <div className='tl-2 tl-square'/>
  } else if (props.dot) {
    return <div className='tl-2 tl-dot'/>
  } else if (props.line) {
    return <div className={`tl-2 tl-line tl-${props.color || 'red'}${props.long ? ' tl-long' : ''}`}/>
  }
  return <div className='tl-2'/>
}
const THead = props => <div className='tl-3'><span>{props.children}</span></div>

class Title extends Component {
  render() {
    return (
      <div className='tl'>
        <TTime/>
        <TNote square={true}/>
        <THead><h4>{this.props.children}</h4></THead>
      </div>
    )
  }
}

class Line extends Component {
  render() {
    let color = this.props.color || ['red', 'blue', 'yellow'][~~(Math.random() * 3)]
    return (
      <div className='tl'>
        <TTime/>
        <TNote line={true} color={color} long={this.props.long}/>
        <THead>{this.props.children}</THead>
      </div>
    )
  }
}

class Dot extends Component {
  render() {
    return (
      <div className='tl'>
        <TTime>{this.props.time}</TTime>
        <TNote dot={true}/>
        <THead>{this.props.children}</THead>
      </div>
    )
  }
}

class Empty extends Component {
  render() {
    return (
      <div className='tl'>
        <TTime/>
        <TNote/>
        <THead>{this.props.children}</THead>
      </div>
    )
  }
}

export default class extends Component {
  render() {
    return (
      <section className='section hero is-fullheight tl-section'>
        <div className='container'>
          <h2 className='title'>{__`Hackathon Schedule`}</h2>
          <div className='columns tl-box'>
            <div className='column is-half'>
              <Title>{__`September 24${<sup>th</sup>} (Saturday)`}</Title>
              <Line/>
              <Dot time={`9/24`}>{__`IBM Bluemix Tech Sharing`}</Dot>
              <Line/>
              <Dot time={`9/27`}>{__`Microsoft Tech Sharing`}</Dot>
              <Line/>
              <Dot time={`9/28`}>{__`Huawei SDN Tech Sharing`}</Dot>
              <Line/>
              <Dot time={`10/13`}>{__`QingCloud Tech Sharing & Hiring`}</Dot>
              <Line/>
              <Title>{__`October 13${<sup>th</sup>} (Thursday)`}</Title>
              <Empty>{__`Hackathon is Ready!`}</Empty>
              <br/>
              <Title>{__`October 14${<sup>th</sup>} (Friday)`}</Title>
              <Dot time='17:30'>{__`Event Check-in and Setup`}</Dot>
              <Line/>
              <Dot time='19:00'>{__`{T} Kickoff Ceremony`}</Dot>
              <Line long={true}/>
              <Dot time='19:20'>{__`Talk: The Future of Open Source Technology ${
                <small><br/>{__`(Talk with IBM, Microsoft, Huawei and GitHub, Hosted by Professor from Fudan CS)`}</small>
              }`}</Dot>
              <Line long={true}/>
              <Dot time='19:45'>{__`Speech by Zhenge Fund`}</Dot>
              <Dot time='19:50'>{__`The Rule of {T}`}</Dot>
              <Line/>
              <Dot time='20:00'>{__`Rewards from Sponsors and Introduction of Tech`}</Dot>
              <Line/>
              <Dot time='21:00'>{__`Start Hacking`}</Dot>
              <Dot time='21:00'>{__`Form Your Team`}</Dot>
              <Line/>
              <Dot time='23:00'>{__`Student Hacking in Progress and Gaming Time`}</Dot>
              <Line long={true}>{__`(Past Night Hacking Time)${<Compress/>}`}</Line>
            </div>
            <div className='column is-half'>
              <Title>{__`October 15${<sup>th</sup>} (Saturday)`}</Title>
              <Dot time='7:30'>{__`Breakfast`}</Dot>
              <Line/>
              <Dot time='8:30'>{__`Student Hacking in Progress and Gaming Time`}</Dot>
              <Line/>
              <Dot time='10:00'>{__`Tech Salon by IBM`}</Dot>
              <Dot time='10:30'>{__`Tech Salon by Microsoft`}</Dot>
              <Dot time='11:00'>{__`Tech Salon by Huawei`}</Dot>
              <Line/>
              <Dot time='12:00'>{__`Lunch`}</Dot>
              <Line/>
              <Dot time='14:30'>{__`Tech Salon by GitHub`}</Dot>
              <Dot time='15:00'>{__`Tech Salon by QingCloud`}</Dot>
              <Dot time='15:30'>{__`Tech Salon by Ruff`}</Dot>
              <Line/>
              <Dot time='16:00'>{__`Start-up Knowledge Sharedshared InnoSpring`}</Dot>
              <Line/>
              <Dot time='18:00'>{__`Dinner`}</Dot>
              <Line/>
              <Dot time='20:30'>{__`GitHub Octocat Design Competition`}</Dot>
              <Line/>
              <Dot time='23:00'>{__`Student Hacking in Progress and Gaming Time`}</Dot>
              <Line long={true}>{__`(Past Night Hacking Time)${<Compress/>}`}</Line>
              <br/>
              <Title>{__`October 16${<sup>th</sup>} (Sunday)`}</Title>
              <Dot time='7:30'>{__`Breakfast`}</Dot>
              <Line/>
              <Dot time='8:30'>{__`Student Hacking Wrap-up Time`}</Dot>
              <Line/>
              <Dot time='11:00'>{__`Project Submission Deadline`}</Dot>
              <Line/>
              <Dot time='12:00'>{__`Lunch`}</Dot>
              <Line/>
              <Dot time='12:30'>{__`Exhibition Prep and Break`}</Dot>
              <Line/>
              <Dot time='15:20'>{__`Project Exhibition and Judging`}</Dot>
              <Line/>
              <Dot time='16:30'>{__`Closing and Awarding Ceremony`}</Dot>
              <Line/>
              <Dot time='17:30'/>
              <Line long={true}>{__`Contact with IBM`}<br/>{__`Contact with Microsoft`}<br/>{__`Contact with Huawei`}</Line>
              <Dot/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
