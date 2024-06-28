import { useEffect, useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import OffpageFooter from "./OffpageFooter";
import { scrollMaxHeight } from "@/utils";

function CopyrightDisclaimer() {
  const [initialScroll, setInitialScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setInitialScroll(window.scrollY <= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    window.scrollTo({ top: scrollMaxHeight(), behavior: "smooth" });
  };

  return (
    <>
      <div
        className="absolute bottom-0 w-11/12 left-1/2 -translate-x-1/2 mb-3 transition-opacity duration-500"
        style={{ opacity: initialScroll ? 1 : 0 }}
      >
        <Card className="bg-opacity-40 w-fit px-5">
          <CardBody>
            <span>
              DISCLAMER (scroll down)
              <i
                className="bi bi-arrow-down-circle-fill ml-2 hover:text-gray-500 hover:cursor-pointer transition-colors"
                onClick={handleScrollClick}
              ></i>
            </span>
          </CardBody>
        </Card>
      </div>
      <OffpageFooter>
        <p className="mb-5">
          This website and the associated Discord bot, <i>Diablo Strike</i>, are
          fan-made projects created by me. The content, including the name,
          design, and inspiration, is derived from a specific video game ability
          (OGM-72 'DIABLO' Strike) associated with a character (Captain) from
          Risk of Rain 2. This project is purely for personal enjoyment and is
          not intended for any commercial use.
        </p>
        <p className="mb-5">
          <strong>Acknowledgment of Intellectual Property:</strong>{" "}
          <i>Diablo Strike Control Panel</i> acknowledges and respects the
          intellectual property rights of the creators and owners of Risk of
          Rain 2. All copyrights, trademarks, and other intellectual property
          pertaining to the game are the property of their respective owners,
          including: Hopoo Games and Gearbox.
        </p>
        <p className="mb-5">
          <strong>Cooperation with Rights Owners:</strong>{" "}
          <i>Diablo Strike Control Panel</i> is committed to cooperating with
          the rights owners of Risk of Rain 2. If the creators or owners of the
          game believe that this project infringes upon their intellectual
          property rights, please contact{" "}
          <a href="mailto:r.ivankos21@gmail.com">r.ivankos21@gmail.com</a> for
          prompt resolution. <i>Diablo Strike Control Panel</i> is open to
          discussions and will take appropriate action, including the removal of
          the website and associated services if required by the rights owners.
        </p>
        <p>
          <strong>Note:</strong> This project is not affiliated with, endorsed
          by, or sponsored by the creators or owners of Risk of Rain 2. It is an
          independent, non-profit project created for personal use.
        </p>
      </OffpageFooter>
    </>
  );
}

export default CopyrightDisclaimer;
