import { getTourBySlug } from '$lib/data/tours';
import { error } from '@sveltejs/kit';

export const load = ({ params }: { params: { slug: string } }) => {
  const tour = getTourBySlug(params.slug);
  
  if (!tour) {
    throw error(404, 'Tour not found');
  }
  
  return { tour };
};
