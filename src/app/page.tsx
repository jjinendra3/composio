import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Main from "./_component/main";
import RightOne from "./_component/rightone";
import RightTwo from "./_component/righttwo";
import RightThree from "./_component/rightthree";
export default function Page() {
  return (
    <div className="min-h-screen  bg-black p-2">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-screen w-full gap-3"
      >
        <ResizablePanel defaultSize={60}>
          <Main />
        </ResizablePanel>

        <ResizablePanel defaultSize={40}>
          <ResizablePanelGroup direction="vertical" className="gap-2">
            <ResizablePanel defaultSize={20}>
              <RightOne />
            </ResizablePanel>
            <ResizablePanel defaultSize={60}>
              <RightTwo />
            </ResizablePanel>
            <ResizablePanel defaultSize={20}>
              <RightThree />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
