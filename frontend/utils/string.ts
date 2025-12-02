export const safeToSnake = (str: string) => {
    return (
      str
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/_+/g, "_")
        .replace(/^_+|_+$/g, "")
        .replace(/^[0-9]/, (c) => "_" + c)
    );
  };
  