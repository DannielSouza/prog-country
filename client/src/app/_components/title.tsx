import React from "react";

type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <div className="w-fit relative">
      <h2 className="font-semibold text-lg mb-8 border-b w-[120%]">{title}</h2>
    </div>
  );
};
