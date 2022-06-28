import useAmplifyUser from "./useAmplifyUser";
import { test, expect } from "@jest/globals";
import { renderHook } from "@testing-library/react";
import { Auth } from "@aws-amplify/auth";
import "dotenv/config";

Auth.configure({
  Auth: {
    region: `${process.env.AWS_REGION}`,
  },
});

test("useAmplifyUser", () => {
  const { result } = renderHook(() => {
    return useAmplifyUser();
  });

  expect(result.current.user).toBe(null);
  expect(result.current.userIsLoggedIn).toBe(false);
});
