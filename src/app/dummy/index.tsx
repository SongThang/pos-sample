import {
  Award,
  Coffee,
  Image,
  Layers,
  LifeBuoy,
  Navigation2,
  Settings,
  Shield,
} from "react-feather";

export const manageBusinessMenu = [
  {
    name: "Account Quality",
    icon: <Award size="18" />,
  },
  {
    name: "Brand Safety",
    icon: <Shield size="18" />,
  },
  {
    name: "Business Setting",
    icon: <Settings size="18" />,
  },
  {
    name: "Business Suite",
    icon: <LifeBuoy size="18" />,
  },
  {
    name: "Collaboration Center",
    icon: <Layers size="18" />,
  },
  {
    name: "Event Manager",
    icon: <Coffee size="18" />,
  },
  {
    name: "Media Library",
    icon: <Image size="18" />,
  },

  {
    name: "Store Location",
    icon: <Navigation2 size="18" />,
  },
];
