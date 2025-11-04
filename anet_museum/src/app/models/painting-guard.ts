import { CanActivateFn } from '@angular/router';

export const paintingGuard: CanActivateFn = (route, state) => {
  return true;
};
export interface Painting {
id: number;
title: string;
artist: string;
year?: string;
description: string;
imageUrl: string;
}