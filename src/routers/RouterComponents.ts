// import components and wrap them in a lazy load function and export them so that it can be used in the router.tsx file
import { lazy } from "react";

export const Home = lazy(() => import("../components/home"));
export const About = lazy(() => import("../components/about"));
export const Contact = lazy(() => import("../components/contact"));
