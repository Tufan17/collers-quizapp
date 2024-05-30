import { Button, Center, Container, Table } from "@mantine/core";

const Resault = (props) => {
    console.log(props.answers);
  const rows = props.questions.map((element, index) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.title}</Table.Td>
      <Table.Td>
        { element.choices[props.answers[index]]??"Boş Bıraktınız."}
      </Table.Td>
    </Table.Tr>
  ));

  return (
        <Center h={"100vh"}>
            <Container>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Sorular</Table.Th>
            <Table.Th>Cevaplarınız</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Center m={"xl"}>
      <Button
        variant="filled"
        color="violet"
        size="xl"
        radius="xl"
        onClick={() => {
          props.replace();
        }}
      >
        Anasayfaya Dön
      </Button>
    
      </Center>
     </Container>
        </Center>
  );
};

export default Resault;
