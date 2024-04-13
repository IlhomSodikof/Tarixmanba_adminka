import { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";

import ProtectedRoute from "../pages/ProtectedRoute";
import Loading from "../components/loading";

const SourcePage = lazy(() => import("../pages/SourcePage"))
const HomePage = lazy(() => import("../pages/HomePage"))
const ArticlesPage = lazy(() => import("../pages/ArticlesPage"))
const CategoriesPage = lazy(() => import("../pages/CategoriesPage"))
const LibraryCategoriesPage = lazy(() => import("../pages/LibraryCategoriesPage"))
const LibrariesPage = lazy(() => import("../pages/LibrariesPage"))
const SlidersPage = lazy(() => import("../pages/SlidersPage"))
const SettingsPage = lazy(() => import("../pages/SettingsPage"))
const PagesPage = lazy(() => import("../pages/PagesPage"))
const PeriodFilterPage = lazy(() => import("../pages/PeriodFilterPage"))
const FilterCategoriesPage = lazy(() => import("../pages/FilterCategoriesPage"))
const FiltersPage = lazy(() => import("../pages/FiltersPage"))
const FeedbacksPage = lazy(() => import("../pages/FeedbacksPage"))
const CommentsPage = lazy(() => import("../pages/CommentsPage"))
const LoginPage = lazy(() => import("../pages/LoginPage"))
const SourceCreatePage = lazy(() => import("../pages/SourcePage/SourceCreatePage"))
const SourceEditPage = lazy(() => import("../pages/SourcePage/SourceEditPage"))
const LibraryCategoriesCreatePage = lazy(() => import("../pages/LibraryCategoriesPage/LibraryCategoriesCreatePage"))
const LibraryCategoriesEditPage = lazy(() => import("../pages/LibraryCategoriesPage/LibraryCategoriesEditPage"))

const routes: RouteObject[] = [
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <HomePage />
            </ProtectedRoute>
        )
    },
    {
        path: "/login",
        element: (    
            <Suspense fallback={<Loading />}>
                <LoginPage />
            </Suspense>
        )
    },
    {
        path: "/sources",
        element: (
            <ProtectedRoute>
                <SourcePage />
            </ProtectedRoute>
        )
    },
    {
        path: "/sources/create",
        element: (
            <ProtectedRoute>
                <SourceCreatePage />
            </ProtectedRoute>        
        )
    },
    {
        path: "/sources/edit/:id",
        element: (
            <ProtectedRoute>
                <SourceEditPage />
            </ProtectedRoute>        
        )
    },
    {
        path: "/articles",
        element: (
            <ProtectedRoute>
                <ArticlesPage />
            </ProtectedRoute>
        )
    },
    {
        path: "/categories",
        element: (
            <ProtectedRoute>
                <CategoriesPage />
            </ProtectedRoute>
        )
    },
    {
        path: "/library-categories",
        element: (
            <ProtectedRoute>
                <LibraryCategoriesPage />
            </ProtectedRoute>
        )
    },
    {
        path: "/library-categories/create",
        element: (
            <ProtectedRoute>
                <LibraryCategoriesCreatePage />
            </ProtectedRoute>
        )
    },
    {
        path: "/library-categories/edit/:id",
        element: (
            <ProtectedRoute>
                <LibraryCategoriesEditPage />
            </ProtectedRoute>
        )
    },
    {
        path: "/libraries",
        element: (
            <ProtectedRoute>
                <LibrariesPage />
            </ProtectedRoute>
        )
    },
    {
        path: "/sliders",
        element: (
            <ProtectedRoute>
                <SlidersPage />
            </ProtectedRoute>
        )
    },
    {
        path: "/settings",
        element: (
            <ProtectedRoute>
                <SettingsPage />
            </ProtectedRoute>
        )
    },
    {
        path: "/pages",
        element: (
            <ProtectedRoute>
                <PagesPage />
            </ProtectedRoute>
        )
    },
    {
        path: "/period-filter",
        element: (
            <ProtectedRoute>
                <PeriodFilterPage />
            </ProtectedRoute>
        )
    },
    {
        path: "/filter-categories",
        element: (
            <ProtectedRoute>
                <FilterCategoriesPage />
            </ProtectedRoute>
        )
    },
    {
        path: "/filters",
        element: (
            <ProtectedRoute>
                <FiltersPage />
            </ProtectedRoute>
        )
    },
    {
        path: "/feedbacks",
        element: (
            <ProtectedRoute>
                <FeedbacksPage />
            </ProtectedRoute>
        )
    },
    {
        path: "/comments",
        element: (
            <ProtectedRoute>
                <CommentsPage />
            </ProtectedRoute>
        )
    },
]

export default routes