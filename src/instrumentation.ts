import * as Sentry from '@sentry/nextjs';

export async function register() {
  const isLocalhost = !process.env.VERCEL && process.env.NODE_ENV === 'development';

  if (!isLocalhost) {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
      await import('../sentry.server.config');
    }

    if (process.env.NEXT_RUNTIME === 'edge') {
      await import('../sentry.edge.config');
    }
  }
}

export const onRequestError = Sentry.captureRequestError;
