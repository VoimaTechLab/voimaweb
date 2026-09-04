import { useCallback, useEffect, useState } from "react";

export function useResource(fetcher, initial = []) {
  const [data, setData] = useState(initial); // safe default, never undefined
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetcher();
      setData(result);
    } catch (error) {
      console.error("Failed to load resource:", error);
    } finally {
      setLoading(false);
    }
  }, [fetcher]);

  useEffect(() => {
    let isMounted = true;

    async function execute() {
      try {
        const result = await fetcher();
        if (isMounted) setData(result);
      } catch (error) {
        console.error("Failed to load resource:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    execute();

    return () => {
      isMounted = false;
    };
  }, [fetcher]);

  return { data, loading, reload: load, setData };
}