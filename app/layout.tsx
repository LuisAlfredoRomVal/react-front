// app/layout.tsx
import './globals.css';
import Providers from '../providers'; 
import CountPage from './dashboard/@locations/page';

export const metadata = {
  title: 'Octso',
  description: 'Pagina web del octso',
};

export default function RootLayout({
  children,
  
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers> 
          {children}
          
        </Providers>
      </body>
    </html>
  );
}

