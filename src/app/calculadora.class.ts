export class Calculadora{



    static suma(a:number,b:number){
        return a+b;
    }

    static resta(a:number,b:number){
        return a-b;
    }

    static multiplicacion(a:number,b:number){
        return a*b;
    }

    static division(a:number,b:number){
        if(b == 0){
            return "No se puede dividir por 0";
        }
        return a/b;
    }

    static module(a:number,b:number){
        if(b == 0){
            return "No se puede dividir por 0";
        }
        return a%b;
    }

    static esPar(a:number){
        return a % 2 == 0;
    }

    static factorial(a:number):number{
        if ( a == 1 || a == 0){
            return 1;
        }else{
            return a * Calculadora.factorial(a-1);
        }
    }

    static fibonacci(a: number): number[] {
        let fib: number[] = [0, 1];

        for (let i = fib.length; i <= a; i++) {
                let sum: number = fib[i - 1] + fib[i - 2];
                fib.push(sum);           
        }
        return fib;
    }
}