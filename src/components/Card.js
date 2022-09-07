import React from 'react';
import moment from 'moment';
import poetrys from '../data/tang300';

class Card extends React.Component {
  render() {
    const day = moment().format('D')
    const month = moment().format('M')
    const year = moment().format('Y')
    let currentPoem = {}
    const getPoem = () => {
      const offsetDay = moment().diff(moment('2022-09-07'), 'days')
      currentPoem = poetrys[offsetDay % poetrys.length]
    }
    getPoem()
    return (
      <div className='card'>
        <div className='date'>
          <div className='header'>
            <div className='year'>{year}年</div>
            <div className='month'>{month}月</div>
            <div className='day'>{day}日</div>
          </div>
        </div>
        <div className='poem'>
          <div className='title'>{currentPoem.title}</div>
          <div className='author'>{currentPoem.author}</div>
          <div className='content'>
            {currentPoem.paragraphs.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Card