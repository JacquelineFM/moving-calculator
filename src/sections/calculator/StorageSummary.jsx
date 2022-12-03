// hooks
import useCalculator from "../../hooks/useCalculator";
// utils
import { formatNumber } from "../../utils/formatNumber";

// ----------------------------------------------------------------------

const StorageSummary = () => {
  const { summary } = useCalculator();
  const { totalItems, totalMm, subTotal, tax, total, dueToday } = summary;

  return (
    <section id="storageSummary" className="flex flex-col space-y-20">
      <h3 className="text-center mx-auto text-2xl md:text-4xl font-normal text-secondary leading-10">
        Summary
      </h3>
      <article className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 self-center overflow-hidden bg-gray-350 text-black font-normal text-base text-start px-8 py-9">
        <dl>
          <div className="px-2 py-3 grid gap-1 grid-cols-3 md:grid-cols-4 items-center">
            <dt className="col-span-2 md:col-span-3">Total Items</dt>
            <dd className="">{formatNumber(totalItems)}</dd>
          </div>
          <div className="px-2 py-3 grid gap-1 grid-cols-3 md:grid-cols-4 items-center">
            <dt className="col-span-2 md:col-span-3">Total M²</dt>
            <dd className="">{formatNumber(totalMm)}</dd>
          </div>
          <div className="px-2 py-3 grid gap-1 grid-cols-3 md:grid-cols-4 items-center">
            <dt className="col-span-2 md:col-span-3">Subtotal</dt>
            <dd className="">${formatNumber(subTotal)}</dd>
          </div>
          <div className="px-2 py-3 grid gap-1 grid-cols-3 md:grid-cols-4 items-center">
            <dt className="col-span-2 md:col-span-3">Tax</dt>
            <dd className="">${formatNumber(tax)}</dd>
          </div>
          <div className="px-2 py-3 grid gap-1 grid-cols-3 md:grid-cols-4 items-center">
            <dt className="font-bold col-span-2 md:col-span-3">Total</dt>
            <dd className="font-bold">${formatNumber(total)}</dd>
          </div>
          <div className="px-2 py-3 grid gap-1 grid-cols-3 md:grid-cols-4 items-center">
            <dt className="font-bold col-span-2 md:col-span-3">
              Due Today 50%
            </dt>
            <dd className="font-bold">${formatNumber(dueToday)}</dd>
          </div>
        </dl>
      </article>
    </section>
  );
};

export default StorageSummary;
