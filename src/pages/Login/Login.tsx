import { Button, CardBody, Tooltip } from "@nextui-org/react";
import { FollowingCard, CopyrightDisclaimer } from "@/components";
import { Form } from "react-router-dom";
import "./Login.css";
import { useRef } from "react";

function Login() {
  const deception = useRef( Math.random() < 0.1 );
  
  console.log(deception.current);
  return (
    <>
      <div
        className="w-screen h-screen fixed top-0 left-0 "
        style={{
          backgroundImage: "url(/captain-skymeadow-transformed.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.3,
          filter: "blur(10px)",
        }}
      />
      <FollowingCard
        wrapperClassName="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        className="p-10 bg-opacity-70"
        followSensitivity={0.05}
        enabled={!deception.current}
      >
        <CardBody>
          <h1 className="text-5xl mx-auto text-center mb-10">
            Diablo Strike Control Panel
          </h1>
          <img
            src="/ds.webp"
            alt="Diablo Strike"
            className="mx-auto rounded-full border-1 border-solid p-1 border-white mb-10"
          />
          <div className="mx-auto w-fit">
            <Form method="post" action="/login">
              <Button
                type="submit"
                color="primary"
                size="lg"
                className={"font-bold text-xl" + (deception.current ? " font-[minecraftia]" : "")}
                name="submitbtn"
                value={deception.current ? "deception" : "login"}
              >
                { deception.current && <Tooltip
                    placement="right"
                    offset={-40}
                    content={
                      <div className="font-[minecraftia] text-[18px] p-3 text-[#34ebe8]">
                        Deception IV
                      </div>
                    }
                  >
                    <div className="glint w-full h-[250px]" />
                  </Tooltip>
                }
                Login with Discord
              </Button>
            </Form>
          </div>
        </CardBody>
      </FollowingCard>
      <CopyrightDisclaimer />
    </>
  );
}

export default Login;
