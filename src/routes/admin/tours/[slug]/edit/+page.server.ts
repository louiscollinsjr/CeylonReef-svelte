import { getTourBySlug } from '$lib/data/tours';
import { error, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }) => {
  const slug = params.slug ?? '';
  const tour = getTourBySlug(slug);
  if (!tour) {
    error(404, 'Tour not found');
  }

  return { tour };
};
