import {
  AlertCircle,
  BarChart3,
  FileBox,
  History,
  LayoutDashboard,
  Music2,
  User,
} from "lucide-react";

export const menuItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Content Monitoring",
    href: "/monitoring",
    icon: History,
    submenu: [
      { title: "History & Log", href: "/monitoring/history" },
      { title: "User List", href: "/monitoring/users" },
    ],
  },
  {
    title: "Dynamic Resources",
    href: "/resources",
    icon: BarChart3,
    submenu: [
      { title: "Resources Tags", href: "/resources/tags" },
      { title: "Music", href: "/resources/music" },
      { title: "Video Effects", href: "/resources/effects" },
      { title: "Flushing", href: "/resources/flushing" },
      { title: "Syncing Resources", href: "/resources/sync" },
    ],
  },
  {
    title: "Complaints",
    href: "/complaints",
    icon: AlertCircle,
  },
  {
    title: "Statistics",
    href: "/statistics",
    icon: BarChart3,
  },
];

export const stats = [
  {
    title: "Users",
    value: "1.2k",
    icon: User,
    trend: "+12%",
    trendUp: true,
  },
  {
    title: "Albums",
    value: "342",
    icon: Music2,
    trend: "+8%",
    trendUp: true,
  },
  {
    title: "Resources",
    value: "1.3K",
    icon: FileBox,
    trend: "+15%",
    trendUp: true,
  },
];

export const music = [
  {
    tags: [],
    premium: true,
    _id: "674041d2ff82a2ee820aa5e4",
    name: "Explode",
    category: "action",
    categoryDisplayname: "Action",
    categoryThumbnail:
      "https://d2y0wswd79h3fh.cloudfront.net/resources/files/af_category/action.png",
    type: "effect",
    sort: 3,
    duration: 18,
    track:
      "https://d2y0wswd79h3fh.cloudfront.net/resources/files/audio_effects/dA/explode.mp3",
  },
  {
    tags: [],
    premium: false,
    _id: "674041d2ff82a2ee820aa5e6",
    name: "Impact",
    category: "action",
    categoryDisplayname: "Action",
    categoryThumbnail:
      "https://d2y0wswd79h3fh.cloudfront.net/resources/files/af_category/action.png",
    type: "effect",
    sort: 5,
    duration: 6,
    track:
      "https://d2y0wswd79h3fh.cloudfront.net/resources/files/audio_effects/dA/impact.mp3",
  },
  {
    tags: [],
    premium: true,
    _id: "674041d2ff82a2ee820a5e17",
    name: "Busy Street",
    category: "ambiance",
    categoryDisplayname: "Ambiance",
    categoryThumbnail:
      "https://d2y0wswd79h3fh.cloudfront.net/resources/files/af_category/ambience.jpg",
    type: "effect",
    sort: 16,
    duration: 30,
    track:
      "https://d2y0wswd79h3fh.cloudfront.net/resources/files/audio_effects/df/busy-street.mp3",
  },
];

export const videoEffects = [
  {
    _id: "678a1e31ad64a2df87228225",
    name: "Decolor",
    sort: 81,
    category: "Cinematic",
    c_type: 1,
    intensity: 1,
    premium: false,
    files: {
      thumbnail:
        "https://d2y0wswd79h3fh.cloudfront.net/resources/files/ve/e/ci/s/decolor.webp",
      shader:
        "https://d2y0wswd79h3fh.cloudfront.net/resources/files/ve/e/s/DecolorEffectFragmentShader.metal",
      webp: [],
      loop: {
        isLoop: false,
      },
    },
    params: [],
  },
  {
    _id: "6792f644fe041a53ac77c1c5",
    name: "Churn I",
    sort: 1,
    category: "Distort",
    c_type: 1,
    intensity: 1,
    premium: false,
    files: {
      thumbnail:
        "https://d2y0wswd79h3fh.cloudfront.net/resources/files/ve/e/di/s/churnl.webp",
      webp: [],
      loop: {
        isLoop: false,
      },
    },
    params: [],
  },
  {
    _id: "6792f644fe041a53ac77c1c6",
    name: "Churn II",
    sort: 2,
    category: "Distort",
    c_type: 1,
    intensity: 1,
    premium: true,
    files: {
      thumbnail:
        "https://d2y0wswd79h3fh.cloudfront.net/resources/files/ve/e/di/s/churnll.webp",
      webp: [],
      loop: {
        isLoop: false,
      },
    },
    params: [],
  },
];

export const categories = ["Action", "Ambiance"];
