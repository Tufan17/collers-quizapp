import {
  Button,
  Center,
  Container,
  Grid,
  Title,
} from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import UrgeWithPleasureComponent from "./Countdown";
import { useMediaQuery } from "@mantine/hooks";
const Exam = () => {
  const [questions, setQuestion] = useState([]);
  const [index, setIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [btnActive, setBtnActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBtnActive(false);
    }, 10000); 
    return () => clearTimeout(timer);
  }, [index]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
      let list = [];
      data.data.slice(0, 10).forEach((element) => {
        list.push({
          id: element.id,
          title: element.title,
          choices: element.body.split("\n"),
        });
      });
      setQuestion(list);
    });
  }, []);
  return (
    questions.length > 0 && (
      <>
        <Center p={"xl"}>
          <Grid>
            <Grid.Col span={10}>
              {" "}
              <Container
                p={isMobile ? 10 : 50}
                bg={"#ffbe06"}
                style={{ borderRadius: "10px" }}
                mr={"sm"}
              >
                <Title
                  order={isMobile ? 5 : 2}
                  fw={500}
                  c="#fff"
                  align="center"
                >
                  {questions[index].title}
                </Title>
              </Container>
            </Grid.Col>
            <Grid.Col span={2}>
              <Center h={"100%"}>
                <UrgeWithPleasureComponent duration={30} />
              </Center>
            </Grid.Col>
          </Grid>
        </Center>
        <Container
              m={"sm"}
              >
 {questions[index].choices.map((data) => {
          return (
            <Button
              disabled={btnActive}
              c="#fff"
              fw={500}
              radius={"10px"}
              size={isMobile ? "sm" : "xl"}
              style={{ width: "100%", marginTop: "10px", textAlign: "start", backgroundColor:btnActive?"gray":"#18b0fa"}}
            >
              {data}
            </Button>
          );
        })}
        </Container>
       
      </>
    )
  );
};

export default Exam;
