import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'campusFilter',
  pure: false // To detect changes
  
})
export class CampusFilterPipe implements PipeTransform {

  transform(value: any[], campus: string) {

    // If no campus selected, just return the full list
    if (campus === 'default' || campus === null) {
      return value;
    }

    // Else, filter the list based on the campus selected
    let users = value.map(user => {
      let bootcamps = user.studentId.bootcampIds.map(b => b.campus);
      if (bootcamps.includes(campus)) { 
        return user;
      }
    });

    // Return the filtered list
    return users;
  }
}
