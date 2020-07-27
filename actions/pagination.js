import { useSWRPages } from "swr";
import { useGetBlogs } from "actions";
import { Col } from "react-bootstrap";
import CardListItem from "components/CardListItem";
import CardItem from "components/CardItem";

export const useGetBlogsPages = ({ blogs, filter }) => {
  return useSWRPages(
    "index-page",
    ({ offset, withSWR }) => {
      let initialData = !offset && blogs;
      const { data: paginatedBlogs } = withSWR(
        useGetBlogs({ offset }, initialData)
      );

      if (!paginatedBlogs) {
        return "Loading...";
      }

      return paginatedBlogs.map((blog) =>
        filter.view.list ? (
          <Col key={`${blog.slug}-list`} md="10">
            <CardListItem
              author={blog.author}
              date={blog.date}
              image={blog.coverImage}
              title={blog.title}
              subtitle={blog.subtitle}
              link={{
                href: "/blogs/[slug]",
                as: `/blogs/${blog.slug}`,
              }}
            />
          </Col>
        ) : (
          <Col key={blog.slug} md="4">
            <CardItem
              author={blog.author}
              date={blog.date}
              image={blog.coverImage}
              title={blog.title}
              subtitle={blog.subtitle}
              link={{
                href: "/blogs/[slug]",
                as: `/blogs/${blog.slug}`,
              }}
            />
          </Col>
        )
      );
    },
    (SWR, index) => {
      if (SWR.data && SWR.data.length === 0) {
        return null;
      }
      return (index + 1) * 3;
    },
    [filter]
  );
};
