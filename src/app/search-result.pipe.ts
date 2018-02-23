import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchResult'
})
export class SearchResultPipe implements PipeTransform {

  transform(results: any, key: string, field:string): any {
    if(key === undefined) {
      return results;
    }
    return results.filter(
       (result) => { 
         let elm = JSON.stringify(result.field).toLowerCase;
          if(elm == key.toLowerCase) {
            return true;
          }
          else {
            return false;
          }
       }
    );
  }

}
