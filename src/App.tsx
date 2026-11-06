import { Routes, Route } from "react-router";
import AppLayout from "@/components/AppLayout";
import Home from "@/pages/Home";
import Curriculum from "@/pages/Curriculum";
import LessonPage from "@/pages/LessonPage";
import Library from "@/pages/Library";
import Labs from "@/pages/Labs";
import Glossary from "@/pages/Glossary";
import Notebook from "@/pages/Notebook";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<AppLayout />}>
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/library" element={<Library />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/notebook" element={<Notebook />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
