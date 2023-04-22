import IconProvider from "@/src/components/global/providers/icon_provider";
import WelcomeAuth from "@/src/components/page_components/auth_pages/auth_cards/welcome_auth";
import Container from "../style";

const AuthWelcomePage = () => {
  return (
    <Container>
      <div className="illustration-wrap">
        <IconProvider icon="AuthIllustrationIcon" />
      </div>
      <div className="auth-wrap">
        <WelcomeAuth />
      </div>
    </Container>
  );
};

export default AuthWelcomePage;
