export const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>, menu: string) => {
  e.preventDefault();
  const targetId = menu.toLowerCase().split(" ").join("");
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
