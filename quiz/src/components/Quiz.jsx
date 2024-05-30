import { Button, Center, Container, Image } from "@mantine/core";
import Confetti from "react-confetti";
import React, { useState, useEffect } from 'react';
import Exam from "./Exam";


const QuizApp = () => {
    const [showConfetti, setShowConfetti] = useState(true);
    const [status, setStatus] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 7000);
      return () => clearTimeout(timer);
    }, []);
  return (
    <div
      style={{
        backgroundImage: "url('/assets/bg.png')",
        objectFit: "contain",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Container
        style={{
          minHeight: "100vh",
          backgroundColor: "#FFFFFF",
        }}
      >
        {status===1?
            <Exam/>
        :<div>
        <Confetti recycle={showConfetti}/>
        <Center style={{ height: "100vh" }}>
          <Container>
            <Center>
            <Image src="assets/2152.jpg" style={{ 
                height: "300px",
                width: "300px",
             }}/>
            </Center>
            <Center>
            <h2 style={{ textAlign:"center" }}>Kendini geliştirmek istiyorsan doğru adrestesin.</h2>

            </Center>
            <Center mt={"xl"}>
              <Button variant="filled" color="violet" size="xl" radius="xl" onClick={()=>{
                setStatus(1);
              }}>
                Başla
              </Button>
            </Center>
          </Container>
        </Center>
        </div>}
      </Container>
    </div>
  );
};

export default QuizApp;
