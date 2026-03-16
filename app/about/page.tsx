import { redirect } from 'next/navigation';

// About content has moved to the homepage (/)
export default function AboutRedirect() {
  redirect('/');
}
