import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  FamilyLivableWageLegendComponent,
  FamilyWageInfo,
} from '../family-livable-wage-legend/family-livable-wage-legend.component';
import { FamilyLivableWageLegendModalComponent } from '../family-livable-wage-legend-modal/family-livable-wage-legend-modal.component';
import { ModalService } from '../modal/modal.service';
import { formatCurrency } from '../helpers/formatCurrency';
import { BarGraphComponent } from '../bar-graph/bar-graph.component';

export interface BarChartData {
  id: number;
  name: string;
  value: number;
}

@Component({
  standalone: true,
  selector: 'rgs-family-livable-wage',
  templateUrl: './family-livable-wage.component.html',
  imports: [
    TranslateModule,
    BarGraphComponent,
    FamilyLivableWageLegendComponent,
    FamilyLivableWageLegendModalComponent,
  ],
  styleUrls: ['./family-livable-wage.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FamilyLivableWageComponent implements OnInit {
  @Input() avatar = '';
  @Input() totalIncome = 0;
  @Input() monthlyLivingWage = 0;
  @Input() familyWageData: FamilyWageInfo[] = [];
  @Output() onPopoverClose = new EventEmitter<boolean>();

  translateService = inject(TranslateService);
  modalService = inject(ModalService);
  breakpointObserver = inject(BreakpointObserver);
  locale = this.translateService.currentLang;
  @ViewChild('livableWageMinAmountPopover')
  livableWageMinAmountPopover!: ElementRef;

  livableWageMinAmountInfoHover = false;

  barChartData = computed<BarChartData[]>(() => {
    return this.populateBarGraphData();
  });

  isLivingComfortably = computed<boolean>(() => {
    return this.totalIncome > this.monthlyLivingWage;
  });

  isMobile = signal(false);
  livableWageLegendTooltipHover = signal(false);

  @ViewChild('livableWageLegendPopover') livableWageLegendPopover!: ElementRef;

  ngOnInit(): void {
    this.populateBarGraphData();
  }

  ngAfterViewInit() {
    this.breakpointObserver
      .observe(['(max-width: 767px)'])
      .subscribe((result) => {
        this.isMobile.set(result.matches);
      });
  }

  openLivableWageMinAmountPopover() {
    const popover: any = this.livableWageMinAmountPopover.nativeElement;
    popover.isOpen ? popover.close() : popover.open();
  }

  openLivableWageLegendPopover() {
    const popover: any = this.livableWageLegendPopover.nativeElement;
    popover.isOpen ? popover.close() : popover.open();
  }

  openComparableFamilySizeModal() {
    this.modalService.open(FamilyLivableWageLegendModalComponent);
  }

  closePopover() {
    this.onPopoverClose.emit(false);
  }

  populateBarGraphData() {
    return [
      {
        id: 1,
        name: this.translateService.instant('LIVABLE_WAGE.YOUR_INCOME_lABEL'),
        value: this.totalIncome,
      },
      {
        id: 2,
        name: this.translateService.instant('LIVABLE_WAGE.TITLE'),
        value: this.monthlyLivingWage,
      },
    ];
  }

  formatMoney(amount: number) {
    return formatCurrency(this.locale, amount);
  }
}
