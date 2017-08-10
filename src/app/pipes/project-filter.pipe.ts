import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectFilter',
  pure: false // To detect changes
})
export class ProjectFilterPipe implements PipeTransform {

  transform(value: any[], field: string, searchKeywords: string): any {
    if (!value) {
      return [];
    }

    const myPattern = new RegExp(searchKeywords, 'i');
    const filtered = value.filter(it => it[field].match(myPattern)); 
    //console.log("Filtered by search", filtered);
    return filtered;
  }
}
