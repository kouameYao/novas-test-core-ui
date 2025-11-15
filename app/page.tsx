import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Home'
};

export default async function RootPage() {
  return redirect('/fr/login');
}
