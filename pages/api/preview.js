import { getBlogBySlug } from "lib/api";
export default async function enablePreview(req, res) {
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.secret
  ) {
    return res.status(401).json({ message: "invalid token" });
  }

  const blog = await getBlogBySlug(req.query.slug);

  if (!blog) {
    return res.status(401).json({ message: "invalid slug" });
  }

  // setPreviewData will set cookies into your browser
  // __prerender_bypass __next_preview_data
  res.setPreviewData({});
  res.writeHead(307, { Location: `/blogs/${blog.slug}` });
  res.end();
}
