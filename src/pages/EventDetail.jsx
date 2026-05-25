// src/pages/EventDetail.jsx

import { useParams } from "react-router-dom";

function EventDetail() {
  const { slug } = useParams();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Event Detail</h1>

      <p className="mt-4 text-lg opacity-70">
        Slug: {slug}
      </p>
    </section>
  );
}

export default EventDetail;