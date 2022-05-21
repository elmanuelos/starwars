import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'reverse'
})
export class ReversePipe implements PipeTransform{

    newValue!: string;

    transform(valor: string):string {
        this.newValue = valor.split('').reverse().join('');

        return this.newValue;
    }

}