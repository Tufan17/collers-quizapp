import { Button, Center, Container, Grid, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import UrgeWithPleasureComponent from "./Countdown";
import { useMediaQuery } from "@mantine/hooks";
const Exam = (props) => {
  const [questions] = useState(props.questions);
  const [index, setIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [btnActive, setBtnActive] = useState(true);
  const [selecet, SetSelct] = useState(10);
  const [seconds, SetSeconds] = useState(30);
  const [data, setData] = useState({});


  useEffect(() => {
    const timer = setTimeout(() => {
      setBtnActive(false);
    }, 10000);
   
    const timer1 = setTimeout(() => {
      if (index === 9) {
        props.setAnswers(data);
        props.status();
      } else {
        setIndex(index + 1);
        SetSeconds(30);
        SetSelct(10);
        setBtnActive(true);
      }
    }, 30000);

    return () =>{ clearTimeout(timer);clearTimeout(timer1);};
  }, [index]);



  return (
    questions.length > 0 && (
      <Center h={"100vh"}>
         <Container>
        <Center p={"xl"}>
          <Grid style={{ width: "100%" }}>
            <Grid.Col span={10}>
              {" "}
              <Container
                p={isMobile ? 10 : 50}
                bg={"#ffbe06"}
                style={{ borderRadius: "10px", width: "100%" }}
                mr={"sm"}
              >
                <Title
                  order={isMobile ? 5 : 2}
                  fw={500}
                  c="#fff"
                  align="center"
                >
                  {index + 1}) {questions[index].title}
                </Title>
              </Container>
            </Grid.Col>
            <Grid.Col span={2}>
              <Center h={"100%"}>
                <UrgeWithPleasureComponent key={index} duration={seconds} />
              </Center>
            </Grid.Col>
          </Grid>
        </Center>
        <Container m={"sm"}>
          {questions[index].choices.map((data, num) => {
            return (
              <Button
                disabled={btnActive}
                c="#fff"
                fw={500}
                radius={"10px"}
                size={isMobile ? "sm" : "xl"}
                onClick={() => {
                  SetSelct(num);
                  setData((prevData) => ({
                    ...prevData,
                    [index]: num,
                  }));
                }}
                style={{
                  width: "100%",
                  marginTop: "10px",
                  textAlign: "start",
                  backgroundColor: btnActive
                    ? "gray"
                    : selecet === num
                    ? "#6a4bd6"
                    : "#18b0fa",
                }}
              >
                {data}
              </Button>
            );
          })}
        </Container>
      </Container>
      </Center>
    )
  );
};

export default Exam;
