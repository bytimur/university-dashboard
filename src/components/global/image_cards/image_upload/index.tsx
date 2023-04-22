import { classifiersAPI } from "@/src/redux/services/classifiers_service";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../../loader";
import IconProvider from "../../providers/icon_provider";
import TextProvider from "../../providers/text_provider";
import { ImageUploadProps } from "./image-upload";
import Container from "./style";

const ImageUpload: React.FC<ImageUploadProps> = ({
  initialImage,
  onChange,
  titler,
  name,
  error,
}) => {
  const { t } = useTranslation();
  const [imageSrc, setImageSrc] = useState<string | null>(initialImage || null);
  const [upload, { isLoading }] = classifiersAPI.useUploadMutation();

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("images", file);
      upload(formData)
        .unwrap()
        .then((res) => {
          console.log(res);
          onChange(res[0].id, name);
          setImageSrc(`http://api.oneschool.it-project.uz${res[0].url}`);
        })
        .catch((error) => {
          console.log(error);
          setImageSrc(null);
        });
    } else {
      setImageSrc(null);
    }
  };

  return (
    <Container>
      <div className="card-content-wrap">
        <div className="image-content-wrap">
          <div className="image-wrap">
            {isLoading ? (
              <div className="placeholder">
                <Loader color="second_text" />
              </div>
            ) : imageSrc ? (
              <img src={imageSrc} alt="Uploaded Image" className="image" />
            ) : (
              <div className="placeholder">
                <IconProvider
                  icon="GallaryIcon"
                  width={24}
                  height={24}
                  color="second_text"
                />
              </div>
            )}
          </div>
          {error ? (
            <div className="error-image">
              <IconProvider icon="AttentionCircle" color="solid_red10" />
              <TextProvider
                options={{
                  textType: {
                    regular: "regular12|14",
                  },
                  color: "solid_red10",
                }}
              >
                {t(error)}
              </TextProvider>
            </div>
          ) : null}
        </div>
        <div className="card-titler-wrap">
          <TextProvider
            options={{
              textType: {
                medium: "medium14|16",
              },
            }}
          >
            {titler.title}
          </TextProvider>
          <TextProvider
            options={{
              textType: {
                regular: "regular12|14",
              },
              color: "second_text",
            }}
          >
            {titler.description}
          </TextProvider>
        </div>
      </div>
      <div className="input-container">
        <input
          type="file"
          accept="image/*"
          title=" "
          onChange={handleImageChange}
          id="files"
        />
        <IconProvider icon="RecieveSquareIcon" color="main_text" />
        <TextProvider
          options={{
            textType: {
              medium: "medium14|16",
            },
          }}
        >
          Загрузите фото
        </TextProvider>
      </div>
    </Container>
  );
};

export default ImageUpload;
