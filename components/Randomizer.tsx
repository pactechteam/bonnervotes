import react from "react";

export default function Randomizer(props) {
  const random = props.array
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .map((jsx, index) => {
      return <div key={index}>{jsx}</div>;
    });

  return <>{random}</>;
}
