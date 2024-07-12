import { Injectable, signal } from '@angular/core';
import { BaseService } from './base-service';
import { ICategory } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<ICategory>{
  protected override source: string = 'category';
  private itemListSignal = signal<ICategory[]>([]);

  get items$() {
    return this.itemListSignal;
  }

  public getAll() {
    this.findAll().subscribe({
      next: (response: any) => {
        response.reverse();
        this.itemListSignal.set(response);
      },
      error: (error : any) => {
        console.log('error', error);
      }
    });
  }

  public save(item: ICategory) {
    this.add(item).subscribe({
      next: (response: any) => {
        console.log('response', response);
      },
      error: (error : any) => {
        console.log('error', error);
      }
    });
  }
}