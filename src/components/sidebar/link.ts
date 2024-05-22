import 
    {StorageRounded, 
     Twitter, 
     FilterAlt, 
     ClassOutlined, 
     Tune, 
     Settings,
     ArticleOutlined,
     QuestionAnswerOutlined
    } from '@mui/icons-material';
import { CustomLinks } from '../../types/customLinks';

export const links: CustomLinks[] = [
    {
        text: "Sources",
        to: "/sources",
        Icon: StorageRounded
    },
    {
        text: "Articles",
        to: "/articles",
        Icon: Twitter
    },
    {
        text: "Categories",
        to: "/categories",
        Icon: FilterAlt
    },
    {
        text: "Library categories",
        to: "/library-categories",
        Icon: FilterAlt
    },
    {
        text: "Libraries",
        to: "/libraries",
        Icon: ClassOutlined
    },
    {
        text: "Sliders",
        to: "/sliders",
        Icon: Tune
    },
    {
        text: "Settings",
        to: "/settings",
        Icon: Settings
    },
    {
        text: "Pages",
        to: "/pages",
        Icon: ArticleOutlined
    },
    {
        text: "Period filter",
        to: "/period-filter",
        Icon: FilterAlt
    },
    {
        text: "Filter categories",
        to: "/filter-categories",
        Icon: FilterAlt
    },
    {
        text: "Filters",
        to: "/filters",
        Icon: FilterAlt
    },
    {
        text: "Feedbacks",
        to: "/feedbacks",
        Icon: QuestionAnswerOutlined
    },
    {
        text: "Comments",
        to: "/comments",
        Icon: QuestionAnswerOutlined
    },
    {
        text: "Province",
        to: "/province",
        Icon: StorageRounded
    }
]