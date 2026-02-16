import { Component, EventEmitter, forwardRef, Input, Output, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './search-input.html',
  styleUrl: './search-input.scss',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SearchInput), multi: true },
  ],
})
export class SearchInput implements ControlValueAccessor {
  @Input()
  label: string = '';
  isFocused: boolean = false;
  isDirty: boolean = false;
  currentValue = signal('');
  onChange = (_: any) => {};
  onTouch = () => {};
  isDisabled: boolean = false;
  @Output()
  onChangeValue: EventEmitter<string> = new EventEmitter();

  changeValue(event: any) {
    this.currentValue.set(event.target.value);
    this.isDirty = this.currentValue() !== '';
    this.writeValue(this.currentValue());
    this.onChangeValue.emit(this.currentValue());
  }

  focusIn() {
    this.isFocused = true;
  }

  focusOut() {
    this.isFocused = false;
  }

  clear() {
    this.currentValue.set('');
    this.isDirty = false;
    this.writeValue(this.currentValue());
  }

  writeValue(value: any): void {
    this.onChange(value);
    this.onTouch();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
