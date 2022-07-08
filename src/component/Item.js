import React, { Component } from 'react';
import province from '../data/tinh_tp.json';
import district from '../data/quan_huyen.json';

export default class Item extends Component {
  
  render() {
    const {data} = this.props;

    return (
      <div class='container'>
        <div class='row my-3'>
          {
            data.map(item => (
              <div className='item col-8 border border-warning'>
                <div className='row'>
                    <div className='col-3'>
                        <img src={item.thumbnail} alt=''/>
                    </div>
                    <div className='col-9'>
                        <h5 className='m-0 text-danger text-left'>{item.title}</h5>
                        <p className='text-success text-left'><strong>{item.price/1000000} triệu/tháng</strong></p>
                        <div className='text-left'>
                            <span><small className='text-left'>Diện tích: <strong>{item.area}</strong></small></span>
                            <span><small className='text-left mx-3'>Khu vực: <strong className='text-primary'>{district[item.district].name} - {province[item.city].name}</strong></small></span>
                        </div>
                        <div className='text-left'>
                            <p><small>{item.content}</small></p>
                        </div>
                    </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
