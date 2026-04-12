import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis =
  process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
    ? new Redis({
        url: process.env.KV_REST_API_URL,
        token: process.env.KV_REST_API_TOKEN,
      })
    : null;

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const RATE_LIMIT_WINDOW = 60 * 60;
const MAX_REQUESTS = 3;

const toEmail = (process.env.CONTACT_TO_EMAIL || 'mehbubwork@gmail.com').trim();
const fromEmail =
  process.env.RESEND_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>';

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    if (redis && ip !== 'unknown') {
      const key = `ratelimit:${ip}`;

      const count = await redis.incr(key);

      if (count === 1) {
        await redis.expire(key, RATE_LIMIT_WINDOW);
      }

      if (count > MAX_REQUESTS) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
      }
    }

    const { name, email, message, honeypot } = await request.json();

    if (honeypot) {
      return NextResponse.json({ data: 'Message sent successfully' });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!resend) {
      return NextResponse.json(
        { error: 'Contact form is not configured (missing RESEND_API_KEY).' },
        { status: 503 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New message from ${name}`,
      reply_to: email,
      html: `
        <h3>You received a new message from your portfolio contact form!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
