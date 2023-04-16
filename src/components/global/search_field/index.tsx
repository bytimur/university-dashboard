import IconProvider from "../providers/icon_provider";
import Container from "./style";

const SearchField = () => {
  return (
    <Container>
      <div className="icon">
        <IconProvider icon="SearchNormalIcon" color="main_text" />
      </div>
      <input type="text" placeholder="Поиск" />
    </Container>
  );
};

export default SearchField;
