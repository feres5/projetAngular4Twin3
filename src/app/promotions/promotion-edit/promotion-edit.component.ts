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
    let promotionId = null;
    let promotionLibelle = '';
    let promotionActive = false;
    let promotionMontant = null;

    if (this.editMode) {
      const promotion = this.promotionService.getPromotion(this.id);
      promotionId = promotion.idPromotion;
      promotionLibelle = promotion.libelle;
      promotionActive = promotion.active;
      promotionMontant = promotion.montant;
    }
    if (this.editMode) {
      this.promotionForm = new FormGroup({
        'idPromotion': new FormControl(promotionId),
        'libelle': new FormControl(promotionLibelle, Validators.required),
        'montant': new FormControl(
          promotionMontant,
          [Validators.required, Validators.min(0)]
        ),
        'active': new FormControl(
          promotionActive,
          [Validators.required, Validators.min(0)]
        )
      });
    } else {
      this.promotionForm = new FormGroup({
        'libelle': new FormControl(promotionLibelle, Validators.required),
        'montant': new FormControl(
          promotionMontant,
          [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
        ),
        'active': new FormControl(
          promotionActive,
          [Validators.required, Validators.min(0)]
        )
      });
    }

  }
}
