import {AfterViewInit, Component, EventEmitter, Optional, Output, Self, ViewChild} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';

@Component({
  selector: 'app-textbox-plus-button',
  templateUrl: './textbox-plus-button.component.html',
  styleUrls: ['./textbox-plus-button.component.scss']
})
export class TextboxPlusButtonComponent implements ControlValueAccessor, AfterViewInit {
  public value: string | undefined;
  private onChange: ((val: string) => {}) | undefined;

  @ViewChild('input', {read: NgControl})
  public input: NgControl | undefined;

  @Output()
  private buttonClicked: EventEmitter<void> = new EventEmitter<void>();

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

  public eventClicked() {
    this.buttonClicked.emit();
  }
}
