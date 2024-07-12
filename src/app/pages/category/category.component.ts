import { Component, inject, OnInit } from '@angular/core';
import { LoaderComponent } from '../../components/loader/loader.component';
import { CatergoryListComponent } from "../../components/category/catergory-list/catergory-list.component";
import { CategoryFormComponent } from "../../components/category/category-form/category-form.component";
import { ModalComponent } from "../../components/modal/modal.component";
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../interfaces';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    LoaderComponent,
    CatergoryListComponent,
    CategoryFormComponent,
    ModalComponent,
    CommonModule
],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  public categoryService = inject(CategoryService);

  constructor() {
    this.categoryService.getAll();
  }
  
  onFormEventCalled(params: ICategory) {
    this.categoryService.save(params);
  }
}
