const API_URL = import.meta.env.VITE_API_URL;

export const contactService = {
  sendMessage: async (payload) => {
    const response = await fetch(
      `${API_URL}/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return response.json();
  },
};