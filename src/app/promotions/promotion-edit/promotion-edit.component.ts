import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RayonService} from '../../services/rayon.service';
import {PromotionService} from '../../services/promotion.service';

@Component({
  selector: 'app-promotion-edit',
  templateUrl: './promotion-edit.component.html',
  styleUrls: ['./promotion-edit.component.scss']
})
export class PromotionEditComponent implements OnInit {
  promotionForm: FormGroup;
  id: number;
  editMode = false;

  // @ViewChild('productForm', { static: false }) productForm: NgForm;

  constructor(private route: ActivatedRoute,
              private promotionService: PromotionService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.promotionService.updatePromotion(this.promotionForm.value).subscribe(response => {
        // console.log(response);
        this.onCancel();
      }, error => {
        console.log(error);
      });
    } else {
      this.promotionService.PostPromotion(this.promotionForm.value).subscribe(response => {
         console.log(response);
        this.onCancel();
      }, error => {
        console.log(error);
      });
    }
  }

  onCancel() {
    // this.router.navigate(['../'], {relativeTo: this.route});
    this.router.navigate(['/promotions']);
  }

  onClear() {

  }

  private initForm() {
    // let rayonId = null;
    // let rayonLibelle = '';
    // let rayonCode = '';
    //
    // if (this.editMode) {
    //   const rayon = this.rayonService.getRayon(this.id);
    //   rayonId = rayon.idRayon;
    //   rayonLibelle = rayon.libelle;
    //   rayonCode = rayon.code;
    // }
    // if (this.editMode) {
    //   this.rayonForm = new FormGroup({
    //     'idRayon': new FormControl(rayonId),
    //     'libelle': new FormControl(rayonLibelle, Validators.required),
    //     'code': new FormControl(
    //       rayonCode,
    //       [Validators.required]
    //     )
    //   });
    // } else {
    //   this.rayonForm = new FormGroup({
    //     'libelle': new FormControl(rayonLibelle, Validators.required),
    //     'code': new FormControl(
    //       rayonCode,
    //       [Validators.required]
    //     )
    //   });
    // }

  }
}
