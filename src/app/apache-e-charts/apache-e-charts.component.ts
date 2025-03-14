import {Component, OnInit} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-apache-e-charts',
  standalone: true,
  imports: [],
  templateUrl: './apache-e-charts.component.html',
  styleUrl: './apache-e-charts.component.scss'
})
export class ApacheEChartsComponent implements OnInit {
  ngOnInit(): void {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          padAngle: 5,
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            {value: 1048, name: 'Search Engine'},
            {value: 735, name: 'Direct'},
            {value: 580, name: 'Email'},
            {value: 484, name: 'Union Ads'},
            {value: 300, name: 'Video Ads'}
          ]
        }
      ]
    };
    myChart.setOption(option);
  }

}
