import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TMsComponent } from './components/tms/tms.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/utils/modules/shared.module';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

const routes: Routes = [
  
    { path: '', redirectTo: '/learnable-tms', pathMatch: 'full' },
    { path: 'learnable-tms', component: TMsComponent },
    // { path: 'trainer', component: TrainerComponent },
    // { path: 'types', component: TypesComponent },
    // { path: 'tms', component: TMsComponent },
  
];


@NgModule({
  declarations: [
    TMsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatTableModule,
    MatSortModule,
    RouterModule.forChild(routes)
  ]
})
export class MovesModule { }
