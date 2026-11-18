import { Sections } from '@/components/Sections';
import { pageContent } from '@/content';
import { pageMetadata } from '@/lib/metadata';

const path = '/pricing/';

export const metadata = pageMetadata(path);

export default function Page() {
  const content = pageContent[path];
  return <Sections sections={content?.sections ?? []} />;
}
