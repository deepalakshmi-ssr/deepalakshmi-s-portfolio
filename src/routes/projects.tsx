import { createFileRoute, Outlet } from "@tanstack/react-router";

/**
 * Layout for the project section. The project listing lives in
 * projects.index.tsx; each project detail is a child route that renders
 * through the <Outlet /> below.
 */
export const Route = createFileRoute("/projects")({
  component: Outlet,
});
