// Styles
import './globals.css';

// Components
import Header from '@/components/Header/Header';
import MainHeaderBackground from '@/components/Header/MainHeaderBackground';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground />        
        <Header />
        {children}
      </body>
    </html>
  );
}
