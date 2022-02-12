import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(value: any[], filter: any): User[] | any {
    if(!value)return null;
    if(!filter)return value;
    filter = filter.toLowerCase();
    return value.filter(item =>{
      return JSON.stringify(item).toLowerCase().includes(filter);
    });
  }
}
