export default function PriceDisplay({ product, size = 'md', align = 'left' }) {
  const sellingPrice = product.sellingPrice || product.price;
  const mrp = product.mrp || sellingPrice;
  const discountPercentage = product.discountPercentage || Math.max(0, Math.round(((mrp - sellingPrice) / mrp) * 100));
  const isSmall = size === 'sm';

  return (
    <div className={align === 'right' ? 'text-right' : 'text-left'}>
      <div className="flex flex-wrap items-center gap-2">
        <span className={`${isSmall ? 'text-base' : 'text-xl'} font-black text-red-500`}>
          ₹{sellingPrice}
        </span>
        <span className={`${isSmall ? 'text-xs' : 'text-sm'} font-semibold text-slate-400 line-through`}>
          MRP ₹{mrp}
        </span>
      </div>
      <div className="mt-1 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-green-700">
          {discountPercentage}% OFF
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wide text-blue-600">
          Website Offer
        </span>
      </div>
    </div>
  );
}
