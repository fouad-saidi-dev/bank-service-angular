import {Component, OnInit, ViewChild} from '@angular/core';
import {BeneficiaryService} from "../../../services/beneficiary.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Beneficiary} from "../../../models/beneficiary.model";
import {MatTableDataSource} from "@angular/material/table";
import {TransferDialogComponent} from "../transfer-dialog/transfer-dialog.component";

@Component({
  selector: 'app-list-beneficiary',
  templateUrl: './list-beneficiary.component.html',
  styleUrl: './list-beneficiary.component.css'
})
export class ListBeneficiaryComponent implements OnInit{
  public beneficiaries:any;
  public dataSource!: any;
  public displayedColumns = ['firstName', 'lastName', 'rib' , 'beneficiaryType' , 'actions'];
  constructor(private beneficiaryService:BeneficiaryService,
              private router:Router,
              private dialog:MatDialog) {
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
  this.getBeneficiaries().catch(
    (error) => console.log(error)
  )
  }

  async getBeneficiaries() {
    this.beneficiaryService.getBeneficiaryList().subscribe({
      next: (data) => {
        console.log(data);
        this.beneficiaries = data as Beneficiary[];
        this.dataSource = new MatTableDataSource(this.beneficiaries);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  displayTransferDialog(transferList:any[],name:string,id:string,sourceRib:string) {
    console.log("Transfers",transferList)
    this.dialog.open(TransferDialogComponent, {
      height: '400px',
      width: '800px',
      data : {
        transferList,
        name,
        id,
        sourceRib
      }
    });
  }

  editBeneficiary(id:string) {
     this.router.navigateByUrl(`/admin/new-beneficiary/${id}`)
  }

  deleteBeneficiary(id:string) {

  }
}
