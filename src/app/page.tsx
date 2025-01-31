  import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable";
  import Main from "./_component/main";
  import Info from "./_component/info";
  import RightTwo from "./_component/righttwo";
  import { BadgePercentIcon, Search } from "lucide-react";
  export default function Page() {
    return (
      <div className="bg-black min-h-screen">
        <div className="flex h-[100svh] w-full p-2">
          <ResizablePanelGroup direction="horizontal" className="w-full gap-2">
            <ResizablePanel defaultSize={65}>
              <Main />
            </ResizablePanel>
            <ResizableHandle />

            <ResizablePanel defaultSize={35}>
              <ResizablePanelGroup direction="vertical" className="gap-1">
                <ResizablePanel defaultSize={25}>
                  <Info
                    heading="Any browser, any device."
                    description="Identify returning web and mobile app visitors on all
          browsers, iOS, and Android, with exceptional accuracy."
                    logo={<Search color="#F35B22" size={16} />}
                  />
                </ResizablePanel>
                <ResizableHandle />

                <ResizablePanel defaultSize={50}>
                  <RightTwo />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={25}>
                  <Info
                    heading="Delight your trusted users."
                    description="Personalize user experience and reduce 2FA and OTP
                requirements by identifying logged-out users."
                    logo={<BadgePercentIcon color="#F35B22" size={20} />}
                  />{" "}
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    );
  }
