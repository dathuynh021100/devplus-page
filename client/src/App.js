import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./Components/ErrorBoundary/ErrorBoundary";
import Loading from "./Components/Loading/Loading";
const Homepage = React.lazy(() => import("./Screen/HomePage/HomePage"));
const OneCampus = React.lazy(() => import("./Screen/OneCampus/OneCampus"));
const TwoCampus = React.lazy(() => import("./Screen/TwoCampus/TwoCampus"));
const AboutDevPlus = React.lazy(() =>
  import("./Screen/AboutDevPlus/AboutDevPlus")
);
const DevActivities = React.lazy(() =>
  import("./Screen/DevPlusActivities/DevActivities")
);

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
            <Suspense fallback={<Loading />}>
              <Homepage />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="/one-plus-campus"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
            <Suspense fallback={<Loading />}>
              <OneCampus />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="/two-plus-campus"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
            <Suspense fallback={<Loading />}>
              <TwoCampus />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="/about-dev"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
            <Suspense fallback={<Loading />}>
              <AboutDevPlus />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="/dev-activities"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
            <Suspense fallback={<Loading />}>
              <DevActivities />
            </Suspense>
          </ErrorBoundary>
        }
      />
    </Routes>
  );
}

export default App;
