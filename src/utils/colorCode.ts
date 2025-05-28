export const colorCode = (
  status: string
): { color: string; background: string } => {
  switch (status.toLowerCase()) {
    case "approved":
      return { color: "#155724", background: "#D2F4DA" };
    case "suspended":
      return { color: "#721C24", background: "#FCB4BB" };
    case "pending":
      return { color: "#856404", background: "#FFE69A" };
    default:
      return { color: "#000", background: "#FFF" };
  }
};
