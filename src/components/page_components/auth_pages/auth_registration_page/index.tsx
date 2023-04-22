import IconProvider from "@/src/components/global/providers/icon_provider";
import RegistrationAuth from "@/src/components/page_components/auth_pages/auth_cards/registration_auth";
import Container from "../style";

const AuthRegistrationPage = () => {
  return (
    <Container>
      <div className="illustration-wrap">
        <IconProvider icon="AuthIllustrationIcon" />
      </div>
      <div className="auth-wrap">
        <RegistrationAuth />
      </div>
    </Container>
  );
};

export default AuthRegistrationPage;
