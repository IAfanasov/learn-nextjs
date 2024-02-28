import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';
import { ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>My App</title>
      </head>
      <body className={`${inter.className} antialiased`}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
