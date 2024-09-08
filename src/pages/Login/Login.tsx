import { Button, CardBody, Tooltip } from "@nextui-org/react";
import { FollowingCard, CopyrightDisclaimer } from "@/components";
import { Form, useRouteError } from "react-router-dom";
import "./Login.css";
import { useRef } from "react";
import { Error } from "@/types";

function getErrMsg(error: Error | null): string {
  if (error === null) return "Sorry, an unexpected error has occurred."; 

  console.log(error); 
  return "Sorry, an unexpected error has occurred.";
}

function Login() {
  const deception = useRef( Math.random() < 0.1 );
  const error = useRouteError() as ({ statusText?: string, message?: string } | null); 
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
          {error && (
            <div className="text-center text-red-500 mb-5">
              <p>
                <i>{getErrMsg(error)}</i>
              </p>
            </div>
          )}
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
