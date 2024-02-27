import React from "react";
import { BR, CA, FR, ES, JP } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";
import { TFunction, changeLanguage } from "i18next";

type TLanguages = 'en' | 'br' | 'fr' | 'es' | 'jp';

export interface ILanguageItem {
  key: TLanguages;
  icon: React.JSX.Element;
  label: string;
  onClick: () => Promise<TFunction<"translation", undefined>>;
}

export interface IUseLanguage {
  selected: ILanguageItem;
  items: ILanguageItem[];
  change: (lang: TLanguages) => Promise<TFunction<"translation", undefined>>;
}

export function useLanguage(defaultLang: TLanguages = 'en'): IUseLanguage {

  React.useEffect(() => { defaultLang !== 'en' ? changeLanguage(defaultLang) : undefined; }, []);

  const { i18n } = useTranslation();

  const languages: ILanguageItem[] = [
    {
      key: 'en',
      icon: <CA width={16} />,
      label: "English",
      onClick: () => changeLanguage('en'),
    },
    {
      key: 'br',
      icon: <BR width={16} />,
      label: "Português (Brasileiro)",
      onClick: () => changeLanguage('br'),
    },
    {
      key: 'fr',
      icon: <FR width={16} />,
      label: "Français",
      onClick: () => changeLanguage('fr'),
    },
    {
      key: 'es',
      icon: <ES width={16} />,
      label: "Español",
      onClick: () => changeLanguage('es'),
    },
    {
      key: 'jp',
      icon: <JP width={16} />,
      label: "日本語",
      onClick: () => changeLanguage('jp'),
    },
  ];

  const selected = languages.find(l => l.key === i18n.language);
  if (!selected) throw new Error(`The language ${i18n.language} was not found on languages items.`);

  return { selected, items: languages, change: (lang: TLanguages) => changeLanguage(lang) } as const;
}