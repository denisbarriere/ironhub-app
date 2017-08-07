import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectFilter',
  pure: false // To detect changes
})
export class ProjectFilterPipe implements PipeTransform {

  transform(projects: any[], field: string, searchKeywords: string): any {
    if (!projects) {
      return [];
    }

    const myPattern = new RegExp(searchKeywords, 'i');
    return projects.filter(it => it[field].match(myPattern));
  }
}
