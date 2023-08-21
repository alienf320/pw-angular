import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TMsComponent } from './components/tms/tms.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/utils/modules/shared.module';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { TMsListComponent } from './components/tms-list/tms-list.component';
import { LearnableTMsComponent } from './components/learnable-tms/learnable-tms.component';
import { EggMovesComponent } from './components/egg-moves/egg-moves.component';

const routes: Routes = [
  //{ path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: TMsComponent,
    children: [
      { path: 'learnable-tms', component: LearnableTMsComponent },
      { path: 'tms-list', component: TMsListComponent },
      { path: 'egg-moves', component: EggMovesComponent },
    ],
  },
];

@NgModule({
  declarations: [TMsComponent, TMsListComponent, LearnableTMsComponent, EggMovesComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatTableModule,
    MatSortModule,
    RouterModule.forChild(routes),
  ],
})
export class MovesModule {}
