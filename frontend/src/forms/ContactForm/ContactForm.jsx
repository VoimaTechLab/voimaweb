import { contactService } from "@/services/contactService";
import { contactSchema } from "@/validations/contactSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setStatus("loading");

    try {
      await contactService.sendMessage(data);

      setStatus("success");

      reset();
    } catch (error) {
      console.error(error);

      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="
          flex h-full flex-col items-center justify-center
          border-4 border-black
          bg-white
          p-14
          text-center
          shadow-[16px_16px_0px_rgba(0,0,0,1)]
        "
      >
        <div
          className="
            flex h-20 w-20 items-center justify-center
            border-2 border-black
            bg-[#BC1D26]/10
            shadow-[6px_6px_0px_rgba(0,0,0,1)]
          "
        >
          <Send
            size={32}
            className="text-black"
          />
        </div>

        <h3 className="mt-8 text-4xl font-black uppercase text-black font-heading tracking-tight">
          Message Sent
        </h3>

        <p className="mt-5 max-w-md leading-8 text-black/75 font-semibold">
          Thank you for reaching out.
          A member of the Voima team will get back
          to you within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        border-4 border-black
        bg-white
        p-10
        shadow-[16px_16px_0px_rgba(0,0,0,1)]
      "
      noValidate
    >
      {/* Name + Email */}
      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-3 block text-xs font-black uppercase tracking-widest text-black">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Your name"
            {...register("name")}
            className="
              h-14 w-full
              border-2 border-black
              bg-[#fafafa]
              px-5
              text-sm font-semibold
              outline-none
              shadow-[4px_4px_0px_rgba(0,0,0,1)]
              transition-all
              focus:border-[#BC1D26] focus:shadow-[6px_6px_0px_rgba(188,29,38,1)] focus:-translate-y-0.5
            "
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-3 block text-xs font-black uppercase tracking-widest text-black">
            Email Address
          </label>

          <input
            type="email"
            placeholder="your@email.com"
            {...register("email")}
            className="
              h-14 w-full
              border-2 border-black
              bg-[#fafafa]
              px-5
              text-sm font-semibold
              outline-none
              shadow-[4px_4px_0px_rgba(0,0,0,1)]
              transition-all
              focus:border-[#BC1D26] focus:shadow-[6px_6px_0px_rgba(188,29,38,1)] focus:-translate-y-0.5
            "
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

      </div>

      {/* Subject */}
      <div className="mt-6">

        <label className="mb-3 block text-xs font-black uppercase tracking-widest text-black">
          Subject
        </label>

        <input
          type="text"
          placeholder="How can we help?"
          {...register("subject")}
          className="
            h-14 w-full
            border-2 border-black
            bg-[#fafafa]
            px-5
            text-sm font-semibold
            outline-none
            shadow-[4px_4px_0px_rgba(0,0,0,1)]
            transition-all
            focus:border-[#BC1D26] focus:shadow-[6px_6px_0px_rgba(188,29,38,1)] focus:-translate-y-0.5
          "
        />

        {errors.subject && (
          <p className="mt-2 text-sm text-red-500">
            {errors.subject.message}
          </p>
        )}

      </div>

      {/* Message */}
      <div className="mt-6">

        <label className="mb-3 block text-xs font-black uppercase tracking-widest text-black">
          Message
        </label>

        <textarea
          rows={7}
          placeholder="Tell us more..."
          {...register("message")}
          className="
            w-full
            border-2 border-black
            bg-[#fafafa]
            p-5
            text-sm font-semibold
            outline-none
            shadow-[4px_4px_0px_rgba(0,0,0,1)]
            transition-all
            focus:border-[#BC1D26] focus:shadow-[6px_6px_0px_rgba(188,29,38,1)] focus:-translate-y-0.5
          "
        />

        {errors.message && (
          <p className="mt-2 text-sm text-red-500">
            {errors.message.message}
          </p>
        )}

      </div>

      {/* API Error */}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-500">
          Something went wrong. Please try again.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="
          mt-8
          flex w-full items-center justify-center gap-3
          bg-[#BC1D26] border-2 border-black
          px-7 py-5
          text-sm font-black uppercase tracking-wider
          text-white
          shadow-[6px_6px_0px_rgba(0,0,0,1)]
          transition-all duration-200
          hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
          disabled:cursor-not-allowed
          disabled:opacity-70
          disabled:hover:translate-y-0
          disabled:hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
        "
      >
        {status === "loading" ? (
          "Sending..."
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}