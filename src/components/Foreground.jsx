import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  /* const data = [
     desc, filesize, closeOrDownload, tagdetails  ---> dynamic concept (passing the data as a prop to the Card Component)
   ];
  */

  const ref = useRef(null);

  const data = [
    {
      desc: "Everyday life is like programming, I guess. If you love something you can put beauty into it",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "The Web is like a dominatrix.  Everywhere I turn, I see little buttons ordering me to Submit",
      filesize: ".7mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Controlling complexity is the essence of computer programming",
      filesize: ".5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
