import React, { useState } from "react";
import classes from "./TagInputCard.module.css";
import Card from "../../../Components/Card/Card";
import Button from "../../../Components/Button/Button";
import TagContainer from "../../../Components/Tag/TagContainer";
import Tag from "../../../Components/Tag/Tag";

function TagInputCard({ tags, addTag, removeTag }) {
  const [tag, setTag] = useState("");

  const checkSameTag = () => {
    const sameTag = tags.find((t) => t === tag);
    if (sameTag) return true;
    return false;
  };

  const addHandler = () => {
    if (!checkSameTag(tag)) {
      addTag(tag);
      setTag("");
    } else {
      alert("There is same tag, make sure every tag is unique!");
    }
  };

  return (
    <Card className={classes.contain}>
      <h3>Tags</h3>
      <p>
        Add some tag that relate to your question’s topic. (e.g java, python,
        html, docker)
      </p>
      <TagContainer>
        {tags.map(({ tag }) => (
          <Tag onRemove={removeTag} text={tag} key={tag} removeable={true} />
        ))}
      </TagContainer>
      <div className={classes.inputWrapper}>
        <input
          onChange={(e) => setTag(e.target.value)}
          value={tag}
          type="text"
        />
        <Button onClick={addHandler} theme="dark">
          Add
        </Button>
      </div>
    </Card>
  );
}

export default TagInputCard;
