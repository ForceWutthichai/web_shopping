import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NzGridModule,
    NzPaginationModule,
    NzButtonModule,
    NzIconModule,
    NzMenuModule,
    NzToolTipModule,
    NzCardModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  current = 1;
  

  constructor(private router: Router) {}

  home(): void {
    this.router.navigate(['/welcome']);
  }
  onPageIndexChange(pageIndex: number): void {
    console.log('Page Index:', pageIndex);
  }

  onPageSizeChange(pageSize: number): void {
    console.log('Page Size:', pageSize);
  }
  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };
  
  isCollapsed = false;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  
}


