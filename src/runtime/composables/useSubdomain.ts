import { useState } from "#imports";

export default function () {
  const subdomain = useState<string | undefined>("subdomain", () => undefined);

  const setSubdomain = (value: string) => {
    subdomain.value = value;
  };

  return {
    subdomain,
    setSubdomain,
  };
}
