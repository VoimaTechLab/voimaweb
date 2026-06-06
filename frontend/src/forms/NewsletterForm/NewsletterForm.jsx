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
                rounded-full
                border
                px-5
                py-4
                text-sm
                outline-none
                transition-all
                duration-300
                bg-white/10
                text-white
                placeholder:text-white/50
                backdrop-blur-md

                ${
                errors.email
                    ? "border-red-400 focus:border-red-500"
                    : "border-white/20 focus:border-white/50"
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
                rounded-full
                bg-white
                px-6
                py-4
                text-sm
                font-semibold
                text-[#BC1D26]
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
                disabled:cursor-not-allowed
                disabled:opacity-60
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