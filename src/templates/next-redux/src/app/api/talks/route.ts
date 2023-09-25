import { createTalkBodySchema } from '@/types/requests/CreateTalkBody';
import db from '@/utils/db';
import { auth } from '@clerk/nextjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { userId } = auth();
    const talks = await db.talk.findMany({
      where: {
        userId: userId!,
      },
    });
    return NextResponse.json(talks);
  } catch (err) {
    return NextResponse.next({
      status: 500,
      statusText: "The talks couldn't be retrieved",
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = auth();
    const body = await request.json();
    const { talkLength, abstract, topic, category } =
      createTalkBodySchema.parse(body);
    const talk = await db.talk.create({
      data: {
        userId: userId!,
        talkLength,
        abstract,
        topic,
        category,
      },
    });
    return NextResponse.json(talk);
  } catch (err) {
    return NextResponse.next({
      status: 500,
      statusText: "The talk couldn't be created",
    });
  }
}
