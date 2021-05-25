import {AfterViewInit, Component, OnInit, Optional, Self, ViewChild} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';

@Component({
  selector: 'app-my-text-box',
  templateUrl: './my-text-box.component.html',
  styleUrls: ['./my-text-box.component.scss']
})
export class MyTextBoxComponent implements ControlValueAccessor, AfterViewInit {
  public value: string | undefined;
  private onChange: ((val: string) => {}) | undefined;

  @ViewChild('input', {read: NgControl})
  public input: NgControl | undefined;

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
      if (this.ngControl.control != null) {
        let fun = this.ngControl.control?.setValidators;
        this.ngControl.control.setValidators = (vals) => {
          fun(vals);
          this.setValidators();
        };
      }
    }
  }

  public ngAfterViewInit() {
    this.setValidators();
  }

  private setValidators() {
    if (this.input != null)
      this.input.control?.setValidators(this.ngControl.validator);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
  }

  public writeValue(obj: string): void {
    this.value = obj;
  }

  public change($event: string) {
    this.onChange?.($event);
  }
}
