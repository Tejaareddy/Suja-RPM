export const handleLogin = async ({ username, password, rememberMe }) => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username && password) {
        // Store credentials if remember me is checked
        if (rememberMe) {
          try {
            // In a real app, use secure storage
            localStorage.setItem("rememberedUser", username);
          } catch (error) {
            console.error("Error storing credentials:", error);
          }
        }
        resolve(true);
      } else {
        reject(new Error("Please enter both username and password"));
      }
    }, 1500);
  });
};

export const getRememberedUser = () => {
  try {
    return localStorage.getItem("rememberedUser");
  } catch (error) {
    console.error("Error retrieving remembered user:", error);
    return null;
  }
};
