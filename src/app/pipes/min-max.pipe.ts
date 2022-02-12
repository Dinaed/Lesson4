import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minmax'
})
export class MinMaxPipe implements PipeTransform {

  transform(value: any[], minMax: string): any {
    if(!value)return null;
    if(!minMax)return value;
    minMax = minMax.toLowerCase().trim().split(' ').join('');
    let maxOrMin = minMax.split('');
    console.log(maxOrMin);
    
    for(let i = 0; i<value.length; i++) {
      for(let key in value[i]){
        if(maxOrMin[0]=== '<'){
          if(Number(JSON.stringify( value[i][key]))<Number(maxOrMin[1])){
           return value.filter((item) => {
               return JSON.stringify(item).toLowerCase().includes(value[i][key]);
            })
          }
        }
        else if(maxOrMin[0]=== '>'){
          if(Number(JSON.stringify( value[i][key]))>Number(maxOrMin[1])){
            return value.filter((item) => {
                return JSON.stringify(item).toLowerCase().includes(value[i][key]);
             })
           }
        }
      }
    }
  }
}