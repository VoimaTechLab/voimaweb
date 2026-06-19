export function monthlyStats(items, field) {
  const now = new Date();
  const y = now.getFullYear(), m = now.getMonth();
  const inMonth = (d, mo) => { const x = new Date(d); return x.getFullYear() === (mo < 0 ? y - 1 : y) && x.getMonth() === ((mo + 12) % 12); };
  const thisMonth = items.filter((i) => inMonth(i[field], m)).length;
  const prevMonth = items.filter((i) => inMonth(i[field], m - 1)).length;
  const growth = prevMonth === 0 ? (thisMonth > 0 ? 100 : 0) : Math.round(((thisMonth - prevMonth) / prevMonth) * 100);
  return { thisMonth, growth };
}