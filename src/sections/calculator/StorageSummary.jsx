// hooks
import useCalculator from "../../hooks/useCalculator";
// utils
import { formatNumber } from "../../utils/formatNumber";

// ----------------------------------------------------------------------

const StorageSummary = () => {
  const { summary } = useCalculator();
  const { totalItems, totalMm, subTotal, tax, total, dueToday } = summary;

  const finalSummary = [
    { title: "Total Items", value: totalItems },
    { title: "Total M²", value: totalMm },
    { title: "Subtotal", value: subTotal },
    { title: "Tax", value: tax },
    { title: "Total", value: total },
    { title: "Due Today 50%", value: dueToday },
  ];

  return (
    <section id="storageSummary" className="flex flex-col space-y-20">
      <h3 className="text-center mx-auto text-2xl md:text-4xl font-normal text-secondary leading-10">
        Summary
      </h3>
      <article className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 self-center overflow-hidden bg-gray-350 text-black font-normal text-base text-start px-8 py-9">
        <dl>
          {finalSummary.map(({ title, value }, idx) => (
            <div
              key={idx}
              className="px-2 py-3 grid gap-1 grid-cols-3 md:grid-cols-4 items-center"
            >
              <dt
                className={`col-span-2 md:col-span-3 ${
                  (idx === 4 || idx === 5) && "font-bold"
                }`}
              >
                {title}
              </dt>
              <dd className={`${(idx === 4 || idx === 5) && "font-bold"}`}>
                {idx !== 0 && idx !== 1 && "$"}
                {formatNumber(value)}
              </dd>
            </div>
          ))}
        </dl>
      </article>
    </section>
  );
};

export default StorageSummary;
