import { Pipe, PipeTransform } from '@angular/core';
import { Chbx } from '../models/privilege.model';

@Pipe({
  name: 'privilegeFilter'
})
export class PrivilegeFilterPipe implements PipeTransform {
  transform(privileges: Chbx[], value: string): string {
    const output = privileges.find((privilege: Chbx) =>
      privilege.value === value
    );
    return output.name;
  }
}
