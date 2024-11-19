import { Image } from "@nextui-org/react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-orange-50 w-screen h-screen grid place-items-center">
      <div className="flex flex-col items-center">
        <Image
          src="/Oxxo_Logo.png"
          alt="Oxxo Logo"
          width={100}
          height={0} 
          className="mb-4"
        />
        {children}
      </div>
    </div>
  );
}
