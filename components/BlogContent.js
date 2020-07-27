import BlockContent from "@sanity/block-content-to-react";
import HighlightCode from "components/HighlightCode";
import { urlFor } from "lib/api";

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => (
      <HighlightCode language={language}>
        {code}
        <div className="code-filename">{filename}</div>
      </HighlightCode>
    ),
    image: ({ node: { asset, alt } }) => (
      <div className="blog-image">
        <img src={urlFor(asset).height(400).fit("max")} />
        <div className="image-alt">{alt}</div>
      </div>
    ),
  },
};

const BlogContent = ({ content }) => (
  <BlockContent serializers={serializers} blocks={content} />
);

export default BlogContent;
