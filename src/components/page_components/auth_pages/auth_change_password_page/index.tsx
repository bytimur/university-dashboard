import ForgetPasswordAuth from "@/src/components/page_components/auth_pages/auth_cards/forget_password";
import IconProvider from "@/src/components/global/providers/icon_provider";
import Container from "../style";

const AuthChangePasswordPage = () => {
  return (
    <Container>
      <div className="illustration-wrap">
        <IconProvider icon="AuthIllustrationIcon" />
      </div>
      <div className="auth-wrap">
        <ForgetPasswordAuth />
      </div>
    </Container>
  );
};

export default AuthChangePasswordPage;
