function container<T extends unknown[]>(
  props: {
    children: T;
    onSubmit: (
      data: Record<
        Extract<T[number], { type: { name: "Input" }; name: string }>["name"],
        string
      >
    ) => void;
    tester?: (data: T[number]) => void;
  } & Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit" | "children">
) {}

container({
  children: [
    "Asdad",
    { name: "Asdasd" },
    { type: { name: "Input" }, name: "ads" },
    { type: { name: "Input" }, name: "sad" },
    { type: "hum", name: "popcorn" },
    { type: "hum", name: "popcorn", allah: "res" },
  ] as const,
  onSubmit: (data) => {},
  tester: (data) => {},
});
