import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchResult'
})
export class SearchResultPipe implements PipeTransform {

  transform(results: any, name?: string, dob?: string, gender?: string, ): any {
    if (!name && !dob && !gender) {
      return results;
    }

    if (name && !dob && !gender) {
      return results.filter(
        (result: any) => {
          return result.name.toLowerCase().includes(name.toLowerCase());
        }
      );
    }
    if (!name && dob && !gender) {
      return results.filter(
        (result: any) => {
          return result.birth_year.toLowerCase().includes(dob.toLowerCase());
        }
      );
    }
    if (!name && !dob && gender) {
      return results.filter(
        (result: any) => {
          return result.gender.toLowerCase().includes(gender.toLowerCase());
        }
      );
    }
    if (name && dob && !gender) {
      return results.filter(
        (result: any) => {
          return result.name.toLowerCase().includes(name.toLowerCase())
           && result.birth_year.toLowerCase().includes(dob.toLowerCase());
        }
      );
    }
    if (name && !dob && gender) {
      return results.filter(
        (result: any) => {
          return result.name.toLowerCase().includes(name.toLowerCase())
           && result.gender.toLowerCase().includes(gender.toLowerCase());
        }
      );
    }
    if (!name && dob && gender) {
      return results.filter(
        (result: any) => {
          return result.birth_year.toLowerCase().includes(dob.toLowerCase())
           && result.gender.toLowerCase().includes(gender.toLowerCase());
        }
      );
    }
    if (name && dob && gender) {
      return results.filter(
        (result: any) => {
          return result.name.toLowerCase().includes(name.toLowerCase())
           && result.gender.toLowerCase().includes(gender.toLowerCase())
           && result.birth_year.includes(dob.toUpperCase());
        }
      );
    }

  }
}
