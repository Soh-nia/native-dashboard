import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    // page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
        <Table customers={customers} />
      {/* <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div> */}
    </div>
  );
}