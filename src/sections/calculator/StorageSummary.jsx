// ----------------------------------------------------------------------

const StorageSummary = () => {
  return (
    <section id="storageSummary" className="flex flex-col space-y-20">
      <h3 className="text-center mx-auto text-2xl md:text-4xl font-normal text-secondary leading-10">
        Summary
      </h3>
      <article className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 self-center overflow-hidden bg-gray-350 text-black font-normal text-base text-start px-8 py-9">
        <dl>
          <div className="px-2 py-3 grid gap-1 grid-cols-3 md:grid-cols-4 items-center">
            <dt className="col-span-2 md:col-span-3">Total Items</dt>
            <dd className="">12</dd>
          </div>
          <div className="px-2 py-3 grid gap-1 grid-cols-3 md:grid-cols-4 items-center">
            <dt className="col-span-2 md:col-span-3">Total M²</dt>
            <dd className="">8.55</dd>
          </div>
          <div className="px-2 py-3 grid gap-1 grid-cols-3 md:grid-cols-4 items-center">
            <dt className="col-span-2 md:col-span-3">Subtotal</dt>
            <dd className="">$1,710</dd>
          </div>
          <div className="px-2 py-3 grid gap-1 grid-cols-3 md:grid-cols-4 items-center">
            <dt className="col-span-2 md:col-span-3">Tax</dt>
            <dd className="">$273.6</dd>
          </div>
          <div className="px-2 py-3 grid gap-1 grid-cols-3 md:grid-cols-4 items-center">
            <dt className="font-bold col-span-2 md:col-span-3">Total</dt>
            <dd className="font-bold">$1,983.6</dd>
          </div>
          <div className="px-2 py-3 grid gap-1 grid-cols-3 md:grid-cols-4 items-center">
            <dt className="font-bold col-span-2 md:col-span-3">
              Due Today 50%
            </dt>
            <dd className="font-bold">$991.8</dd>
          </div>
        </dl>
      </article>
    </section>
  );
};

export default StorageSummary;
