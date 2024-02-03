export default function Tabs({ children, buttons, buttonsConatiner = "menu" }) {
  const ButtonsConatiner = buttonsConatiner;
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
