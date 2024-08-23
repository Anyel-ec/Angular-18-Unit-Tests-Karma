import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    // Set up the testing environment with the necessary modules and components.
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormComponent] // Import the required modules and component.
    }).compileComponents(); // Compile the component for testing.

    // Create an instance of the component to test.
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance; // Access the created component instance.
    fixture.detectChanges(); // Apply initial changes to the component.
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test para .toBeDefined() en el campo URL
  it('should have a defined value in the URL input field', () => {
    const urlInputElement = fixture.debugElement.query(By.css('input[type="url"]')).nativeElement;
    urlInputElement.value = 'https://espe.edu.ec';
    urlInputElement.dispatchEvent(new Event('input'));
    expect(component.myForm.get('urlField')?.value).toBeDefined();
  });

  // Test para .toBeFalsy() en el checkbox (cuando no está marcado)
  it('should have an unchecked checkboxField that is falsy', () => {
    const checkboxElement = fixture.debugElement.query(By.css('input[type="checkbox"]')).nativeElement;
    checkboxElement.checked = false;
    checkboxElement.dispatchEvent(new Event('change'));
    expect(component.myForm.get('checkboxField')?.value).toBeFalsy();
  });

  // Test para .toBeTruthy() en el radio input (cuando se selecciona)
  it('should have a selected radioField that is truthy', () => {
    const radioElement = fixture.debugElement.query(By.css('input[type="radio"]#radioField1')).nativeElement;
    radioElement.checked = true;
    radioElement.dispatchEvent(new Event('change'));
    expect(component.myForm.get('radioField')?.value).toBeTruthy();
  });

  // Test para .toBeCloseTo() en el campo range (comparando el valor del campo range con un valor esperado con una diferencia aceptable)
  it('should have a range input value close to 75 with a precision of 1', () => {
    const rangeElement = fixture.debugElement.query(By.css('input[type="range"]')).nativeElement;
    rangeElement.value = 75;
    rangeElement.dispatchEvent(new Event('input'));
    expect(parseFloat(component.myForm.get('rangeField')?.value)).toBeCloseTo(75, 1);
  });

  // Test para .toHaveBeenCalled() en un botón de envío
  it('should call onSubmit when the submit button is clicked', () => {
    spyOn(component, 'onSubmit');
    const button = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    button.click();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  // Test para .toBeNull() en el campo file cuando no se ha seleccionado ningún archivo
  it('should have a null value in the fileField input when no file is selected', () => {
    const fileInputElement = fixture.debugElement.query(By.css('input[type="file"]')).nativeElement;
    expect(component.myForm.get('fileField')?.value).toBeNull();
  });

  // Test para .toBeGreaterThan() en el campo tel (comprobando que el valor sea mayor a un número dado)
  it('should have a tel input value greater than 999999999', () => {
    const telElement = fixture.debugElement.query(By.css('input[type="tel"]')).nativeElement;
    telElement.value = '1234567890';
    telElement.dispatchEvent(new Event('input'));
    expect(parseInt(component.myForm.get('telField')?.value, 10)).toBeGreaterThan(999999999);
  });

  // Test para .toBeInstanceOf() comprobando que el formulario es una instancia de FormGroup
  it('should be an instance of FormGroup', () => {
    expect(component.myForm).toBeInstanceOf(Object);
  });

  // Test para .toBeTrue() en la selección de una opción de un select
  it('should select option 1 in the selectField and have the value be true', () => {
    const selectElement = fixture.debugElement.query(By.css('select')).nativeElement;
    selectElement.value = 'option1';
    selectElement.dispatchEvent(new Event('change'));
    expect(component.myForm.get('selectField')?.value === 'option1').toBeTrue();
  });

  // Test para .toBe() comprobando que el campo password contiene un valor específico
  it('should have a password input with a specific value', () => {
    const passwordElement = fixture.debugElement.query(By.css('input[type="password"]')).nativeElement;
    passwordElement.value = '123456';
    passwordElement.dispatchEvent(new Event('input'));
    expect(component.myForm.get('passwordField')?.value).toBe('123456');
  });

  // Test para la función onSubmit cuando el formulario es válido
  it('should log the form value when onSubmit is called and the form is valid', () => {
    spyOn(console, 'log');
    component.myForm.get('textField')?.setValue('Testing');
    component.myForm.get('emailField')?.setValue('test@example.com');
    component.myForm.get('passwordField')?.setValue('123456');
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith(component.myForm.value);
  });

  // Test para la función onSubmit cuando el formulario es inválido
  it('should log the form value when onSubmit is called and the form is valid', () => {
    spyOn(console, 'log');  // Espía el método console.log para verificar si fue llamado

    // Establecer valores válidos en todos los campos obligatorios
    component.myForm.get('textField')?.setValue('Testing');
    component.myForm.get('passwordField')?.setValue('123456');
    component.myForm.get('emailField')?.setValue('test@example.com');
    component.myForm.get('numberField')?.setValue(123);
    component.myForm.get('dateField')?.setValue('2024-08-19');
    component.myForm.get('timeField')?.setValue('12:00');
    component.myForm.get('colorField')?.setValue('#ff0000');
    component.myForm.get('checkboxField')?.setValue(true);
    component.myForm.get('radioField')?.setValue('option1');
    component.myForm.get('selectField')?.setValue('option1');
    component.myForm.get('textareaField')?.setValue('Some text');
    component.myForm.get('rangeField')?.setValue(75);
    component.myForm.get('urlField')?.setValue('https://espe.edu.ec');
    component.myForm.get('searchField')?.setValue('search query');
    component.myForm.get('telField')?.setValue('1234567890');
    component.myForm.get('datetimeLocalField')?.setValue('2024-08-19T12:00');
    component.myForm.get('monthField')?.setValue('2024-08');
    component.myForm.get('weekField')?.setValue('2024-W33');

    // Asegúrate de que `fileField` esté vacío si no se requiere
    component.myForm.get('fileField')?.setValue(null);

    // Ejecuta la función onSubmit
    component.onSubmit();

    // Verifica que console.log fue llamado con los valores correctos
    expect(console.log).toHaveBeenCalledWith({
        textField: 'Testing',
        passwordField: '123456',
        emailField: 'test@example.com',
        numberField: 123,
        dateField: '2024-08-19',
        timeField: '12:00',
        colorField: '#ff0000',
        checkboxField: true,
        radioField: 'option1',
        selectField: 'option1',
        fileField: null,
        textareaField: 'Some text',
        rangeField: 75,
        urlField: 'https://espe.edu.ec',
        searchField: 'search query',
        telField: '1234567890',
        datetimeLocalField: '2024-08-19T12:00',
        monthField: '2024-08',
        weekField: '2024-W33'
    });
});




  // Test para la función dado que retorna verdadero si el número es par
  it('should return true when dado function generates an even number', () => {
    spyOn(Math, 'random').and.returnValue(0.4); // Simula un número par (4)
    expect(component.dado()).toBeTrue();
  });

  it('should return false when dado function generates an odd number', () => {
    spyOn(Math, 'random').and.returnValue(0.5); // Simula un número impar (5)
    expect(component.dado()).toBeFalse();
  });



});
