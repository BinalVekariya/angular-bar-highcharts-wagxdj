import { Component, Input } from "@angular/core";
import * as Highcharts from "highcharts";
//import * as Highcharts from 'highcharts';
import * as Highcharts from "highcharts/highstock";
@Component({
  selector: "hello",
  templateUrl: "hello.html",
  styleUrls: ["hello.css"]
})
export class HelloComponent {
  @Input() name: string;

  constructor() {}

  ngOnInit() {
    Highcharts.chart("container", {
      chart: { type: "column", events: {}, zoomType: "x" },
      title: { text: null },
      subtitle: { text: "" },
      xAxis: [
        {
          scrollbar: {
            enabled: true
          },
          allowDecimals: true,
          title: { text: "Month" },
          categories: [
            "Feb'21",
            "Jan'21",
            "Dec'20",
            "Nov'20",
            "Oct'20",
            "Sep'20",
            "Aug'20",
            "Jul'20",
            "Jun'20",
            "May'20",
            "Apr'20",
            "Mar'20",
            "Feb'20"
          ],
          crosshair: false
        }
      ],
      yAxis: [
        {
          title: { text: "NP $" },
          labels: {},
          crosshair: false,
          opposite: false
        }
      ],
      tooltip: { enabled: true },
      legend: { enabled: false, width: 0, itemWidth: 0, useHTML: false },
      plotOptions: {
        column: {
          colorByPoint: false,
          maxPointWidth: 12,
          dataLabels: { enabled: false, rotation: 0 }
        },
        bar: {
          maxPointWidth: 12,
          colorByPoint: false,
          dataLabels: { enabled: false, rotation: 0 }
        }
      },
      series: [
        {
          name: "NP $",
          color: "#00a786",
          colors: [],
          fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [[0, "#00a786"], [1, "rgba(255,255,255,.20)"]]
          },
          type: "column",
          yAxis: 0,
          tooltip: {},
          stack: "",
          data: [
            -64225.65,
            -3709.2,
            -16895.86,
            -52609.12,
            -2287.54,
            -3421.91,
            -26836.52,
            51506.75,
            75245.5,
            -34553.02,
            -165641.14,
            -26885,
            -8641.44
          ]
        }
      ],
      exporting: { enabled: false }
    });
  }
}
