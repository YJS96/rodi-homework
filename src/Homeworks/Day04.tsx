// import React from "react";
import PolyText from "../components/PolyText";

export default function Day04() {
  return (
    <>
      <div className="px-1">
        <PolyText fontWeight={"bold"} textAlign={"center"} textSize={"medium"}>
          div(default)
        </PolyText>
        <PolyText
          as="div"
          fontWeight={"bold"}
          textAlign={"center"}
          textSize={"medium"}
        >
          div
        </PolyText>
        <PolyText
          as="span"
          fontWeight={"bold"}
          textAlign={"center"}
          textSize={"medium"}
        >
          span
        </PolyText>
        <PolyText
          as="p"
          fontWeight={"bold"}
          textAlign={"center"}
          textSize={"medium"}
        >
          p
        </PolyText>
      </div>
    </>
  );
}
