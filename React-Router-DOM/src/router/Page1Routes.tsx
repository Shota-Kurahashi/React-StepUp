import { Page1 } from "../components/Page1";
import { Page1DetailA } from "../components/Page1/Page1DetailA";
import { Page1DetailB } from "../components/Page1/Page1DetailB";

export const page1Routes = [
  {
    path: "/",
    element: <Page1 />,
  },
  {
    path: "/detailA",
    element: <Page1DetailA />,
  },
  {
    path: "/detailB",
    element: <Page1DetailB />,
  },
];
