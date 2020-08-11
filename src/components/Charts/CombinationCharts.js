import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

class CombinationCharts extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      legend: []
    }

  }

  componentDidMount() {
    const legend = this.chart && this.chart.chartInstance && this.chart.chartInstance.generateLegend();
    this.setState({ legend });
  }

  static renderLegend(chart) {
    const legendSet = chart.data.datasets;
    const legendItems = legendSet.map((item, index) => {
      return (
        <li
          key={item.label}
          style={{ display: 'flex', alignItems: 'center' }}
          onClick={
            () => {
              var ci = chart;
              var meta = ci.getDatasetMeta(index);
              meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
              ci.update();
            }}
        >
          {/* <div className='mr-3' style={{ height: '10px', width: '40px', background: `${item.backgroundColor}` }}></div>
          <div style={{ color: `${item.backgroundColor}`, fontStyle: 'italic', marginRight: '2em', fontSize: '18px' }}>
            {item.label}
          </div> */}
          <div
            style={{ padding: '7px 1em', background: item.backgroundColor, borderRadius: '15px', color: 'white', fontSize: '14px', marginRight: '20px' }}>
            {item.label}
          </div>
        </li>
      );
    });
    return legendItems;
  }

  static getDerivedStateFromProps(props) {
    const { labels, options, data, customLegend } = props;
    return {
      chartsData: {
        datasets: data,
        labels
      },
      chartOptions: {
        ...options,
        legend: {
          display: customLegend ? false : true
        },
        legendCallback: CombinationCharts.renderLegend
      }
    }
  }

  render() {
    const { chartsData, chartOptions, legend } = this.state;
    const { dimensions, chartType } = this.props;
    return (
      <div>
        {legend && legend.length &&
          <div className="custom-legends">
            <ul className="chart-list-legend">
              {legend}
            </ul>
          </div>}
        {
          chartType === 'pie' ?
            <Pie 
              data={chartsData}
              options={chartOptions}
              height='230'/> :
            <Bar ref={el => { this.chart = el; }} width={dimensions && dimensions.width} height={dimensions && dimensions.height} data={chartsData} options={chartOptions} />
        }
      </div>
    );
  }
}

export default CombinationCharts;