import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,searchString?:any){
    console.log(value,searchString);

    if(!searchString ){
      return value;
    }else{
      searchString=searchString.toLocaleLowerCase();
    }
    return value.filter((note:any) =>{
      return note.title.toLocaleLowerCase().includes(searchString) | note.description.toLocaleLowerCase().includes(searchString);
      
    })
  }
}
