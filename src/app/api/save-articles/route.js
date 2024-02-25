import { articlesModel } from "@/mongo/models/articles_model";

export async function POST(req) {
  const data = await req.json();
  const article = new articlesModel(data);
  return article
    .save()
    .then((saved) => {
      return Response.json(saved);
    })
    .catch((err) => {
      return Response.json(err);
    });
}
