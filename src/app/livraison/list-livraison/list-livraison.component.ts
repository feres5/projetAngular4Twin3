import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Livraison} from '../../model/Livraison';
import {LivraisonService} from '../../services/livraison.service';


@Component({
  selector: 'app-list-livraison',
  templateUrl: './list-livraison.component.html',
  styleUrls: ['./list-livraison.component.scss']
})
export class ListLivraisonComponent implements OnInit {
  constructor(private modalService: NgbModal,
              private service: LivraisonService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.GetAllLivraison();
  }

  ListLivraison !: Livraison [];
  closeResult!: string;

  searchValue: string;
  page: number = 1;


  GetAllLivraison() {
    console.log("getallLivraison");
    this.service.fetchLivraison().subscribe(
      (t) => {
        console.log(t);
        this.ListLivraison = t;
      },
      (error) => {
        console.log(error.status)
      }
    );
  }

  Delete(id: number) {
    this.service.deleteLivraison(id).subscribe(() => {
    }, (error) => {
      console.log(error)
    });
    console.log("----------------------------")
    this.GetAllLivraison();
  }

  UpdateUser(id: number) {
    this.router.navigate(['update', id])
  }

  open(content: any) {
    this.modalService.open(
      content,
      {ariaLabelledBy: 'modal-basic-title'}
    ).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });
  }

  open2(content: any, id: number) {
    this.router.navigate(['update', id])
    this.modalService.open(
      content,
      {ariaLabelledBy: 'modal-basic-title'}
    ).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
