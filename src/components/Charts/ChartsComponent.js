import React from 'react';
import CombinationCharts from './CombinationCharts';

let data = [

  {
    city: 'Lucknow',
    state: 'Uttar Pardesh',
    people: {
      male: 2000,
      female: 2200,

    }
  },
  {
    city: 'Gorakhpur',
    state: 'Uttar Pardesh',
    people: {
      male: 1800,
      female: 1500,

    }
  },
  {
    city: 'Kanpur',
    state: 'Uttar Pardesh',
    people: {
      male: 1850,
      female: 1700,

    }
  }
]

function ChartsComponent() {

  const maleData = data.map(({ people: { male } }) => { return male });
  const femaleData = data.map(({ people: { female } }) => { return female });
  const totalData = data.map(({ people: { male, female } }) => { return male + female });
  const labels = data.map(({ city }) => { return city });

  return (
    <div className="charts-container">
      <CombinationCharts
        dimensions={{ width: 700, height: 400 }}
        customLegend={true}
        labels={labels}
        data={[{
          type: 'bar',
          label: 'Male',
          data: maleData,
          backgroundColor: 'rgb(255, 206, 86)',
          hoverBackgroundColor: 'rgba(255, 206, 86, 0.6)',
          hoverBorderColor: 'rgb(255, 206, 86)',
          hoverBorderWidth: 5
        },
        {
          type: 'bar',
          label: 'Female',
          data: femaleData,
          backgroundColor: 'rgb(255, 99, 132)',
          hoverBackgroundColor: 'rgba(255, 99, 132, 0.6)',
          hoverBorderColor: 'rgb(255, 99, 132)',
          hoverBorderWidth: 5,
        },
        {
          type: 'bar',
          label: 'Total',
          data: totalData,
          backgroundColor: 'rgb(54, 162, 235)',
          hoverBackgroundColor: 'rgba(54, 162, 235, 0.6)',
          hoverBorderColor: 'rgb(54, 162, 235)',
          hoverBorderWidth: 5
        }]
        }
        options={{
          maintainAscpectRatio: false,
          title: {
            display: true,
            text: 'BAR CHART OF GENDER STATISTICS'
          },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Count',
                fontColor: 'black',
                fontSize: 22,
              },
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }}

      />
      <div className="pie-charts-container">
        <CombinationCharts
          chartType='pie'
          labels={['male', 'female', 'total']}
          data={
            data.map(({people: {male, female}, city}) => {
              return {
                data: [male, female, male+female],
                backgroundColor:  ['rgb(255, 206, 86)', 'rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
                label: city
              }
            })
          }
          options={
            {
              title:
              {
                display: 'true',
                text: 'PIE CHART OF GENDER STATISTICS'
              },
              legend: {
                labels: {
                  usePointStyle: true,
                  boxWidth: 5
                }
              },
              tooltips: {
                callbacks: {
                  label: function(item, data){
                    return `${data.datasets[item.datasetIndex].label}=> ${data.labels[item.index]}: ${data.datasets[item.datasetIndex].data[item.index]} `
                  }
                }
              } 
            }
          }
        />
      </div>
    </div>
  )
}

export default ChartsComponent;