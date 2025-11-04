import { Injectable } from '@angular/core';
import { Painting } from '../models/painting-guard';
import { MOCK_PAINTINGS } from '../data/mock-paintings';


@Injectable({ providedIn: 'root' })
export class PaintingsService {
private paintings: Painting[] = MOCK_PAINTINGS;
getAll(): Painting[] { return this.paintings; }
getById(id: number): Painting | undefined { return this.paintings.find(p => p.id === id); }
search(term: string): Painting[] {
const t = term.toLowerCase();
return this.paintings.filter(p => p.title.toLowerCase().includes(t) || p.artist.toLowerCase().includes(t));
}
}