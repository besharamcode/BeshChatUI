import { useColorScheme } from "react-native";
import {
  DefaultTheme,
  MD3DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from "react-native-paper";

const navyTheme = {
  ...PaperDarkTheme.colors,
  primary: "#1A3E5C", // Deep navy
  onPrimary: "#FFFFFF",
  accent: "#415A77", // Dark blue accent
  background: "#0E1B2A", // Dark midnight blue
  surface: "#1C2F4A", // Dark blue surface
  text: "#B8C7D1", // Light grayish blue text
  secondaryText: "#6C8B9E", // Muted blue-gray secondary text
  error: "#BF616A", // Muted red for errors
  onBackground: "#B8C7D1", // Light on background
  onSurface: "#6C8B9E", // Muted on surface text
  disabled: "#4C5E6B", // Grayish blue for disabled elements
  placeholder: "#6D7A85", // Subtle placeholder text
  backdrop: "#1A2531", // Dark blue backdrop for modals
  notification: "#3C6588", // Blue notification color
  card: "#1A2A38", // Dark card color
  border: "#4A5663", // Blue-gray border color
};

const greenTheme = {
  ...PaperDarkTheme.colors,
  primary: "#0F4D35", // Darker green/
  onPrimary: "#FFFFFF",
  accent: "#3A785F", // Dark accent
  background: "#0A1F1B", // Deep background color
  surface: "#0D2B28", // Dark surface
  text: "#C9D1D9", // Light text for readability
  secondaryText: "#6B8B9C", // Muted secondary text
  error: "#D9534F", // Darker red for errors
  onBackground: "#C9D1D9", // Light on background
  onSurface: "#6B8B9C", // Muted on surface text
  disabled: "#4E5D66", // Darker shade for disabled elements
  placeholder: "#7A8D99", // Subtle placeholder text
  backdrop: "#1A2E27", // Darker backdrop for modal screens
  notification: "#3D9970", // Greenish notification color
  card: "#142927", // Dark card color
  border: "#4F5A60", // Border color for contrast
};

const darkForestTheme = {
  ...PaperDarkTheme.colors,
  primary: "#22452A", // Deep forest green
  onPrimary: "#FFFFFF",
  accent: "#3E6650", // Dark moss green
  background: "#0D1A12", // Deep forest background
  surface: "#193526", // Dark green surface
  text: "#C2D4C8", // Light greenish text
  secondaryText: "#687E7B", // Muted greenish-gray secondary text
  error: "#B14A48", // Deep muted red for errors
  onBackground: "#C2D4C8", // Light on background
  onSurface: "#687E7B", // Muted on surface text
  disabled: "#3F5A55", // Dark muted green for disabled elements
  placeholder: "#687E7B", // Subtle placeholder text
  backdrop: "#12251C", // Dark greenish backdrop
  notification: "#3A6857", // Greenish notification color
  card: "#17362B", // Dark green card color
  border: "#41534F", // Gray-green border color
};

const stromyNightTheme = {
  ...PaperDarkTheme.colors,
  primary: "#2E3C4F", // Dark stormy blue
  onPrimary: "#FFFFFF",
  accent: "#5A6D84", // Slate accent
  background: "#121820", // Deep stormy background
  surface: "#1A2533", // Dark blue-gray surface
  text: "#CED4DB", // Light gray text
  secondaryText: "#7B8E9C", // Muted gray-blue secondary text
  error: "#C24040", // Muted crimson for errors
  onBackground: "#CED4DB", // Light on background
  onSurface: "#7B8E9C", // Muted on surface text
  disabled: "#4D5C6A", // Dark gray-blue for disabled elements
  placeholder: "#7A8C9B", // Subtle placeholder text
  backdrop: "#1B2733", // Dark backdrop
  notification: "#4A8EA1", // Teal notification color
  card: "#212B38", // Dark blue-gray card color
  border: "#4A5D6E", // Stormy blue border color
};

const twilightTheme = {
  ...PaperDarkTheme.colors,
  primary: "#4A2F59", // Deep purple
  onPrimary: "#FFFFFF",
  accent: "#6C5479", // Dark plum accent
  background: "#1A0D1F", // Dark purple background
  surface: "#2E1D3A", // Dark grape surface
  text: "#D4C6DC", // Soft lavender text
  secondaryText: "#8F7D9A", // Muted lavender-gray secondary text
  error: "#A3475D", // Muted magenta for errors
  onBackground: "#D4C6DC", // Light on background
  onSurface: "#8F7D9A", // Muted on surface text
  disabled: "#67546A", // Dark lavender for disabled elements
  placeholder: "#8A7491", // Subtle placeholder text
  backdrop: "#1F0E23", // Dark plum backdrop
  notification: "#865D8D", // Plum notification color
  card: "#27192F", // Dark purple card color
  border: "#6E5470", // Grayish purple border color
};

const midNightTheme = {
  ...PaperDarkTheme.colors,
  primary: "#5B4234", // Dark brown
  onPrimary: "#FFFFFF",
  accent: "#8B6E57", // Sandy brown accent
  background: "#1C130E", // Deep desert background
  surface: "#35271E", // Dark brown surface
  text: "#D6C5B1", // Warm beige text
  secondaryText: "#A18F7C", // Muted beige-brown secondary text
  error: "#BF6154", // Rusty red for errors
  onBackground: "#D6C5B1", // Light on background
  onSurface: "#A18F7C", // Muted on surface text
  disabled: "#645A4E", // Dark beige for disabled elements
  placeholder: "#9C8772", // Subtle placeholder text
  backdrop: "#2C1B15", // Dark brownish backdrop
  notification: "#A6805D", // Sandy brown notification color
  card: "#2A1C18", // Dark brown card color
  border: "#75634E", // Warm brown border color
};

const deepTheme = {
  ...PaperDarkTheme.colors,
  primary: "#1B3A4B", // Deep blue-green
  onPrimary: "#FFFFFF",
  accent: "#3C5C6E", // Muted teal accent
  background: "#0D1C24", // Deep ocean background
  surface: "#1F2F3B", // Dark blue-green surface
  text: "#C1D4D9", // Light blueish text
  secondaryText: "#7790A0", // Muted blue-gray secondary text
  error: "#A13D40", // Muted red for errors
  onBackground: "#C1D4D9", // Light on background
  onSurface: "#7790A0", // Muted on surface text
  disabled: "#465960", // Deep blue-gray for disabled elements
  placeholder: "#6E848E", // Subtle placeholder text
  backdrop: "#112A34", // Dark teal backdrop
  notification: "#417980", // Sea-green notification color
  card: "#15282F", // Dark blue-green card color
  border: "#4A6A74", // Blue-gray border color
};

const steelGrayTheme = {
  ...PaperDarkTheme.colors,
  primary: "#3C3F46", // Steel gray
  onPrimary: "#FFFFFF",
  accent: "#6B727B", // Slate gray accent
  background: "#1A1B1D", // Dark gray background
  surface: "#2A2B2E", // Dark metallic surface
  text: "#D1D3D6", // Soft gray text
  secondaryText: "#8D9297", // Muted gray secondary text
  error: "#C04B4D", // Muted crimson for errors
  onBackground: "#D1D3D6", // Light on background
  onSurface: "#8D9297", // Muted on surface text
  disabled: "#555A60", // Dark gray for disabled elements
  placeholder: "#7B7F84", // Subtle placeholder text
  backdrop: "#1F2022", // Dark gray backdrop
  notification: "#5A5E63", // Gray notification color
  card: "#242527", // Dark gray card color
  border: "#65696E", // Gray border color
};

const amberNightTheme = {
  ...PaperDarkTheme.colors,
  primary: "#5E3E17", // Dark amber
  onPrimary: "#FFFFFF",
  accent: "#A47634", // Warm amber accent
  background: "#1F1408", // Dark brown background
  surface: "#3A2611", // Dark amber surface
  text: "#E1D0B5", // Light amber text
  secondaryText: "#A69073", // Muted tan secondary text
  error: "#B8532F", // Muted burnt orange for errors
  onBackground: "#E1D0B5", // Light on background
  onSurface: "#A69073", // Muted on surface text
  disabled: "#5A4938", // Dark tan for disabled elements
  placeholder: "#8C7A5F", // Subtle placeholder text
  backdrop: "#241A0D", // Dark brownish backdrop
  notification: "#A65F3A", // Amber notification color
  card: "#2E1D0E", // Dark amber card color
  border: "#705A42", // Amber-brown border color
};

const aururaGreen = {
  ...PaperDarkTheme.colors,
  primary: "#1B4B3A", // Dark green inspired by auroras
  onPrimary: "#FFFFFF",
  accent: "#3A785A", // Vibrant teal accent
  background: "#0C1F1A", // Deep forest green background
  surface: "#1D3D32", // Dark green surface
  text: "#BFD1C4", // Soft minty green text
  secondaryText: "#72908A", // Muted teal-gray secondary text
  error: "#A15050", // Muted warm red for errors
  onBackground: "#BFD1C4", // Light on background
  onSurface: "#72908A", // Muted on surface text
  disabled: "#3F5750", // Dark teal-gray for disabled elements
  placeholder: "#6E867F", // Subtle placeholder text
  backdrop: "#0E2521", // Deep green backdrop
  notification: "#4D8B72", // Green notification color
  card: "#142923", // Dark green card color
  border: "#4E6962", // Green-gray border color
};

const AppProvider = ({ children }) => {
  const colorScheme = useColorScheme(); // Detect system-wide dark mode
  const isDarkMode = colorScheme === "dark";
  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "rgb(0, 104, 116)",
      onPrimary: "rgb(255, 255, 255)",
      primaryContainer: "rgb(153, 240, 255)",
      onPrimaryContainer: "rgb(0, 31, 36)",
      secondary: "rgb(162, 63, 1)",
      onSecondary: "rgb(255, 255, 255)",
      secondaryContainer: "rgb(255, 219, 205)",
      onSecondaryContainer: "rgb(53, 16, 0)",
      tertiary: "rgb(0, 109, 64)",
      onTertiary: "rgb(255, 255, 255)",
      tertiaryContainer: "rgb(148, 247, 186)",
      onTertiaryContainer: "rgb(0, 33, 16)",
      error: "rgb(186, 26, 26)",
      onError: "rgb(255, 255, 255)",
      errorContainer: "rgb(255, 218, 214)",
      onErrorContainer: "rgb(65, 0, 2)",
      background: "rgb(251, 252, 253)",
      onBackground: "rgb(25, 28, 29)",
      surface: "rgb(251, 252, 253)",
      onSurface: "rgb(25, 28, 29)",
      surfaceVariant: "rgb(219, 228, 230)",
      onSurfaceVariant: "rgb(63, 72, 74)",
      outline: "rgb(111, 121, 123)",
      outlineVariant: "rgb(191, 200, 202)",
      shadow: "rgb(0, 0, 0)",
      scrim: "rgb(0, 0, 0)",
      inverseSurface: "rgb(46, 49, 50)",
      inverseOnSurface: "rgb(239, 241, 241)",
      inversePrimary: "rgb(79, 216, 236)",
      surfaceDisabled: "rgba(25, 28, 29, 0.12)",
      onSurfaceDisabled: "rgba(25, 28, 29, 0.38)",
      backdrop: "rgba(41, 50, 52, 0.4)",
    },
  };
  const darkTheme = {
    ...PaperDarkTheme,
    dark: true,
    roundness: 4,
    colors: {
      // ...greenTheme,
      // ...darkForestTheme,
      // ...navyTheme,
      ...stromyNightTheme,
      // ...steelGrayTheme,
      // ...amberNightTheme,
      // ...aururaGreen,
      // ...twilightTheme,
      // ...deepTheme,
      // ...midNightTheme,
    },
  };

  return (
    <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </PaperProvider>
  );
};

export default AppProvider;
