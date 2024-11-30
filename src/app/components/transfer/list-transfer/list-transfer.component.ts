import {Component, OnInit, ViewChild} from '@angular/core';
import {TransferService} from "../../../services/transfer.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-list-transfer',
  templateUrl: './list-transfer.component.html',
  styleUrl: './list-transfer.component.css'
})
export class ListTransferComponent implements OnInit{
  public transfers:any;
  public dataSource!: any;
  public displayedColumns = ['id', 'beneficiaryName','sourceRib' ,'amount','type','date' , 'actions'];
  constructor(private transferService:TransferService, private router:Router ) {
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.getTransfers()
  }

  async getTransfers() {
    this.transferService.getTransferList().subscribe({
      next: (data) => {
        console.log(data);
        this.transfers = data;
        this.dataSource = new MatTableDataSource(this.transfers);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteTransfer(id:number) {

  }

  editTransfer(id:number) {

  }
}
