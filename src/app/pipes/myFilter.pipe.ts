import { invalid } from '@angular/compiler/src/render3/view/util';
import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(value: any[], filter:any , minMax:any): User[] | any {
    if(!value)return null;
    else if(!filter && !minMax)return value;
    else if(filter){
      filter = filter.toLowerCase();
      return value.filter(item =>{ 
        return JSON.stringify(item).toLowerCase().includes(filter);
      });
    }
    else if(minMax){
      minMax = minMax.toLowerCase().trim().split(' ');
      console.log(minMax);
      return value.filter(item => {
        if(minMax[0]=== '<'){
          if(item.age < Number(minMax[1])){          
            return item;
          }
        }
        else if(minMax[0]=== '>'){
            if(item.age > minMax[1]){
              return item;
            }
          }      
      });
    }
  }
}
