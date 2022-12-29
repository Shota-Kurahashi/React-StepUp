import { Page2 } from "../components/Page2";
import { UrlParameter } from "../components/UrlParameter";

export const page2Routes = [
  {
    path: "/",
    element: <Page2 />,
  },
  {
    path: "/:id",
    element: <UrlParameter />,
  },
];
