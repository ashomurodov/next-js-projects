import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center h-full">{children}</div>
);

export default AuthLayout;
