import { useCallback, useEffect, useState } from "react";

export function useResource(fetcher, initial = []) {
  const [data, setData] = useState(initial); // safe default, never undefined
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try { setData(await fetcher()); }
    finally { setLoading(false); }
  }, [fetcher]);

  useEffect(() => { load(); }, [load]);

  return { data, loading, reload: load, setData };
}