import './App.css';
import Filter from './component/Filter';
import Item from './component/Item';
import data from './data/data.json';

import React, { Component } from 'react'
import CandleChart from './component/CandleChart';

export class App extends Component {
  state = {
    data: [],
    provinceFilter: null,
    districtFilter: null,
    priceFilter: null,
    areaFilter: null
  }

  updatePageData = () => {
    const {provinceFilter, districtFilter, priceFilter, areaFilter} = this.state;
    if (provinceFilter) {
      data = data.filter(item => item.city==provinceFilter);
    }
    if (districtFilter) {
      data = data.filter(item => item.district==districtFilter);
    }
    if (priceFilter) {
      if(priceFilter==1) data = data.filter(item => item.price<=1000000);
      if(priceFilter==2) data = data.filter(item => item.price>1000000&&item.price<=2000000);
      if(priceFilter==3) data = data.filter(item => item.price>2000000&&item.price<=3000000);
      if(priceFilter==4) data = data.filter(item => item.price>3000000&&item.price<=5000000);
      if(priceFilter==5) data = data.filter(item => item.price>5000000&&item.price<=7000000);
      if(priceFilter==6) data = data.filter(item => item.price>7000000&&item.price<=10000000);
    }
    if (areaFilter) {
      if(areaFilter==1) data = data.filter(item => item.area<=20);
      if(areaFilter==2) data = data.filter(item => item.area>20&&item.area<=30);
      if(areaFilter==3) data = data.filter(item => item.area>30&&item.area<=40);
      if(areaFilter==4) data = data.filter(item => item.area>40&&item.area<=50);
      if(areaFilter==5) data = data.filter(item => item.area>50&&item.area<=60);
      if(areaFilter==6) data = data.filter(item => item.area>60&&item.area<=70);
    }
    console.log(data);
    this.setState({data: data});
  }

  componentDidMount() {
    const {provinceFilter, districtFilter, priceFilter, areaFilter} = this.state;
    if (!provinceFilter && !districtFilter && !priceFilter && !areaFilter) {
      this.setState({data: data});
    } else {
      this.updatePageData();
    }
  }

  static getDerivedStateFromProps(prevState ,nextState) {
    if (prevState.data != nextState.data) {
      return nextState;
    }
  }

  changeSelect = (province, district, price, area) => {
    this.setState({
      provinceFilter: province,
      districtFilter: district,
      priceFilter: price,
      areaFilter: area
    }, () => this.updatePageData());
  }

  render() {
    return (
      <div className="App">
        <div class="container">
          <Filter changeSelect={this.changeSelect}/>
          <Item data={this.state.data}/>
          <CandleChart/>
        </div>
    </div>
    )
  }
}

export default App;
