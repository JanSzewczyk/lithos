import { type MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lithos 3D — Naturalnie na dnie. Z betonu i pasji.",
    short_name: "Lithos",
    description: "Innowacyjne koszyczki Method Feeder z zbrojonego betonu. Precyzja druku 3D, zero ołowiu.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9F9F8",
    theme_color: "#2C3033"
  };
}
