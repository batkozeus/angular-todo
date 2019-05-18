import { ValidatorFn, AbstractControl } from '@angular/forms';

export function dateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const currentDate = new Date().getTime();
        const chosenDate = new Date(control.value).getTime();
        const isOldDate = chosenDate < currentDate;
        return isOldDate ? {'Date is old': {value: control.value}} : null;
    };
}