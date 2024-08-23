import { Calculator } from './calculator';

describe('test for Calculator', ()=>{
    describe('Test for multiply', ()=>{

        it('Should return four', ()=>{
            //Arrange
            let calculator= new Calculator();
            let n1= 2
            let n2= 2;
            let expectedResult=4
            //Act
            let currentResult = calculator.multiply(n1, n2);
            //Assert
            expect(currentResult).toEqual(expectedResult);

        });

        it('Should return nine', ()=>{
            //Arrange
            let calculator= new Calculator();
            let n1= 3
            let n2= 3;
            let expectedResult=9
            //Act
            let currentResult = calculator.multiply(n1, n2);
            //Assert
            expect(currentResult).toEqual(expectedResult);

        });

    });

    describe('Test for divide', ()=>{

        it('divide for a number', ()=>{
            //Arrange
            let calculator= new Calculator();
            //Act & Assert
            expect (calculator.divide(6, 3)).toEqual(2);
            expect (calculator.divide(5, 2)).toEqual(2.5);

        });

        it('divide for zero', ()=>{
            //Arrange
            let calculator= new Calculator();
            //Act & Assert
            expect (calculator.divide(6, 0)).toBeNull;
            expect (calculator.divide(5, 0)).toBeNull;

        });


    });

    // Test using Jazmin
    describe('Test for Jazmin matchers', ()=>{
      it('matchers', ()=>{
          let name= 'Liss';
          let name2;
          //Act & Assert
          // name is defined
          expect (name).toBeDefined();
          // name2 not is defined
          expect(name2).toBeUndefined();
          // 1+3 =4 is True
          expect(1+3==4).toBeTruthy();
          // 1+4 = 3 is false
          expect(1+4==3).toBeFalse();
          // 5 is less than 10
          expect(5).toBeLessThan(10);
          // 20 is greater than or equal to 15
          expect(20).toBeGreaterThanOrEqual(15);
          expect('Angel Patiño').toMatch(/set/);
          // contains the word "vaca" in array
          expect(["perro", "gato", "loro", "vaca"]).toContain("vaca");
      });

  });


});
