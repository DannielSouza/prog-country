import { Header } from "../_components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="mt-24 max-w-[1100px] mx-auto px-8 pb-4">{children}</div>
    </div>
  );
}
