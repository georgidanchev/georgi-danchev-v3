import "./styles/app.scss";

export const metadata = {
  title: "Georgi | Front End Developer",
  description: "Generated by create next app",
  icons: {
    icon: '/android-chrome-192x192.png', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
