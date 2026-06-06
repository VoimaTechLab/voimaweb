
export const newsletterService = {
  subscribe: async (email) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/newsletter/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (!response.ok) {
      throw new Error("Subscription failed");
    }

    return response.json();
  },
};