import { LinkHome, Con, Text } from "./home.styledd"

export default function HomePage() {
  return (
    <Con>
      <div><Text>Hello, I'm Phonebook!</Text></div>
      <LinkHome to="/login">Please, Login </LinkHome>


    </Con>
  )
}