import { Suspense } from 'react';

import { Profile } from '@/containers';

export default function SignupPage() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Profile />
    </Suspense>
  );
}
