import React from "react";
import PropTypes from "prop-types";

export default function Lists(props) {
  const className = ["list-reset"];
  className.push(props.className);
  if (props.isSmall) className.push("text-xs");
  return (
    <ul class={className.join(" ")}>
      {props.data.map((list, index) => {
        return (
          <li key={index} className={list.isChecked ? "is-checked" : ""}>
            {list.content}
          </li>
        );
      })}
    </ul>
  );
}

Lists.PropTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  isSmall: PropTypes.bool,
};
