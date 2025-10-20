import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// When exporting static HTML, expose a static GET handler and disable
// revalidation so the exported HTML doesn't expect ISR.
export const revalidate = false;
export const { staticGET: GET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'english',
});
