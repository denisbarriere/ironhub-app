import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bootcampFilter'
})
export class BootcampFilterPipe implements PipeTransform {

  transform(value: any[], bootcamp: string) {

    // If no bootcamp selected, just return the full list
    if (bootcamp === 'default' || bootcamp === null) {
      return value;
    }

    // Else, filter the list based on the bootcamp selected
    let users = value.map(user => {
      let bootcamps = user.studentId.bootcampIds.map(item => item.program);
      if (bootcamps.includes(bootcamp)) { 
        return user;
      }
    });

    console.log(users)
    // Return the filtered list
    return users;
  }
}