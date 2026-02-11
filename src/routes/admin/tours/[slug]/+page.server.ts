import { getTourBySlug } from '$lib/data/tours';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  const tour = getTourBySlug(params.slug);
  
  if (!tour) {
    error(404, 'Tour not found');
  }
  
  return {
    tour
  };
};
