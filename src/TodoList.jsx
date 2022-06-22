import { useTodoItems } from "./App";

export default function TodoList() {
    const { todoItems, setTodoItems } = useTodoItems();

    console.log(todoItems);

    const handleClick = (targetIndex) => {
        setTodoItems(state => {
            return state.map((item, index) => {
                return index === targetIndex ? {...item, complete: true} : item;
            });
        });
    }

    return(
        <ul>
            {todoItems.map((item, index) => {
                return (
                    <li 
                        key={item.name + index} 
                        onClick={() => {handleClick(index)}}
                        style={item.complete ? {textDecoration: "line-through"} : {}}
                    >
                        {item.name}
                    </li>
                );
            })}
        </ul>
    );

}