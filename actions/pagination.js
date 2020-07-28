import { useSWRPages } from "swr";
import { useGetBlogs } from "actions";
import { Col } from "react-bootstrap";
import CardListItem from "components/CardListItem";
import CardBlankListItem from "components/CardListItem";
import CardItem from "components/CardItem";
import CardBlankItem from "components/CardBlankItem";
import { useEffect } from "react";

import moment from "moment";

const OFFSET_NUM = 6;

export const useGetBlogsPages = ({ blogs, filter }) => {
  useEffect(() => {
    window.__pagination__init = true;
  }, []);

  return useSWRPages(
    "index-page",
    ({ offset, withSWR }) => {
      let initialData = !offset && blogs;

      if (typeof window !== "undefined" && window.__pagination__init) {
        initialData = null;
      }

      const { data: paginatedBlogs } = withSWR(
        useGetBlogs({ offset, filter }, initialData)
      );

      if (!paginatedBlogs) {
        return Array(3)
          .fill(0)
          .map((_, i) =>
            filter.view.list ? (
              <Col key={`${i}-list`} md="10">
                <CardBlankListItem />
              </Col>
            ) : (
              <Col key={i} md="4">
                <CardBlankItem />
              </Col>
            )
          );
      }

      return paginatedBlogs.map((blog) =>
        filter.view.list ? (
          <Col key={`${blog.slug}-list`} md="10">
            <CardListItem
              author={blog.author}
              date={moment(blog.date).format("LLL")}
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
              date={moment(blog.date).format("LLL")}
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
      return (index + 1) * OFFSET_NUM;
    },
    [filter]
  );
};
