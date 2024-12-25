import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatePipe',
  standalone: true
})
export class TruncatePipePipe implements PipeTransform {

  transform(value: string, limit: number) {
    if (!value) return ''
    return value.length > limit ? value.slice(0, limit) + '...' : value;
  }

}
