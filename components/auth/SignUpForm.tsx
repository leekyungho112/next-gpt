import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FormCard } from "./FormCard";
import { Submit } from "./Submit";

const SignUpForm = () => {
  return (
    <FormCard
      title="회원가입"
      footer={{
        label: "이미 계정이 있으신가요?",
        href: "/login",
      }}
    >
      <form className="space-y-6">
        <div className="space-y-1">
          <Label htmlFor="name">이름</Label>
          <Input
            id="name"
            name="name"
            placeholder="이름을 입력하세요"
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="example@example.com"
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="**********"
            required
          />
        </div>
        <Submit className="w-full">회원가입</Submit>
      </form>
    </FormCard>
  );
};

export default SignUpForm;
