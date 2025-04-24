import { MenuItem, Select, SelectProps, Stack } from "@mui/material";

import { SPACINGS } from "../theme/sizes";

export interface CountryType {
  displayCode: string;
  flag: string;
  label: string;
}

export interface LangSelectorProps<Langs extends Record<string, CountryType>>
  extends Omit<SelectProps, "value" | "renderValue" | "children" | "onChange"> {
  langs: Langs;
  selectedLang: keyof Langs | undefined;
  onChange: (lang: keyof Langs) => void;
}

export const LangSelector = <Langs extends Record<string, CountryType>>({
  langs,
  selectedLang,
  onChange,
  MenuProps,
  ...props
}: LangSelectorProps<Langs>) => {
  if (!selectedLang) {
    return null;
  }

  const currentLang = langs[selectedLang];

  return (
    <Select
      value={selectedLang}
      onChange={(e) => onChange(e.target.value as keyof Langs)}
      renderValue={() => (
        <Stack direction="row" alignItems="center" gap={SPACINGS.MEDIUM}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${currentLang.flag}.png 2x`}
            src={`https://flagcdn.com/w40/${currentLang.flag}.png`}
            alt={currentLang.label}
          />
          {currentLang?.displayCode}
        </Stack>
      )}
      MenuProps={{
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        ...MenuProps,
      }}
      {...props}
    >
      {Object.entries(langs).map(([code, langInfo]) => (
        <MenuItem key={code} value={code} sx={{ "& > img": { flexShrink: 0 } }}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${langInfo.flag}.png 2x`}
            src={`https://flagcdn.com/w40/${langInfo.flag}.png`}
            alt={langInfo.label}
          />
          {langInfo.label}
        </MenuItem>
      ))}
    </Select>
  );
};
