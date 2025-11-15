import { BalanceSection } from '@/features/dashboard/balance-section';
import { TransactionsSection } from '@/features/dashboard/recent-transactions';

export default async function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="space-y-6">
        <BalanceSection />
        <TransactionsSection />
      </div>
    </div>
  );
}
