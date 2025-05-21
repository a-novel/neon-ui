import { type i18n } from "i18next";

import { i18nPKG } from "./ux/i18n";

export * from "./theme/palette";
export * from "./theme/sizes";
export * from "./theme/common";
export * from "./theme";
export { FONTS } from "./theme/typography";

export interface InitProps {
  i18n: i18n;
}

export const init = (props: InitProps) => {
  props.i18n.on("languageChanged", (lang) => {
    i18nPKG.changeLanguage(lang).catch(console.error);
  });
};
