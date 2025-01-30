import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Main from "./_component/main";
import RightOne from "./_component/rightone";
import RightTwo from "./_component/righttwo";
import RightThree from "./_component/rightthree";
export default function Page() {
  return (
    <div className="min-h-screen  bg-black p-2">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-screen w-full bg-green-200"
      >
        <ResizablePanel defaultSize={60}>
          <Main />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={40}>
          <ResizablePanelGroup direction="vertical" className="gap-2">
            <ResizablePanel defaultSize={25}>
              <RightOne />
            </ResizablePanel>
            <ResizablePanel defaultSize={50}>
              <RightTwo />
            </ResizablePanel>
            <ResizablePanel defaultSize={25}>
              <RightThree />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
