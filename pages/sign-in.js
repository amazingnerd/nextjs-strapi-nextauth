import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    signIn("credentials", {
      email: e.target.email.value,
      password: e.target.password.value,
      redirect: false,
    }).then(({ ok, error }) => {
      if (ok) {
        router.push("/profile");
      } else {
        console.warn("error: ", error);
      }
    });
    // .catch((error) => {
    //   console.log("hello world");
    //   console.log("error: ", error);
    // });
  };

  return (
    <form onSubmit={onSubmit}>
      <input id="email" name="email" type="text" />
      <input id="password" name="password" type="password" />
      <button>Sign In</button>
    </form>
  );
}
