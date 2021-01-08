import { Pipe, PipeTransform } from '@angular/core';
import { Chbx } from '../models/privilege.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(privileges: Chbx[], inputValue: string): Chbx[] {
    return privileges.filter((privilege: Chbx) =>
      privilege.name
        .toLocaleLowerCase()
        .includes(inputValue.toLocaleLowerCase())
    );
  }
}
