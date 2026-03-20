import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import { HeaderOnly } from "../components/Layout";

const publicRoutes = [
    { path: "/", element: Home },
    { path: "/following", element: Following },
    { path: "/upload", element: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
