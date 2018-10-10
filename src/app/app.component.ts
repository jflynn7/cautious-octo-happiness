import { Component, OnInit, ViewChild } from '@angular/core';
import { FormConfig } from '../../projects/simple-forms-2/src/lib/interfaces/form-config';
import { NuForm, NuFormService, WPRESTService } from '../../projects/nunicorn-utils/src/lib/services';
import { AlertComponent, ModalComponent } from '../../projects/nunicorn-components/src/lib/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  userLoggedIn: { ID: string };

  userForm: NuForm;
  productForm: NuForm;
  modalActive: boolean = false;

  @ViewChild('alert') alert: AlertComponent;
  @ViewChild('modal') modal: ModalComponent;

  constructor(
    private wpRestService: WPRESTService,
    private nuFormService: NuFormService) {}


  ngOnInit() {

    setTimeout(() => {
      this.modal.toggleModal();
    }, 1000);

    this.wpRestService.loggedInUser$.subscribe(user => {
      this.userLoggedIn = user;
    });

    this.nuFormService.getForm('userForm').subscribe((form: NuForm) => {
      if (form) {
        this.userForm = form;
        this.nuFormService.setFormStyle(this.userForm, 'wrapper', 'dashboard');
      }
    });

    this.nuFormService.getForm('productForm').subscribe((form: NuForm) => {
      if (form) {
        this.productForm = form;
        this.nuFormService.setFormStyle(this.productForm, 'wrapper', 'dashboard');
      }
    });

  }

  toggleAlert() {
    this.alert.toggleAlert();
  }

  toggleModal() {
    this.modal.toggleModal();
  }

  userFormComplete() {
    console.log(this.userForm.masterFormGroup.getRawValue());
    this.toggleAlert();
  }

  logout() {
    this.wpRestService.logout(this.userLoggedIn.ID).subscribe(() => {
      this.wpRestService.loggedInUser$.next(undefined);
    });
  }

  get(inputId: string, form: FormConfig) {
    return form.formGroup.get(inputId).value;
  }

}
