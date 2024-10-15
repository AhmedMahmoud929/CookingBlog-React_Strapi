import { useEffect } from "react";
import frAnimations, { motion } from "../../constants/framerAnimations";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

function ArticleBody({ content }) {
  return (
    <div>
      <div className="container px-4 mx-auto prose-lg mb-32">
        {content && <BlocksRenderer content={content} />}
      </div>
    </div>
  );
}

export default ArticleBody;