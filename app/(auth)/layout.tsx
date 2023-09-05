import React from "react";

const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="bg-indigo-500 h-full">
            {children}
        </div>
    );
}
 
export default AuthLayout;