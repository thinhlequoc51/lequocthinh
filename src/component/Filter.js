import React, { Component } from 'react';
import province from '../data/tinh_tp.json';
import district from '../data/quan_huyen.json';

const PRICE = [
    {value: 1, name: 'Dưới 1 triệu'},
    {value: 2, name: '1 triệu - 2 triệu'},
    {value: 3, name: '2 triệu - 3 triệu'},
    {value: 4, name: '3 triệu - 5 triệu'},
    {value: 5, name: '5 triệu - 7 triệu'},
    {value: 6, name: '7 triệu - 10 triệu'},
];

const DT = [
    {value: 1, name: 'Dưới 20m2'},
    {value: 2, name: '20m2 - 30m2'},
    {value: 3, name: '30m2 - 40m2'},
    {value: 4, name: '40m2 - 50m2'},
    {value: 5, name: '50m2 - 60m2'},
    {value: 6, name: '60m2 - 70m2'},
];

const convert = (data) => {
    return Object.values(data);
}

export default class Filter extends Component {
  state = {
    province: convert(province),
    district: convert(district),
    price: PRICE,
    dt: DT,
    provinceFilter: null,
    districtFilter: null,
    priceFilter: null,
    areaFilter: null
  }

  handleFilter = () => {
    const {provinceFilter, districtFilter, priceFilter, areaFilter} = this.state;
    this.props.changeSelect(provinceFilter, districtFilter, priceFilter, areaFilter);
  }

  render() {
    const {province, district, price, dt} = this.state;
    return (
      <div className='bg-warning d-flex py-1 px-2'>
        <div className='px-1 col-2'>
            <p className='m-0'>Tinht thành</p>
            <select name='province' className='form-control' onChange={(event) => this.setState({ provinceFilter: event.target.value })}>
                <option value="">Tỉnh thành</option>
                {
                    province.map(item => 
                        <option value={item.code}>{item.name}</option>
                    )
                }
            </select>
        </div>
        <div className='px-1 col-2'>
            <p className='m-0'>Quận huyện</p>
            <select name='district' className='form-control' onChange={(event) => this.setState({ districtFilter: event.target.value })}>
                <option value="">Quận huyện</option>
                {
                    district.map(item => 
                        <option value={item.code}>{item.name}</option>
                    )
                }
            </select>
        </div>
        <div className='px-1 col-2'>
            <p className='m-0'>Khoảng giá</p>
            <select name='price' className='form-control' onChange={(event) => this.setState({ priceFilter: event.target.value })}>
                <option value="">Chọn giá</option>
                {
                    price.map(item => <option value={item.value}>{item.name}</option>)
                }
            </select>
        </div>
        <div className='px-1 col-2'>
            <p className='m-0'>Diện tích</p>
            <select name='area' className='form-control' onChange={(event) => this.setState({ areaFilter: event.target.value })}>
                <option value="">Diện tích</option>
                {
                    dt.map(item => <option value={item.value}>{item.name}</option>)
                }
            </select>
        </div>
        <button class="btn btn-primary" onClick={() => this.handleFilter()}>Lọc</button>
      </div>
    )
  }
}
