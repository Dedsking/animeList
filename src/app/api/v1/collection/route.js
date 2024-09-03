import prisma from "@/libs/prisma";

export async function POST(request) {
  const { anime_mal_id, user_email, anime_image, anime_title } =
    await request.json();
  const data = { anime_mal_id, user_email, anime_image, anime_title };

  const create_collection = await prisma.collection.create({ data });

  if (!create_collection)
    return Response.json({
      message: "Collection creation failed",
      status: 500,
      isCreated: false,
    });
  else return Response.json({ isCreated: true, status: 200 });
}
