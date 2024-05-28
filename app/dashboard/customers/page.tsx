import { fetchCustomersWithImage } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  const data = await fetchCustomersWithImage();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-6">
        {data.map((item) => (
          <div className="flex gap-3" key={item.id}>
            <Image
              src={item.image_url}
              alt="customer-image"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <Link
                href={`invoices?page=1&query=${item.name}`}
                className="font-semibold underline"
              >
                {item.name}
              </Link>
              <p className="font-light">{item.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
