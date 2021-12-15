import React, { useState } from "react";

import { IconButton } from "react-native-paper";

export default function FavIcon() {
  const [active, setActive] = useState(false);
  return (
    <IconButton
      icon={active ? "cards-heart" : "heart-outline"}
      color={active ? "red" : "white"}
      onPress={() => setActive(!active)}
    />
  );
}
