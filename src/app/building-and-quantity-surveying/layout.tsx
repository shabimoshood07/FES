import { Suspense } from "react";
import { NavigationEvents } from "@/lib/helpers";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>Dept Navbar</nav>
      <Suspense fallback={null}>
        <NavigationEvents />
      </Suspense>

      {children}
    </section>
  );
}
