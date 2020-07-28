import client from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  coverImage,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
`;

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

const OFFSET_NUM = 6;

export async function getAllBlogs(
  { offset = 0, date = "desc" } = { offset: 0, date: "desc" } // what does this line mean...?
) {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date ${date}) { ${blogFields} }[${offset}...${
      offset + OFFSET_NUM
    }]`
  );
  return results;
}

export async function getBlogBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type == "blog" && slug.current == $slug]{${blogFields} content[]{..., "asset":asset->}}`,
      {
        slug,
      }
    )
    .then((res) => res?.[0]);
  return result;
}
