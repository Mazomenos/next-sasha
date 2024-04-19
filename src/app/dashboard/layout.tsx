import Header from "@/components/HeaderComponent";
import Sidebar from "@/components/SidebarComponent";

export default function screenLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="bg-blue-300 flex flex-row h-screen">
        <Sidebar></Sidebar>
        <div className=" flex flex-col w-full">
            <Header></Header>
        
            {children}
        </div>
        
        
      </div>
    );
  }
  