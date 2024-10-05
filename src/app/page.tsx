import { ArrowPathIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { fetchLatestInvoices } from "../app/lib/data";

export default async function LatestInvoices() {
  // Remove props
  const latestInvoices = await fetchLatestInvoices();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2>Latest Invoices</h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/*  NOTE: Uncomment this code in Chapter 7 */}

        <div className="bg-white px-6">

        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
