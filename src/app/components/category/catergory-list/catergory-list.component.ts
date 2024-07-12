import { Component, Input, input } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { ICategory } from '../../../interfaces';
import { CategoryFormComponent } from '../category-form/category-form.component';

@Component({
  selector: 'app-catergory-list',
  standalone: true,
  imports: [
    ModalComponent,
    CategoryFormComponent
  ],
  templateUrl: './catergory-list.component.html',
  styleUrl: './catergory-list.component.scss'
})
export class CatergoryListComponent {
  @Input() itemList: ICategory[] = [];

  public selectedItem: ICategory = {}

  showDetailModal(item: ICategory, modal:any) {
    this.selectedItem = {...item};
    modal.show();
  }
}
