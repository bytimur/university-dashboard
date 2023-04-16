import React, { useId } from "react";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ReactSelect from "react-select";
import IconProvider from "../providers/icon_provider";
import TextProvider from "../providers/text_provider";
import CustomOption from "./option";

import { SelectProps } from "./select";
import Container from "./style";

const Select = (props: SelectProps) => {
  const {
    label,
    placeholder,
    name,
    defaultValue,
    data,
    control,
    error,
    options,
  } = props;
  const { t } = useTranslation();
  const id = useId();

  return (
    <Container>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <ReactSelect
            className="react-select-container"
            classNamePrefix="react-select"
            defaultValue={defaultValue}
            options={data}
            instanceId={id}
            isSearchable={
              options?.isSearchable === undefined ? true : options?.isSearchable
            }
            isDisabled={options?.isDisabled}
            isMulti={options?.isMulti}
            closeMenuOnSelect={!options?.isMulti || options?.closeMenuOnSelect}
            hideSelectedOptions={
              options?.hideSelectedOptions === undefined
                ? true
                : options.hideSelectedOptions
            }
            placeholder={placeholder}
            isClearable={false}
            {...field}
            components={{
              DropdownIndicator: () => (
                <IconProvider icon="ArrowDownIcon" color="second_text" />
              ),
              NoOptionsMessage: () => (
                <div className="no-options">{t("no_options")}</div>
              ),
              Option: CustomOption,
            }}
          />
        )}
      />
      {error ? (
        <TextProvider
          className="error_message"
          options={{
            textType: {
              regular: "regular12|14",
            },
            color: "solid_red10",
          }}
        >
          <IconProvider icon="AttentionCircle" color="solid_red10" />
          {error}
        </TextProvider>
      ) : null}
    </Container>
  );
};

export default Select;
