// src/pages/ProgramDetail.jsx

import { useParams } from "react-router-dom";

function ProgramDetail() {
  const { slug } = useParams();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Program Detail</h1>

      <p className="mt-4 text-lg opacity-70">
        Slug: {slug}
      </p>
    </section>
  );
}

export default ProgramDetail;