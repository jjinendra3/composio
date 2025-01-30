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
    <div className="min-h-screen  bg-black p-2">
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-grow w-full gap-2"
      >
        <ResizablePanel defaultSize={65} className="flex-grow">
          <Main />
        </ResizablePanel>
        <ResizableHandle />

        <ResizablePanel defaultSize={35}>
          <ResizablePanelGroup direction="vertical" className="gap-1">
            <ResizablePanel defaultSize={22}>
              <Info
                heading="Any browser, any device."
                description="Identify returning web and mobile app visitors on all
browsers, iOS, and Android, with exceptional accuracy."
                logo={<Search color="orange" size={16} />}
              />
            </ResizablePanel>
            <ResizableHandle />

            <ResizablePanel defaultSize={56}>
              <RightTwo />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={22}>
              <Info
                heading="Delight your trusted users."
                description="Personalize user experience and reduce 2FA and OTP
requirements by identifying logged-out users."
                logo={<BadgePercentIcon color="orange" size={20} />}
              />{" "}
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
