import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PaintingsService } from '../../services/paintings';
import { Painting } from '../../models/painting-guard';


@Component({
selector: 'app-paintings',
standalone: true,
imports: [FormsModule, RouterLink],
templateUrl:'./paintings.html',
styleUrls: ['./paintings.css'],
})
export class PaintingsComponent {
term = '';
get paintings(): Painting[] {
return this.term ? this.paintingsService.search(this.term) : this.paintingsService.getAll();
}
constructor(private paintingsService: PaintingsService) {}
}