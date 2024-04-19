

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>header</div>
      <div>sidebar</div>
      {children}
    </div>
  );
}
