import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BeneficiaryService} from "../../../services/beneficiary.service";
import {Beneficiary} from "../../../models/beneficiary.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-new-beneficiary',
  templateUrl: './new-beneficiary.component.html',
  styleUrl: './new-beneficiary.component.css'
})
export class NewBeneficiaryComponent implements OnInit{

  beneficiaryForm!: FormGroup;
  beneficiaryId!:string;
  constructor(private formBuilder:FormBuilder,
              private beneficiaryService:BeneficiaryService,
              private activatedRoute:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.beneficiaryId = this.activatedRoute.snapshot.params['id']

    this.beneficiaryId === undefined ? console.log("undefined") : console.log("not done");

    if (this.beneficiaryId != undefined)
      this.getBeneficiary()

    this.beneficiaryForm = this.formBuilder.group({
      firstName: this.formBuilder.control(''),
      lastName: this.formBuilder.control(''),
      beneficiaryType: this.formBuilder.control('')
    })
  }

  getBeneficiary():void{
     this.beneficiaryService.getBeneficiary(this.beneficiaryId).subscribe({
       next:(data:Beneficiary)=>{
         console.log("Beneficiary: "+data)
         this.beneficiaryForm = this.formBuilder.group({
           firstName: this.formBuilder.control(data.firstName),
           lastName: this.formBuilder.control(data.lastName),
           beneficiaryType: this.formBuilder.control(data.beneficiaryType)
         })
       },
       error:(err)=>{
         console.log("Error: ",err)
       }
     })
  }


  saveBeneficiary() {
    let beneficiary:Beneficiary = this.beneficiaryForm.value
    if(this.beneficiaryId===undefined){
      this.beneficiaryService.saveBeneficiary(beneficiary).subscribe({
        next:(data) => {
          console.log("Success create: "+data)
        },
        error:(err)=>{
          console.error("Error: ",err)
        }
      })
    } else {
      this.beneficiaryService.updateBeneficiary(this.beneficiaryId,beneficiary).subscribe({
        next:(data) => {
          console.log("Success update: "+data)
        },
        error:(err)=>{
          console.error("Error update: ",err)
        }
      })
    }

  }

  onCancel() {
    this.beneficiaryForm.reset();
  }
}
