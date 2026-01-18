"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <aside className="fixed top-0 left-0 h-screen w-[250px] border-r bg-white overflow-y-auto">
      <ul className="flex flex-col gap-4 p-4">
        <li>
          <Link
            href="/typescript"
            className={`side-link ${isActive("/typescript") ? "active" : ""}`}
          >
            TypeScript
          </Link>
        </li>
        {/* 03 */}
        <li>
          <Link
            href="/03-introduction"
            className={`side-link ${isActive("/03-introduction") ? "active" : ""}`}
          >
            Next.js Introduction
          </Link>
        </li>

        {/* 04 */}
        <li>
          <Link
            href="/04-routing"
            className={`side-link ${isActive("/04-routing") ? "active" : ""}`}
          >
            Routing & Layout
          </Link>
          <ul className="sub-list">
            <li>
              <Link
                href="/04-routing/dynamic-routes/post/2"
                className={`sub-link ${
                  isActive("/04-routing/dynamic-routes/post") ? "active" : ""
                }`}
              >
                Dynamic Routes
              </Link>
            </li>
          </ul>
        </li>

        {/* 05 */}
        <li>
          <Link
            href="/05-link"
            className={`side-link ${isActive("/05-link") ? "active" : ""}`}
          >
            Link
          </Link>
        </li>

        {/* 06 */}
        <li>
          <Link
            href="/06-client-server"
            className={`side-link ${isActive("/06-client-server") ? "active" : ""}`}
          >
            Client & Server Components
          </Link>
          <ul className="sub-list">
            <li>
              <Link
                href="/06-client-server/client-components"
                className={`sub-link ${
                  isActive("/06-client-server/client-components") ? "active" : ""
                }`}
              >
                Client Components
              </Link>
            </li>
            <li>
              <Link
                href="/06-client-server/server-components"
                className={`sub-link ${
                  isActive("/06-client-server/server-components") ? "active" : ""
                }`}
              >
                Server Components
              </Link>
            </li>
            <li>
              <Link
                href="/06-client-server/server-with-client"
                className={`sub-link ${
                  isActive("/06-client-server/server-with-client") ? "active" : ""
                }`}
              >
                Server with Client
              </Link>
            </li>
          </ul>
        </li>

        {/* 07 */}
        <li>
          <Link
            href="/07-state-events"
            className={`side-link ${isActive("/07-state-events") ? "active" : ""}`}
          >
            State & Events
          </Link>
        </li>

        {/* 08 */}
        <li>
          <Link
            href="/08-loading-error"
            className={`side-link ${isActive("/08-loading-error") ? "active" : ""}`}
          >
            Loading & Error UI
          </Link>
          <ul className="sub-list">
            <li>
              <Link
                href="/08-loading-error/loading-example"
                className={`sub-link ${
                  isActive("/08-loading-error/loading-example") ? "active" : ""
                }`}
              >
                Loading Example
              </Link>
            </li>
            <li>
              <Link
                href="/08-loading-error/suspense-example"
                className={`sub-link ${
                  isActive("/08-loading-error/suspense-example") ? "active" : ""
                }`}
              >
                Suspense Example
              </Link>
            </li>
            <li>
              <Link
                href="/08-loading-error/error-example"
                className={`sub-link ${
                  isActive("/08-loading-error/error-example") ? "active" : ""
                }`}
              >
                Error Example
              </Link>
            </li>
          </ul>
        </li>

        {/* 09 */}
        <li>
          <Link
            href="/09-fetching-data"
            className={`side-link ${isActive("/09-fetching-data") ? "active" : ""}`}
          >
            Fetching Data
          </Link>
          <ul className="sub-list">
            <li>
              <Link
                href="/09-fetching-data/client-components"
                className={`sub-link ${
                  isActive("/09-fetching-data/client-components") ? "active" : ""
                }`}
              >
                Client Components
              </Link>
            </li>
            <li>
              <Link
                href="/09-fetching-data/server-components-fetch"
                className={`sub-link ${
                  isActive("/09-fetching-data/server-components-fetch") ? "active" : ""
                }`}
              >
                Server Components (fetch)
              </Link>
            </li>
            <li>
              <Link
                href="/09-fetching-data/server-components-database"
                className={`sub-link ${
                  isActive("/09-fetching-data/server-components-database") ? "active" : ""
                }`}
              >
                Server Components (database)
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href="/quiz"
            className={`side-link ${isActive("/quiz") ? "active" : ""}`}
          >
            Quiz
          </Link>
        </li>

      </ul>
    </aside>
  );
}
