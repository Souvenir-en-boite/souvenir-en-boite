// routes/index.jsx
import { createFileRoute, createRootRoute, createRouter } from "@tanstack/react-router";
import Home from "./home";
import Layout from "../components/Layout";

// Définir le root route avec layout
const rootRoute = createRootRoute({
  component: Layout,
});

const homeRoute = createFileRoute("/")({
  component: Home,
});


const routeTree = rootRoute.addChildren([homeRoute]);

export const router = createRouter({ routeTree });
