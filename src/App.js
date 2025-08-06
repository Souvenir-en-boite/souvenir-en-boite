// App.jsx
import React from "react";
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";

import Home from "./routes/home";
import { Portfolio } from "./routes/portfolio";
import { PortfolioWedding } from "./routes/portfolio/mariage";
import { PortfolioPregnancy } from "./routes/portfolio/pregnancy";
import { PortfolioBirth } from "./routes/portfolio/birth";
import { Tarifs } from "./routes/tarifs";
import { TarifsWedding } from "./routes/tarifs/mariage";
import { TarifsPregnancy } from "./routes/tarifs/pregnancy";
import { TarifsBirth } from "./routes/tarifs/birth";
import { Contact } from "./routes/contact";
import { PrivacyPolicy } from "./routes/privacy";
import { LegalMentions } from "./routes/legal";
import Layout from "./components/Layout";

// 1. Définir les routes
const rootRoute = createRootRoute({
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

//PORTFOLIO
const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: Portfolio,
});
const portfolioWeddingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio/mariage",
  component: PortfolioWedding,
});
const portfolioPregnancyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio/grossesse",
  component: PortfolioPregnancy,
});
const portfolioBirthRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio/naissance",
  component: PortfolioBirth,
});

//TARIF
const tarifsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tarifs",
  component: Tarifs,
});
const tarifsWeddingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tarifs/mariage",
  component: TarifsWedding,
});
const tarifsPregnancyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tarifs/grossesse",
  component: TarifsPregnancy,
});
const tarifsBirthRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tarifs/naissance",
  component: TarifsBirth,
});

//CONTACT
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

//PRIVACY POLICY
const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/politque-de-confidentialite",
  component: PrivacyPolicy,
});

//LEGAL MENTIONS
const legalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mentions-legales",
  component: LegalMentions,
});

// 2. Construire l'arbre des routes
const routeTree = rootRoute.addChildren([
  homeRoute,
  portfolioRoute,
  portfolioWeddingRoute,
  portfolioPregnancyRoute,
  portfolioBirthRoute,
  tarifsRoute,
  tarifsWeddingRoute,
  tarifsPregnancyRoute,
  tarifsBirthRoute,
  contactRoute,
  privacyRoute,
  legalRoute
]);

// 3. Créer le routeur
const router = createRouter({ routeTree });

// 4. Fournir le router dans l'application
export default function App() {
  return <RouterProvider router={router} />;
}
