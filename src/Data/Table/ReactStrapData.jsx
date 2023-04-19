import { AlertCircle, AlertTriangle, CheckCircle } from "react-feather";

export const inverse = [
  {
    id: 1,
    firstName: "Stephan",
    lastName: "Laiten",
    office: "Tokyo",
    role: "Accountant",
    salary: "$2100.00",
    age: 20,
    join: "21/01/2023",
  },
  {
    id: 2,
    firstName: "Fay",
    lastName: "Van Damme",
    office: "London",
    role: "CEO",
    salary: "$1420.00",
    age: 22,
    join: "14/02/2022",
  },
  {
    id: 3,
    firstName: "Brevin",
    lastName: "Oleveria",
    office: "New York",
    role: "Software Engineer",
    salary: "$1340.00",
    age: 18,
    join: "04/06/2023",
  },
  {
    id: 4,
    firstName: "Regina",
    lastName: "Ottandy",
    office: "France",
    role: "Pre-sale Support",
    salary: "$3400.00",
    age: 25,
    join: "10/08/2023",
  },
  {
    id: 5,
    firstName: "Vani",
    lastName: "Shah",
    office: "Los Angeles",
    role: "Senior Developer",
    salary: "$3500.00",
    age: 28,
    join: "23/07/2023",
  },
];

export const Hovertabledata = [
  {
    id: 1,
    icon: <AlertTriangle className="m-0" />,
    status: "No Signal",
    signalName: "Astrid: NE Shared managed",
    security: "Medium",
    stage: "Triaged",
    schedule: "0.33",
    bgClass: "bg-light-primary font-primary",
    teamLead: "Chase Nguyen",
  },
  {
    id: 2,
    icon: <AlertTriangle className="m-0" />,
    status: "Offline",
    signalName: "Cosmo: prod shared ares",
    security: "Huge",
    stage: "Triaged",
    schedule: "0.39",
    bgClass: "bg-light-danger font-danger",
    teamLead: "Brie Furman",
  },
  {
    id: 3,
    icon: <AlertCircle className="m-0" />,
    status: "Online",
    signalName: "Phoenix: prod shared lyra-lists",
    security: "Minor",
    stage: "No Triaged",
    schedule: "3.12",
    bgClass: "bg-light-success font-success",
    teamLead: "Jeremy Lake",
  },
  {
    id: 4,
    icon: <CheckCircle className="m-0" />,
    status: "No Signal",
    signalName: "Astrid: NE Shared managed",
    security: "Negligible",
    stage: "triaged",
    schedule: "13.18",
    bgClass: "bg-light-primary font-primary",
    teamLead: "Angelica Howards",
  },
  {
    id: 5,
    icon: <CheckCircle className="m-0" />,
    status: "Online",
    signalName: "Astrid: NE Shared managed",
    security: "Negligible",
    stage: "triaged",
    schedule: "5.33",
    bgClass: "bg-light-success font-success",
    teamLead: "Diane Okuma",
  },
];

export const Inversetabaledata = [
  {
    id: 1,
    firstname: "Ram Jacob",
    lastname: "Wolfe",
    company: "Apple Inc.",
    credit: "$3500.00",
    email: "RamJacob@twitter",
    role: "Developer",
    country: "IND",
  },
  {
    id: 2,
    firstname: "John Deo",
    lastname: "Gummer",
    company: "Hewlett packard",
    credit: "$2400.00",
    email: "JohnDeo@twitter",
    role: "Designer",
    country: "US",
  },
  {
    id: 3,
    firstname: "Elana John",
    lastname: "Cazale",
    company: "Microsoft",
    credit: "$2560.00	",
    email: "ElanaJohn@twitter",
    role: "Designer",
    country: "UK",
  },
  {
    id: 4,
    firstname: "Meryl Streep",
    lastname: "Roberts",
    company: "Tata Ltd.",
    credit: "$1870.00",
    email: "MerylStreep@twitter",
    role: "Developer",
    country: "IND",
  },
  {
    id: 5,
    firstname: "Emma Stone",
    lastname: "Stone",
    company: "Wipro Ltd.",
    credit: "$4580.00",
    email: "EmmaStone@twitter",
    role: "Developer",
    country: "IND",
  },
  {
    id: 6,
    firstname: "Eliana Jons",
    lastname: "jons",
    company: "Info Ltd.",
    credit: "$3910.00",
    email: "ElianaJons@twitter",
    role: "Developer",
    country: "IND",
  },
];

