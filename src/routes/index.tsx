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
const SettingsCategoryPage = lazy(() => import("../pages/SettingsCategory"))
const PagesPage = lazy(() => import("../pages/PagesPage"))
const PeriodFilterPage = lazy(() => import("../pages/PeriodFilterPage"))
const FilterCategoriesPage = lazy(() => import("../pages/FilterCategoriesPage"))
const FiltersPage = lazy(() => import("../pages/FiltersPage"))
const FeedbacksPage = lazy(() => import("../pages/FeedbacksPage"))
const CommentsPage = lazy(() => import("../pages/CommentsPage"))
const ProvincePage = lazy(() => import("../pages/ProvincePage"))

const LoginPage = lazy(() => import("../pages/LoginPage"))

const SourceCreatePage = lazy(() => import("../pages/SourcePage/SourceCreatePage"))
const ArticlesCreatePage = lazy(() => import("../pages/ArticlesPage/ArticlesCreatePage"));
const CategoriesCreatePage = lazy(() => import("../pages/CategoriesPage/CategoriesCreatePage"))
const LibraryCategoriesCreatePage = lazy(() => import("../pages/LibraryCategoriesPage/LibraryCategoriesCreatePage"))
const LibrariesCreatePage = lazy(() => import("../pages/LibrariesPage/LibrariesCreatePage"))
const SlidersCreatePage = lazy(() => import("../pages/SlidersPage/SlidersCreatePage"))
const SettingsCreatePage = lazy(() => import("../pages/SettingsPage/SettingsCreatePage"))
const SettingsCategoryCreatePage = lazy(() => import("../pages/SettingsCategory/SettingsCategoryCreatePage"))
const PeriodFilterCreatePage = lazy(() => import("../pages/PeriodFilterPage/PeriodFilterCreatePage"))
const FilterCategoriesCreatePage = lazy(() => import("../pages/FilterCategoriesPage/FilterCategoriesCreatePage"))
const FiltersCreatePage = lazy(() => import("../pages/FiltersPage/FiltersCreatePage"))
const ProvinceCreatePage = lazy(() => import("../pages/ProvincePage/ProvinceCreatePage"))

const SourceEditPage = lazy(() => import("../pages/SourcePage/SourceEditPage"))
const ArticlesEditPage = lazy(() => import("../pages/ArticlesPage/ArticlesEditPage"))
const CategoriesEditPage = lazy(() => import("../pages/CategoriesPage/CategoriesEditPage"))
const LibraryCategoriesEditPage = lazy(() => import("../pages/LibraryCategoriesPage/LibraryCategoriesEditPage"))
const LibrariesEditPage = lazy(() => import("../pages/LibrariesPage/LibrariesEditPage"))
const SlidersEditPage = lazy(() => import("../pages/SlidersPage/SlidersEditPage"))
const PeriodFilterEditPage = lazy(() => import("../pages/PeriodFilterPage/PeriodFilterEditPage"))
const FilterCategoriesEditPage = lazy(() => import("../pages/FilterCategoriesPage/FilterCategoriesEditPage"))
const FiltersEditPage = lazy(() => import("../pages/FiltersPage/FiltersEditPage"))
const ProvinceEditPage = lazy(() => import("../pages/ProvincePage/ProvinceEditPage"))
const SettingsCategoryEditPage = lazy(() => import("../pages/SettingsCategory/SettingsCategoryEditPage"))
const SettingsEditPage = lazy(() => import("../pages/SettingsPage/SettingsEditPage"))

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
        path: "/articles/create",
        element: (
            <ProtectedRoute>
                <ArticlesCreatePage />
            </ProtectedRoute>
        )
    },
    {
        path: "/articles/edit/:id",
        element: (
            <ProtectedRoute>
                <ArticlesEditPage />
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
        path: "/categories/create",
        element: (
            <ProtectedRoute>
                <CategoriesCreatePage />
            </ProtectedRoute>
        )
    },
    {
        path: "/categories/edit/:id",
        element: (
            <ProtectedRoute>
                <CategoriesEditPage />
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
        path: "/libraries/create",
        element: (
            <ProtectedRoute>
                <LibrariesCreatePage />
            </ProtectedRoute>
        )
    },
    {
        path: "/libraries/edit/:id",
        element: (
            <ProtectedRoute>
                <LibrariesEditPage />
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
        path: "/sliders/create",
        element: (
            <ProtectedRoute>
                <SlidersCreatePage />
            </ProtectedRoute>
        )
    },
    {
        path: "/sliders/edit/:id",
        element: (
            <ProtectedRoute>
                <SlidersEditPage />
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
        path: "/settings/create",
        element: (
            <ProtectedRoute>
                <SettingsCreatePage />
            </ProtectedRoute>
        )
    },
    {
        path: "/settings/edit/:id",
        element: (
            <ProtectedRoute>
                <SettingsEditPage />
            </ProtectedRoute>
        )
    },
    {
        path: "/settings-category",
        element: (
            <ProtectedRoute>
                <SettingsCategoryPage />
            </ProtectedRoute>
        )
    },
    {
        path: "/settings-category/create",
        element: (
            <ProtectedRoute>
                <SettingsCategoryCreatePage />
            </ProtectedRoute>
        )
    },
    {
        path: "/settings-category/edit/:id",
        element: (
            <ProtectedRoute>
                <SettingsCategoryEditPage />
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
        path: "/period-filter/create",
        element: (
            <ProtectedRoute>
                <PeriodFilterCreatePage />
            </ProtectedRoute>
        )
    },
    {
        path: "/period-filter/edit/:id",
        element: (
            <ProtectedRoute>
                <PeriodFilterEditPage />
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
        path: "/filter-categories/create",
        element: (
            <ProtectedRoute>
                <FilterCategoriesCreatePage />
            </ProtectedRoute>
        )
    },
    {
        path: "/filter-categories/edit/:id",
        element: (
            <ProtectedRoute>
                <FilterCategoriesEditPage />
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
        path: "/filters/create",
        element: (
            <ProtectedRoute>
                <FiltersCreatePage />
            </ProtectedRoute>
        )
    },
    {
        path: "/filters/edit/:id",
        element: (
            <ProtectedRoute>
                <FiltersEditPage />
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
    {
        path: "/province",
        element: (
            <ProtectedRoute>
                <ProvincePage />
            </ProtectedRoute>
        )
    },
    {
        path: "/province/create",
        element: (
            <ProtectedRoute>
                <ProvinceCreatePage />
            </ProtectedRoute>
        )
    },
    {
        path: "/province/edit/:id",
        element: (
            <ProtectedRoute>
                <ProvinceEditPage />
            </ProtectedRoute>
        )
    },
]

export default routes