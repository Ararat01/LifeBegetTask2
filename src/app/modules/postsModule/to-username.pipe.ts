import { Pipe, PipeTransform } from '@angular/core';
import { userModel } from '../../iuser';

@Pipe({
  name: 'toUsername'
})
export class ToUsernamePipe implements PipeTransform {

  transform(value: number | undefined, array: Array<userModel>, ...args: unknown[]): unknown {
    return !!value ? array.find(el => el.id == value)?.username : value;
  }
}
