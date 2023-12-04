import { Colors } from "./colors";
const chartConfig = {
  backgroundGradientFrom: Colors.bg,
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: Colors.bg,
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(243, 47, 77, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

export default chartConfig;
