import "./config/connection"
import Layouts from "./component/Layouts"
import CreateTodoModal from "./component/CreateTodoModal"
import Todos from "./component/Todos"


function App() {

  return (
    <Layouts>
      <CreateTodoModal />
      <Todos />
    </Layouts>
  )
}

export default App