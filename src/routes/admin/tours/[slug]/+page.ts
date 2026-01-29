import type { PageLoad } from './$types';
import { getTourBySlug } from '$lib/data/tours';

export const load: PageLoad = ({ params }) => {
  const tour = getTourBySlug(params.slug);
  if (!tour) {
    return {
      status: 404,
      error: new Error('Tour not found')
    };
  }
  return { tour };
};
