import { getComments } from '@/service/comments';
import { NextResponse } from 'next/server';

export async function GET() {
  return getComments().then((data) => NextResponse.json(data));
}
