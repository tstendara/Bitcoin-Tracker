import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import ChartEx from './chart.jsx';
import BarChart from './chart.jsx';



class CryptoCurrency extends React.Component{
    constructor(props){
        super(props);
        this.state={
            history: [],
            start: '',
            end: ''
        }
        this.handleStart = this.handleStart.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
    }

    curCurrency(){
        let start = this.state.start;
        let end = this.state.end;
        axios.get(`https://api.coindesk.com/v1/bpi/historical/close/.json?start=${start}&end=${end}`)
        .then(res => {
            const data= [];
            
            for(let date in res.data.bpi){
                const curData = {};
                curData.date = date;
                curData.value = res.data.bpi[date]
                
                data.push(curData);
            }
            this.setState({ history: data })
        })
        // axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        // .then(resp => console.log(resp.data));
    }
    handleStart(e){
        console.log(e.target.value)
        this.setState({ start: e.target.value })
    }

    handleEnd(e){
        console.log(e.target.value)
        this.setState({ end: e.target.value })
    }

    render(){
        console.log(this.setState.start);
        return(
            <div>
                
                <p>start:</p>
                <input type="date" onChange={this.handleStart}></input>
                <div>
                <p>end:</p>
                <input type='date' onChange={this.handleEnd}></input>
                </div>
                

                <p>CryptoCurrency!</p>
                <button onClick={()=> this.curCurrency()}>get current Currency</button>
                <div>
                    <BarChart
                    data={this.state.history}
                     />
                </div>
                {/* <Chart /> */}
            </div>
        )
    }
}

export default CryptoCurrency;


