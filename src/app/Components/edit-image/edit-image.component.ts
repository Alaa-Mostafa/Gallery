import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// ------- primeNg components
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-edit-image',
  standalone: true,
  imports: [
    FormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-image.component.html',
  styleUrl: './edit-image.component.css',
})
export class EditImageComponent {
  constructor(private formBuilder: FormBuilder) {}

  @Input() image = {
    name: '',
    description: '',
    collection: '',
    image: '',
  };

  @Input() displayPopup: boolean = false;
  @Input() header: string = '';

  @Output() confirmEditing = new EventEmitter();
  @Output() displayPopupChange = new EventEmitter<boolean>();

  imageForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.maxLength(200)]],
    collection: ['', [Validators.required]],
    image: ['', [Validators.required]],
  });

  ngOnChanges() {
    this.imageForm.patchValue(this.image);
    this.imageForm.clearValidators();
    this.imageForm.updateValueAndValidity();
  }

  confirmEdit() {
    this.confirmEditing.emit(this.imageForm.value);
    this.displayPopup = false;
    this.displayPopupChange.emit(this.displayPopup);
  }

  cancelEdit() {
    this.displayPopup = false;
    this.displayPopupChange.emit(this.displayPopup);
  }

  resetForm() {
    this.imageForm.reset();
  }
}
