import PageWrapper from '@/components/ui/PageWrapper';
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <PageWrapper isCentered>
      <SignIn />
    </PageWrapper>
  );
};

export default SignInPage;
