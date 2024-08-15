# TDD Introduce - Calculator

Este proyecto es un ejemplo básico de desarrollo dirigido por pruebas (TDD) en Angular, utilizando una clase `Calculator` para demostrar cómo se pueden escribir y ejecutar pruebas unitarias.

## Descripción del Proyecto

El proyecto implementa una clase `Calculator` con dos métodos principales:

1. **multiply(n1, n2):** Multiplica dos números y devuelve el resultado.
2. **divide(n1, n2):** Divide dos números y devuelve el resultado. Si el divisor es cero, devuelve `null`.

Se han escrito pruebas unitarias utilizando Jasmine para asegurar que estos métodos funcionen correctamente bajo diferentes escenarios.

## Estructura del Proyecto

- **Calculator Class:** Implementa las operaciones de multiplicación y división.
- **AppComponent:** Componente Angular que utiliza la clase `Calculator` para realizar pruebas básicas en tiempo de ejecución.
- **Pruebas Unitarias:** Se incluyen pruebas para validar el funcionamiento correcto de los métodos `multiply` y `divide`.

## Ejecución de Pruebas

Para ejecutar las pruebas unitarias, utiliza el siguiente comando:

```bash
ng test --code-coverage
```

Esto lanzará las pruebas en un navegador Chrome y generará un informe de cobertura de código.

## Ejemplo de Pruebas

A continuación, se muestra un ejemplo de las pruebas implementadas para la clase `Calculator`:

```typescript
import { Calculator } from './calculator';

describe('test for Calculator', () => {
    describe('Test for multiply', () => {

        it('Should return four', () => {
            let calculator = new Calculator();
            let n1 = 2;
            let n2 = 2;
            let expectedResult = 4;

            let currentResult = calculator.multiply(n1, n2);

            expect(currentResult).toEqual(expectedResult);
        });

        it('Should return nine', () => {
            let calculator = new Calculator();
            let n1 = 3;
            let n2 = 3;
            let expectedResult = 9;

            let currentResult = calculator.multiply(n1, n2);

            expect(currentResult).toEqual(expectedResult);
        });

    });

    describe('Test for divide', () => {

        it('divide for a number', () => {
            let calculator = new Calculator();

            expect(calculator.divide(6, 3)).toEqual(2);
            expect(calculator.divide(5, 2)).toEqual(2.5);
        });

        it('divide for zero', () => {
            let calculator = new Calculator();

            expect(calculator.divide(6, 0)).toBeNull();
            expect(calculator.divide(5, 0)).toBeNull();
        });

    });
});
```

## Resultado de las Pruebas

Las pruebas unitarias fueron ejecutadas exitosamente, mostrando una cobertura del 100%:

- **Statements:** 100% (19/19)
- **Branches:** 100% (1/1)
- **Functions:** 100% (4/4)
- **Lines:** 100% (18/18)

## Requisitos

- Node.js
- Angular CLI
- Jasmine (para pruebas unitarias)

## Uso

Este proyecto es útil para aquellos que buscan aprender y practicar TDD en Angular, especialmente en la creación de pruebas unitarias simples con Jasmine.

## Autor

Desarrollado por Anyel EC
