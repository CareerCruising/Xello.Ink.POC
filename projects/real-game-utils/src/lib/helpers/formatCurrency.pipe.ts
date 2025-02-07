import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency } from './formatCurrency';
/*
 * format currency according to xello standard rules based on locale
 */
@Pipe({
  standalone: true,
  name: 'formatCurrency',
})
export class FormatCurrencyPipe implements PipeTransform {
  transform(value: number, locale = 'en-US'): string {
    return formatCurrency(locale, value);
  }
}
