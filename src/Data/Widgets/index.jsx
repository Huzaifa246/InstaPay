import { Follower, Following, TotalPost } from "../../Constant";
import {
  OrderStatusone,
  orderstatusfive,
  orderstatusfour,
  orderstatusthree,
  orderstatustwo,
} from "./WidgetChartData";

export let OrderStatusDatas = [
  {
    id: "progress1",
    options: OrderStatusone.option,
    series: OrderStatusone.series,
  },
  {
    id: "progress2",
    options: orderstatustwo.option,
    series: orderstatustwo.series,
  },
  {
    id: "progress3",
    options: orderstatusthree.option,
    series: orderstatusthree.series,
  },
  {
    id: "progress4",
    options: orderstatusfour.option,
    series: orderstatusfour.series,
  },
  {
    id: "progress5",
    options: orderstatusfive.option,
    series: OrderStatusone.serifiorderstatusfive,
  },
];

export let ManagerCardDatas = [
  {
    href: "https://www.facebook.com/",
    iconClass: "fa-facebook",
    className: "bg-fb",
  },
  {
    href: "https://myaccount.google.com/",
    iconClass: "fa-google-plus",
    className: "bg-gplus",
  },
  {
    href: "https://twitter.com/",
    iconClass: "fa-twitter",
    className: "bg-twitter",
  },
  {
    href: "https://www.instagram.com/",
    iconClass: "fa-instagram",
    className: "bg-insta",
  },
  {
    href: "https://in.linkedin.com/",
    iconClass: "fa-rss",
    className: "bg-linkedin",
  },
];

export let cardFooterData = [
  { value: 9564, tittle: Follower },
  { sub: "K", value: 49, tittle: Following },
  { sub: "M", value: 96, tittle: TotalPost },
];
