import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bootcampFilter',
  pure: false // To detect changes
})
export class BootcampFilterPipe implements PipeTransform {

  transform(value: any[], bootcamp: string) {

    // If no bootcamp selected, just return the full list
    if (bootcamp === 'default' || bootcamp === null) {
      return value;
    }

    // Else, filter the list based on the bootcamp selected
    let users = value.filter(user => {
      let bootcamps = user.studentId.bootcampIds.map(item => item.program);
      return bootcamps.includes(bootcamp);
    });

    // Return the filtered list
    return users;
  }
}