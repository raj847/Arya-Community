import React from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import classes from "./Markdown.module.css";

function Markdown({ str }) {
  return (
    <ReactMarkdown
      className={classes.markdown}
      children={str}
      skipHtml={true}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={atomOneDark}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code
              style={{ borderRadius: "10px" }}
              className={className}
              {...props}
            >
              {children}
            </code>
          );
        },
      }}
    />
  );
}

export default Markdown;
