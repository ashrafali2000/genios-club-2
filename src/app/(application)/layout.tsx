import Footer from "@/components/Footer";
import Provider from "./provider";
import "../globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Provider>
      <div className="absolute inset-0 overflow-hidden bg-[#2c0219]">
        {/* <video id="background-video" src="/videoback.mp4" autoPlay muted loop /> */}
      </div>
      {children}
      <Footer />
    </Provider>
  );
}
