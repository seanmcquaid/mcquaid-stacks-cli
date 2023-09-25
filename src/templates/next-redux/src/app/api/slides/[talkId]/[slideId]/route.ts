import { createSlideBodySchema } from '@/types/requests/CreateSlideBody';
import db from '@/utils/db';
import type { NextRequest} from 'next/server';
import { NextResponse } from 'next/server';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slideId: string } },
) {
  try {
    const { slideId } = params;

    await db.slide.delete({
      where: {
        id: slideId,
      },
    });

    return NextResponse.next({
      status: 204,
    });
  } catch (err) {
    return NextResponse.next({
      status: 500,
      statusText: "The slide couldn't be deleted",
    });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { slideId: string } },
) {
  try {
    const { slideId } = params;
    const body = await request.json();
    const { title, sortOrder, bulletPoints, notes } =
      createSlideBodySchema.parse(body);

    const slide = await db.slide.update({
      where: {
        id: slideId,
      },
      data: {
        title,
        sortOrder,
        bulletPoints,
        notes,
      },
    });

    return NextResponse.json(slide);
  } catch (err) {
    return NextResponse.next({
      status: 500,
      statusText: "The slide couldn't be updated",
    });
  }
}
