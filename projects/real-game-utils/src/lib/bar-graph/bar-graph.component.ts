import {
  Component,
  Input,
  SimpleChanges,
  ElementRef,
  ViewChild,
  HostListener,
  inject,
} from '@angular/core';
import * as d3 from 'd3';
import { formatCurrency } from '../helpers/formatCurrency';
import { TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'rgs-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss'],
})
export class BarGraphComponent {
  translateService = inject(TranslateService);
  locale = this.translateService.currentLang;

  @Input() data: {
    id: number;
    name: string;
    value: number;
  }[] = [];
  @ViewChild('chart') chartContainer!: ElementRef;

  svg: any;
  x: any;
  y: any;
  width: number = 0;
  height: number = 0;
  yAxisWidth: number = 0;
  MIN_GRID_LINE_VALUE = 0;
  MID_GRID_LINE_VALUE = 8000;
  MAX_GRID_LINE_VALUE = 16000;
  MIN_GRID_LINE_POSITION = 180;
  MID_GRID_LINE_POSITION = 108;
  MAX_GRID_LINE_POSITION = 36;
  MIN_MAX_GRID_LINE_DIFF = 144; //180-36
  isResizing = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.updateChart();
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initChart();
      this.updateChart();
    }, 300);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isResizing = true;
    d3.select(this.chartContainer.nativeElement).select('svg').remove();
    this.initChart();
    this.updateChart();
    this.isResizing = false;
  }

  initChart() {
    const element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth;
    this.height = element.offsetHeight;
    this.yAxisWidth = this.width - 34;
    this.svg = d3
      .select(element)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g');

    this.x = d3.scaleBand().range([0, this.width]).padding(0.1);
    this.y = d3.scaleLinear().range([this.height, 0]);

    // Append x-axis
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .attr('class', 'x-axis');

    // Append y-axis
    this.svg
      .append('g')
      .attr('class', 'y-axis')
      .attr('transform', 'translate(' + this.yAxisWidth + ',0)');
  }

  updateChart() {
    if (!this.data.length) {
      return;
    }

    const livableWage = this.data.find((d) => d.id === 2)?.value || 0;

    this.x?.domain(this.data.map((d) => d.name));
    this.y?.domain([0, this.MAX_GRID_LINE_VALUE]);

    this.svg?.selectAll('.bar').remove();
    this.svg?.selectAll('.label').remove();
    this.svg?.selectAll('.grid').remove();
    this.svg?.selectAll('.living-wage-line').remove();

    let barWidth = 126.5;
    const barGap = 16;
    const width = window.innerWidth;
    if (width > 1365) {
      barWidth = 126.5;
    } else if (width >= 1024 && width <= 1365) {
      barWidth = 128;
    } else if (width >= 768 && width <= 1023) {
      barWidth = 102.5;
    } else {
      barWidth = 128;
    }

    const gridLines = this.svg
      ?.selectAll('.grid')
      .data([
        this.MAX_GRID_LINE_POSITION,
        this.MID_GRID_LINE_POSITION,
        this.MIN_GRID_LINE_POSITION,
      ]) // y-positions: 36, 36+72, 36+144
      .enter()
      .append('line')
      .attr('class', 'grid')
      .attr('x1', 2)
      .attr('x2', this.yAxisWidth)
      .attr('y1', (d: number) => d)
      .attr('y2', (d: number) => d)
      .attr('stroke', '#F1F1F1');

    gridLines
      ?.filter((d: number) => d === this.y(livableWage))
      .attr('stroke', 'black')
      .attr('stroke-width', 2);

    const bars = this.svg
      ?.selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d: any, i: number) => i * (barWidth + barGap))
      .attr('width', barWidth)
      .attr('y', this.height)
      .attr('height', 0)
      .attr('fill', (d: { id: number; name: string; value: number }) => {
        if (d.id === 1) {
          return d.value > livableWage ? '#82C31F' : '#F8AA24';
        } else {
          return '#E1E1E1';
        }
      });

    if (!this.isResizing) {
      bars
        ?.transition()
        .duration(600)
        .ease(d3.easeLinear)
        .attr('y', (d: { value: number }) => {
          const barHeight = Math.max(
            (d.value / this.MAX_GRID_LINE_VALUE) * this.MIN_MAX_GRID_LINE_DIFF,
            0,
          );
          const yLimit = Math.max(this.height - barHeight, 0);
          return yLimit;
        })
        .attr('height', (d: { value: number }) => {
          const barHeight = Math.max(
            (d.value / this.MAX_GRID_LINE_VALUE) * this.MIN_MAX_GRID_LINE_DIFF,
            0,
          );
          return barHeight;
        })
        .delay(250);
    } else {
      bars
        .attr('y', (d: { value: number }) => {
          const barHeight = Math.max(
            (d.value / this.MAX_GRID_LINE_VALUE) * this.MIN_MAX_GRID_LINE_DIFF,
            0,
          );
          const yLimit = Math.max(this.height - barHeight, 0);
          return yLimit;
        })
        .attr('height', (d: { value: number }) => {
          const barHeight = Math.max(
            (d.value / this.MAX_GRID_LINE_VALUE) * this.MIN_MAX_GRID_LINE_DIFF,
            0,
          );
          return barHeight;
        });
    }

    const yAxis = d3
      .axisRight(this.y)
      .tickValues([0, this.MID_GRID_LINE_VALUE, this.MAX_GRID_LINE_VALUE])
      .tickFormat(
        (domainValue: d3.AxisDomain) => `${Number(domainValue) / 1000}k`,
      );

    this.svg
      ?.select('.y-axis')
      .call(yAxis)
      .selectAll('path')
      .style('display', 'none');

    this.svg
      ?.select('.y-axis')
      .selectAll('.tick text')
      .attr('fill', '#737373')
      .attr('font-family', 'Proxima Nova, sans-serif')
      .attr('font-weight', 400)
      .attr('font-size', '12px')
      .attr('line-height', '16px');

    this.svg
      ?.selectAll('.y-axis text')
      .attr('x', 8)
      .attr('dy', (d: number, i: number) => {
        const gridLinePositions = [
          this.MIN_GRID_LINE_POSITION,
          this.MID_GRID_LINE_POSITION,
          this.MAX_GRID_LINE_POSITION,
        ];
        return `${gridLinePositions[i] - this.y(d)}px`;
      });

    this.svg?.selectAll('.y-axis .tick line').remove();

    this.svg
      ?.selectAll('.label')
      .data(this.data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', (d: { name: any }, i: number) => i * (barWidth + barGap) + 5)
      .attr('y', (d: { value: any }) => {
        const barHeight = Math.max(
          (d.value / this.MAX_GRID_LINE_VALUE) * this.MIN_MAX_GRID_LINE_DIFF,
          0,
        );
        const yLimit = Math.max(this.height - barHeight, 0);
        return yLimit - 4;
      })
      .attr('text-anchor', 'start')
      .each(
        (
          d: { name: string; value: number },
          i: number,
          nodes: { [x: string]: any },
        ) => {
          const text = d3.select(nodes[i]);
          text
            .append('tspan')
            .attr('x', i * (barWidth + barGap))
            .attr('dy', '-1em')
            .attr('fill', '#484848')
            .attr('font-family', 'Proxima Nova, sans-serif')
            .attr('font-weight', 700)
            .attr('font-size', '14px')
            .attr('line-height', '16px')
            .text(`${formatCurrency(this.locale, d.value)}`);
          text
            .append('tspan')
            .attr('x', i * (barWidth + barGap))
            .attr('dy', '1.2em')
            .attr('fill', '#737373')
            .attr('font-family', 'Proxima Nova, sans-serif')
            .attr('font-weight', 400)
            .attr('font-size', '12px')
            .attr('line-height', '16px')
            .text(d.name);
        },
      );
  }
}
