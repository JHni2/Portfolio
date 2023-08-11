import { createComment, getComments } from '@/service/comments';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return getComments().then((data) => NextResponse.json(data));
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const emoji = form.get('emoji')?.toString();
  const content = form.get('content')?.toString();

  if (!emoji || !content) {
    return new Response('Bad Request', { status: 400 });
  }

  return createComment(emoji, content).then((data) => NextResponse.json(data));
}
