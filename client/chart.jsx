import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

class BarChart extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }
    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.date);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.value)
        this.myChart.update();
      }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
          type: 'line',
          options: {
              title: {
                  display: true,
                  text: 'Bitcoin Currency changes'
              },
              scales: {
                  yAxes: [
                      {
                          ticks: {
                              min: 0
                          }
                      }
                  ]
              }
          },
          data: {
            labels: this.props.data.map(d => d.date),
            datasets: [{
                label: "Bitcoin Prices",
                data: this.props.data.map(d => d.value),
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                fill: 'none',
                pointRadius: 2,
                borderColor: 'blue',
                borderWidth: 1,
                lineTension: 0
            }]
          }
        });
      }
      

    render() {
      return (
        <canvas ref={this.canvasRef} />
      );
    }
}

export default BarChart;

