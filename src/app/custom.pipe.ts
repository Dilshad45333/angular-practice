import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
     console.log('pipe :',value)
     return value.split(' ').reverse().join(' ')
  }

}
