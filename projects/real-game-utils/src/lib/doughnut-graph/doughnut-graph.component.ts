import { Component, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  standalone: true,
  selector: 'rgs-doughnut-graph',
  templateUrl: './doughnut-graph.component.html',
  styleUrls: ['./doughnut-graph.component.scss'],
})
export class DoughnutGraphComponent {
  @Input() income: number = 0;

  _loanAmount: number = 0;
  get loanAmount(): number {
    return this._loanAmount;
  }
  @Input() set loanAmount(value: number) {
    this._loanAmount = value;
    if (this.svg) {
      this.buildGraph([this._loanAmount, this.income - this._loanAmount]);
    }
  }

  // set the dimensions and margins of the graph
  width = 200;
  height = 200;

  // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
  innerRadius = 64;
  outterRadius = 100;
  borderWidth = '2px';

  // Compute the position of each group on the pie:
  pie = d3
    .pie()
    .value((d: any) => d)
    .sort(null);

  arc = d3.arc().innerRadius(this.innerRadius).outerRadius(this.outterRadius);
  svg: any = null;

  ngAfterViewInit() {
    this.graphInit();
    this.buildGraph([this._loanAmount, this.income - this._loanAmount]);
  }

  graphInit() {
    this.svg = d3
      .select('#my_donut_graph')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', `translate(${this.width / 2},${this.height / 2})`);

    this.svg
      .append('path')
      .attr(
        'd',
        d3
          .arc()
          .innerRadius(64)
          .outerRadius(100)
          .startAngle(0)
          .endAngle(Math.PI * 2)
      )
      .attr('class', 'donut_background')
      .attr('fill', '#6A93D8')
      .attr('stroke', 'white')
      .style('stroke-width', this.borderWidth);
  }

  buildGraph(inputData: number[]) {
    let dataReady = this.pie(inputData);
    this.svg.select('.donut_data_slice').remove();

    this.svg
      .append('path')
      .attr('class', 'donut_data_slice')
      .attr(
        'd',
        d3
          .arc()
          .innerRadius(64)
          .outerRadius(100)
          .startAngle(dataReady[0].startAngle)
          .endAngle(dataReady[0].endAngle)
      )
      .attr('fill', '#B474D1')
      .attr('stroke', 'white')
      .style('stroke-width', this.borderWidth);
  }
}
