import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
    },
    {
        path: 'paintings',loadComponent: () => import('./pages/paintings/paintings').then(m => m.PaintingsComponent)
    },
    {
        path: 'paintings/:id',loadComponent: () => import('./pages/detail/detail').then(m => m.DetailComponent)
    },
    { path: '**', redirectTo: '' }
];