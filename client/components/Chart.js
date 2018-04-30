import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Tania", "Nicole", "Aubrey", "Drea", "Reija", "Jill"],
                datasets: [{
                    label: '# of Votes',
                    data: [130, 130, 130, 130, 130, 130],
                    backgroundColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(255, 255,255)',
                        'rgba(255, 255,255)'
                    ],
                    borderColor: [
                        'rgba(255,99,132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 102, 255)',
                        'rgba(255, 159, 64)'
                    ],
                    borderWidth: 1
                }]

            }
        }
    }
    render() {
        return (
            <div className="chart">
                <Pie data={this.state.chartData} width={100} height={50} options={{ title: { display: true, text: "Goal" }, legend: { display: true, position: "right" } }} />
            </div>
        )
    }
}

export default Chart;