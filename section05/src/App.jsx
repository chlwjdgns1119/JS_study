import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Button from "./components/Button"

const buttonProps = {
  text: "메일",
  color: "green",
  a: 1,
  b: 2,
  c: 3,
};

function App() {
  return (
    <>
      <Button text={"메일"} color={"red"} />
      <Button {...buttonProps}>
        <Header />
      </Button>
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button>
    </>
  );
}

export default App
