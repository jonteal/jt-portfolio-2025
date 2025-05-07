import { Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";

import { ErrorPage } from "@/pages/ErrorPage";
import { ProjectsLayout } from "@/components/layout/ProjectsLayout";
import { ProjectDetails } from "@/pages/ProjectDetails";
import { Games } from "@/pages/Games";
import { WordScramble } from "@/components/games/workScramble/WordScramble";

export const PageRouter = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="project">
      <Route element={<ProjectsLayout />}>
        <Route path=":projectId" element={<ProjectDetails />} />
      </Route>
    </Route>
    <Route path="games" element={<Games />} />
    <Route path="games/word-scramble" element={<WordScramble />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);
