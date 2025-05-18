import { SPACINGS } from "@/theme/sizes";

import { MenuItem, Select, SelectProps, Stack } from "@mui/material";

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
  fullWidth,
  ...props
}: LangSelectorProps<Langs>) => {
  if (!selectedLang) {
    return null;
  }

  const currentLang = langs[selectedLang];

  return (
    <Select
      fullWidth={fullWidth}
      value={selectedLang}
      onChange={(e) => onChange(e.target.value as keyof Langs)}
      renderValue={() => (
        <Stack direction="row" alignItems="center" gap={SPACINGS.MEDIUM} fontSize="1rem">
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${currentLang.flag}.png 2x`}
            src={`https://flagcdn.com/w40/${currentLang.flag}.png`}
            alt={currentLang.label}
          />
          {fullWidth ? currentLang?.label : currentLang?.displayCode}
        </Stack>
      )}
      {...props}
      inputProps={{ IconComponent: () => null, ...props.inputProps }}
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
