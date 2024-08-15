import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import the calculator class
import { Calculator } from './calculator'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    let calculator = new Calculator();
    // first test
    let result = calculator.multiply(3, 3);
    console.log("Test of multiply method");
    console.log(result === 9);
    console.log(result !== 12);

    // second test
    let result2 = calculator.divide(6, 2);
    console.log("Test of divide method");
    console.log(result2 === 3);//test passed
    console.log(result2 !== 10);//test passed

    // third test
    let result3 = calculator.divide(6,0);
    console.log("Test of divide method with zero");
   console.log(result3===null);//test passed*/

  }
  title = 'tdd-introduce';
}
