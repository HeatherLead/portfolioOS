import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
interface IsroProps {
  handleExpand: (idx: number | null) => void;
}
const Isro = ({ handleExpand }: IsroProps) => {
  return (
    <ScrollArea>
      <button onClick={() => handleExpand(null)} className="close-button">
        Close
      </button>
      <Image src="/assets/isro.png" alt="" width={400} height={400} />
      <Image src="/assets/isro.png" alt="" width={400} height={400} />
      <Image src="/assets/isro.png" alt="" width={400} height={400} />
      <Image src="/assets/isro.png" alt="" width={400} height={400} />
      <Image src="/assets/isro.png" alt="" width={400} height={400} />
      <Image src="/assets/isro.png" alt="" width={400} height={400} />
      <Image src="/assets/isro.png" alt="" width={400} height={400} />
      <Image src="/assets/isro.png" alt="" width={400} height={400} />
      <Image src="/assets/isro.png" alt="" width={400} height={400} />
    </ScrollArea>
  );
};

export default Isro;
