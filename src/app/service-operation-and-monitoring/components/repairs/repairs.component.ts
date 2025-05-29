import {Component} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {RepairsService} from '../../services/repairs.service';

@Component({
  selector: 'app-repairs',
  imports: [
    MatTable,
    MatColumnDef,
    MatCell,
    MatHeaderCell,
    MatHeaderRow,
    MatRow,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: 'repairs.component.html',
  styleUrl: 'repairs.component.css'
})

export class RepairsComponent{
  repairsList: any[] = [];
  displayedColumns: string[] = ['type', 'improvement', 'date',];


  constructor(private repairsService: RepairsService) {
    this.repairsService.getRepairs().subscribe((repairs: any) => {
      this.repairsList = repairs;
      console.log(this.repairsList);
    });
  }


}
