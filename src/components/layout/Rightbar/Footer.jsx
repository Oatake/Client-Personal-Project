import React from "react";

export default function Footer(props) {
  const { setPage, ...restProps } = props;
  return (
    <div className="flex justify-center">
      <div
        className="text-s text-gray-500 hover:underline "
        onClick={() => setPage(false)}
      >
        Log in
      </div>
      <div className="divider divider-horizontal"></div>
      <div
        className="text-s text-gray-500 hover:underline"
        onClick={() => setPage(true)}
      >
        Register
      </div>
    </div>
  );
}
