import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Calculadora } from './calculadora.class';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  formData: FormGroup;
  calculadora:Calculadora;
  result: any;

  ngOnInit(){
    this.formData = new FormGroup({
      number1: new FormControl(),
      number2: new FormControl()
    })
  }

  operacion(operador: string) {
    const number1 = parseInt(this.formData.get('number1')?.value);
    const number2 = parseInt(this.formData.get('number2')?.value);
  
    switch (operador) {
      case 'suma':
        this.result = Calculadora.suma(number1, number2);
        break;
      case 'resta':
        this.result = Calculadora.resta(number1, number2);
        break;
      case 'multiplicacion':
        this.result = Calculadora.multiplicacion(number1, number2);
        break;
      case 'division':
        this.result = Calculadora.division(number1, number2);
        break;
      case 'Par':
        this.result = Calculadora.esPar(number1);
        break;
      case 'Factorial':
        this.result = Calculadora.factorial(number1);
        break;
      case 'Fibonacci':
        this.result = Calculadora.fibonacci(number1).join(', ');
        break;
      default:
        this.result = 0;
    }
  
    console.log(this.result);
  }
}