export const Captiontabledata = [
  {
    id: 1,
    firstName: "Mark",
    name: "Elana Robbert",
    email: "ElanaRob@gmail.com",
    lastName: "Otto",
    exp: "1 Year",
    sex: "Male",
    contact: "+91 9789887777",
    userName: "@mdo",
    age: "28",
    dessert: "KitKat",
    calories: "518",
    fat: "26",
    price: "20",
  },
  {
    id: 2,
    firstName: "Elana",
    name: "Stiphen Deo",
    email: "Stiphen@yahoo.com",
    lastName: "Thornton",
    exp: "6 Month",
    sex: "Female",
    contact: "+91 9874563210",
    userName: "@fat",
    age: "22",
    dessert: "Donut",
    calories: "452",
    fat: "25",
    price: "80",
  },
  {
    id: 3,
    firstName: "Larry",
    name: "Genelia Ottre",
    email: "Genelia@gmail.com",
    lastName: "Otthe Birdto",
    exp: "2 Days",
    sex: "Male",
    contact: "+91 8794562135",
    userName: "@twitter",
    age: "24",
    dessert: "Eclair",
    calories: "262",
    fat: "16",
    price: "10",
  },
];

export const StripedRowInverseTableData = [
  { desert: "KitKat", calories: 518, fat: 26, price: 20 },
  { desert: "Donut", calories: 452, fat: 25, price: 80 },
  { desert: "Eclair", calories: 262, fat: 16, price: 10 },
];
export const BreckpointSpecificData = [
  {
    name: "Iphone X Grey",
    orderId: "C12345",
    price: "$12550",
    quantity: 1,
    total: "$12550",
  },
  {
    name: "	Titan Watch",
    orderId: "A14725",
    price: "$120",
    quantity: 2,
    total: "$250",
  },
  {
    name: "	Apple Airpods",
    orderId: "B54213",
    price: "$210",
    quantity: 1,
    total: "$210",
  },
];

export const SizingTablesData = [
  {
    employeeName: "Mark Jecno",
    date: "22/08/2022",
    status: "on leave",
    statusClass: "font-danger",
    hours: "0",
    performance: "29/30",
  },
  {
    employeeName: "Elana Robbert",
    date: "21/08/2022",
    status: "Present",
    statusClass: "font-success",
    hours: "10",
    performance: "30/30",
  },
  {
    employeeName: "John Deo",
    date: "18/08/2022",
    status: "on leave",
    statusClass: "font-danger",
    hours: "8",
    performance: "28/30",
  },
];
export const CustomTableData = [
  {
    filmTitle: "Frozen",
    released: 2013,
    studio: "Disney",
    budget: "$150,000,000",
    domesticGross: "$400,953,009",
  },
  {
    filmTitle: "Minions",
    released: 2015,
    studio: "Universal",
    budget: "$74,000,000",
    domesticGross: "$336,045,770",
  },
  {
    filmTitle: "Zootopia",
    released: 2016,
    studio: "Disney",
    budget: "$150,000,000",
    domesticGross: "$341,268,243",
  },
  {
    filmTitle: "Finding Dory",
    released: 2016,
    studio: "Disney Pixar",
    budget: "$175,000,000",
    domesticGross: "$486,295,531",
  },
  {
    filmTitle: "Toy Story 3",
    released: 2010,
    studio: "Disney Pixar",
    budget: "$200,000,000",
    domesticGross: "$415,004,880",
  },
];

export const DashedBorderData = [
  {
    classname: "Crit Cardio",
    type: "Gym",
    hours: "9:00 AM - 11:00 AM",
    trainer: "Aaron Chapman",
    spots: 10,
  },
  {
    classname: "Zumba Dance",
    type: "Dance",
    hours: "8:00 AM - 9:00 AM",
    trainer: "Donna Wilson",
    spots: 12,
  },
  {
    classname: "Like a butterfly",
    type: "Boxing",
    hours: "9:00 AM - 10:00 AM",
    trainer: "Randy Porter",
    spots: 13,
  },
  {
    classname: "Pilates Reformer",
    type: "Gym",
    hours: "7:00 AM - 8:30 AM",
    trainer: "Aaron Chapman",
    spots: 15,
  },
  {
    classname: "Mind & Body",
    type: "Yoga",
    hours: "	8:00 AM - 9:00 AM",
    trainer: "Adam Stewart",
    spots: 20,
  },
];

export const ResponsiveTablesWithLightBackgroundData = [
  {
    Task: "Web Development",
    Email: "Pixel@efo.com",
    Phone: "+91 7874226671",
    Assign: "Mark Jecno",
    Date: "12/07/2022",
    Price: "$2315.00",
    Status: "Pending",
    StatusClassName: "font-danger",
    Progress: "75%",
  },
  {
    Task: "Graphic Design",
    Email: "Strap@google.com ",
    Phone: "+91 8347855785",
    Assign: "Elana John",
    Date: "23/08/2022",
    Price: "$4125.00",
    Status: "Pending",
    StatusClassName: "font-danger",
    Progress: "45%",
  },
  {
    Task: "WordPress",
    Email: "Pixelstrap@gmail.com",
    Phone: "+91 635609347",
    Assign: "John Deo",
    Date: "15/04/2022",
    Price: "$6123.00",
    Status: "Done",
    StatusClassName: "font-success",
    Progress: "100%",
  },
];
