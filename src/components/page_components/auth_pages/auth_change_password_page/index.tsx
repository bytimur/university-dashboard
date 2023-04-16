import IconProvider from "@/src/components/global/providers/icon_provider";
import RegistrationAuth from "@/src/components/global/registration_auth";
import Container from "../style";

const AuthChangePasswordPage = () => {
  return (
    <Container>
      <div className="illustration-wrap">
        <IconProvider icon="HighSchoolIcon" />
      </div>
      <div className="auth-wrap">
        <RegistrationAuth />
      </div>
    </Container>
  );
};

export default AuthChangePasswordPage;
