// src/forms/NewsletterForm/NewsletterForm.jsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { newsletterService } from '@/services/newsletter.service';
 
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
      <div className="newsletter-form__field">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="your@email.com"
          className={`newsletter-form__input ${errors.email ? 'is-invalid' : ''}`}
          disabled={status === 'loading' || status === 'success'}
          aria-describedby={errors.email ? 'newsletter-error' : undefined}
          {...register('email')}
        />
        <button
          type="submit"
          className="btn btn--primary"
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
 
      {errors.email && (
        <p id="newsletter-error" className="form-error" role="alert">
          {errors.email.message}
        </p>
      )}
      {status === 'success' && (
        <p className="form-success" role="status">
          You're subscribed! Thank you for staying connected with Voima.
        </p>
      )}
      {status === 'error' && (
        <p className="form-error" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}