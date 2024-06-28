import { Card, CardBody } from "@nextui-org/react";

interface OffpageFooterProps {
  children?: React.ReactNode;
  bgColor?: string;
}

function OffpageFooter({ children, bgColor }: OffpageFooterProps) {
  let bgColorClass = bgColor ? `bg-${bgColor}` : "";
  return (
    <footer className="absolute top-full w-11/12 left-1/2 -translate-x-1/2">
      <Card className={"bg-opacity-60 " + bgColorClass} shadow="none">
        <CardBody>{children}</CardBody>
      </Card>
    </footer>
  )
}

export default OffpageFooter;
