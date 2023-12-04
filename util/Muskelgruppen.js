import PushImage from "./assets/imgs/push.png";
import PullImage from "./assets/imgs/pull.png";
import LegsImage from "./assets/imgs/legs.png";
import CardioImage from "./assets/imgs/cardio.png";

export const muskelgruppen = [
  { label: "Rücken", value: "Rücken" },
  { label: "Beine", value: "Beine" },
  { label: "Brust", value: "Brust" },
  { label: "Schultern", value: "Schultern" },
  { label: "Bizeps", value: "Bizeps" },
  { label: "Trizeps", value: "Trizeps" },
  { label: "Bauch", value: "Bauch" },
  { label: "Nacken", value: "Nacken" },
];

export const Kategorien = [
  {
    id: "push",
    title: "Push",
    img: PushImage,
  },
  {
    id: "pull",
    title: "Pull",
    img: PullImage,
  },
  {
    id: "legs",
    title: "Legs",
    img: LegsImage,
  },
  {
    id: "cardio",
    title: "Cardio",
    img: CardioImage,
  },
];
