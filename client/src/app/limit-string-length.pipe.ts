import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitStringLength',
})
export class LimitStringLengthPipe implements PipeTransform {
  transform(value: string, length: number): unknown {
    return value?.substring(0, length);
  }
}
