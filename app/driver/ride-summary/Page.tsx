import { RideProvider } from "@/components/driver/RideContext";
export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <RideProvider>
          {children}
        </RideProvider>
      </body>
    </html>
  );
}
