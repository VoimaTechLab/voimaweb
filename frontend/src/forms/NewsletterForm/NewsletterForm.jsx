import { newsletterService } from '@/services/newsletterService';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
 
const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});
 
export function NewsletterForm() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });
 
  const onSubmit = async ({ email }) => {
    setStatus('loading');
    try {
      await newsletterService.subscribe(email);
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };
 
  return (
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="newsletter-form"
        noValidate
        >
        <div className="flex flex-col gap-3">

            <label htmlFor="newsletter-email" className="sr-only">
            Email address
            </label>

            <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            disabled={status === "loading" || status === "success"}
            aria-describedby={
                errors.email ? "newsletter-error" : undefined
            }
            {...register("email")}
            className={`
                border-2 border-black
                px-5
                py-4
                text-sm font-semibold
                outline-none
                shadow-[4px_4px_0px_rgba(0,0,0,1)]
                transition-all
                bg-white
                text-black
                placeholder:text-black/50
                focus:-translate-y-0.5
                focus:shadow-[6px_6px_0px_rgba(0,0,0,1)]

                ${
                errors.email
                    ? "border-black focus:border-black"
                    : "border-black focus:border-black"
                }
            `}
            />

            <button
            type="submit"
            disabled={
                status === "loading" ||
                status === "success"
            }
            className="
                border-2 border-black
                bg-black
                px-6
                py-4
                text-xs
                font-black uppercase tracking-widest
                text-white
                shadow-[4px_4px_0px_rgba(0,0,0,1)]
                transition-all
                hover:-translate-y-0.5
                hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
                disabled:cursor-not-allowed
                disabled:opacity-60
                disabled:hover:translate-y-0
                disabled:hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]
            "
            >
            {status === "loading"
                ? "Subscribing..."
                : status === "success"
                ? "Subscribed ✓"
                : "Subscribe"}
            </button>

        </div>

        {errors.email && (
            <p
            id="newsletter-error"
            role="alert"
            className="mt-3 text-sm text-red-300"
            >
            {errors.email.message}
            </p>
        )}

        {status === "success" && (
            <p
            role="status"
            className="mt-3 text-sm text-green-300"
            >
            You're subscribed! Thank you for staying connected with Voima.
            </p>
        )}

        {status === "error" && (
            <p
            role="alert"
            className="mt-3 text-sm text-red-300"
            >
            Something went wrong. Please try again.
            </p>
        )}
    </form>
  );
}