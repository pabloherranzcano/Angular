import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerZolek( control: FormControl ): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();

    if (valor === 'zolek') {
      return {
        isZolek: true
      }
    }

    return null;
  }

  camposIguales(campo1: string, campo2: string) {
    return (FormGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = FormGroup.get(campo1)?.value;
      const pass2 = FormGroup.get(campo2)?.value;

      if (pass1 !== pass2) {
        FormGroup.get(campo2)?.setErrors({noIguales: true});
        return { noIguales: true }
      }
      
      FormGroup.get(campo2)?.setErrors(null);
      
      return null;
    }
  }
}
