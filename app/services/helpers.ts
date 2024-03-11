export function rawText(text?: string | number): string {
  // Textos em minúsculo e sem acento.
  if (!text) return "";
  return String(text).normalize('NFKD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function onlyUnique<T>(value: T, index: number, self: T[]): boolean {
  return self.indexOf(value) === index;
}

function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function getRandomDarkColor(): string {
  let color = getRandomColor();
  while (parseInt(color.substring(1, 3), 16) + parseInt(color.substring(3, 5), 16) + parseInt(color.substring(5, 7), 16) > 400) {
    color = getRandomColor();
  }
  return color;
}

interface GetPathNameOptionsProps {
  splitCamelCase: boolean;
}

export const splitCamelCase = (str: string) => !str ? "" : str.replace(/([a-z])([A-Z])/g, '$1 $2');

export const getPathName = (pathname: string, options?: GetPathNameOptionsProps): string => {
  const p = pathname.replace('/', '');
  return options?.splitCamelCase ? splitCamelCase(p) : p;
};

export function makeKey(txt?: string | number): string {
  return rawText(txt).replace(/[^a-zA-Z0-9\s-]/g, '').replaceAll(' ', '-');
}

export const linkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};