import IconProvider from "@/src/components/global/providers/icon_provider";
import SignIn from "@/src/components/global/sign_in_auth";
import Container from "../style";

const AuthWelcomePage = () => {
  return (
    <Container>
      <div className="illustration-wrap">
        <IconProvider icon="HighSchoolIcon" />
      </div>
      <div className="auth-wrap">
        <SignIn />
      </div>
    </Container>
  );
};

export default AuthWelcomePage;
