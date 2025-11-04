import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaintingsService } from '../../services/paintings';
import { Painting } from '../../models/painting-guard';


@Component({
selector: 'app-detail',
standalone: true,
templateUrl:'./detail.html',
styleUrls: ['./detail.css'],
})
export class DetailComponent {
private route = inject(ActivatedRoute);
private router = inject(Router);
private svc = inject(PaintingsService);


painting?: Painting;


constructor() {
const id = Number(this.route.snapshot.paramMap.get('id'));
const found = this.svc.getById(id);
if (!found) this.router.navigate(['/paintings']);
else this.painting = found;
}
goBack(): void {
  history.back();
}
}