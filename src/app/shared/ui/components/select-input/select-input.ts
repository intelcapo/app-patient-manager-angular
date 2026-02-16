import { Component, forwardRef, Input, signal, WritableSignal } from '@angular/core';
import { SearchInput } from '../search-input/search-input';
import { SelectOption } from '../../../models/selectOption.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  imports: [SearchInput],
  templateUrl: './select-input.html',
  styleUrl: './select-input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInput),
      multi: true,
    },
  ],
})
export class SelectInput implements ControlValueAccessor {
  @Input()
  label: string = '';

  _options: SelectOption[] = [];

  originalOptions: SelectOption[] = [];
  @Input()
  set options(opts: SelectOption[]) {
    this._options = opts;
    this.originalOptions = opts;
  }

  optionSelected: WritableSignal<SelectOption | null> = signal(null);

  isContainerOptionsVisible: boolean = false;

  @Input()
  defaultValue: string = '';

  onChange = (value: any) => {};
  onTouch = () => {};
  isDisabled: boolean = false;

  toggleContainerOptionsVisibility() {
    this.isContainerOptionsVisible = !this.isContainerOptionsVisible;
  }

  selectValue(option: SelectOption | null) {
    this.optionSelected?.set(option);
    this.writeValue(this.optionSelected());
    this.closeOptions();
  }

  closeOptions() {
    this.isContainerOptionsVisible = false;
    this.restoreOriginalOptions();
  }

  restoreOriginalOptions() {
    this._options = this.originalOptions;
  }

  filterOptions(description: string) {
    if (description !== '') {
      this._options = [
        ...this._options.filter((option) =>
          option.label.toLowerCase().includes(description.toLowerCase()),
        ),
      ];
    } else {
      this.restoreOriginalOptions();
    }
  }

  writeValue(optionSelected: SelectOption | null): void {
    this.onChange(optionSelected);
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
