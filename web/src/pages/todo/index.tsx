import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Container,
  CssBaseline,
  Box,
  Paper,
} from "@mui/material";
import { Edit, Delete, PlaylistAdd } from "@mui/icons-material";
import SingleTodo from "./SingleTodo";
import { State } from "../../redux/reducers";
import {
  NewTodo,
  Todo,
  getTodo,
  addTodo,
  editTodo,
  deleteTodo,
} from "../../redux/actions/todo.actions";

const ACTIONS = {
  ADD: "ADD",
  EDIT: "EDIT",
  NONE: null,
};

export default function ToDo() {
  const dispatch = useDispatch();
  const { todos, user } = useSelector((state: State) => state);
  const [action, setAction] = React.useState<string | null>(ACTIONS.NONE);
  const [todo, setTodo] = React.useState<any>(null);

  const addNewTodo = React.useCallback((newTodo: NewTodo) => {
    dispatch(addTodo(newTodo));
  }, []);

  const editExistTodo = React.useCallback((todo: Todo) => {
    dispatch(editTodo(todo));
  }, []);

  const deleteExistTodo = React.useCallback((todo: Todo) => {
    if (
      !window.confirm(`Are you sure you want to delete todo: (${todo.title})?`)
    )
      return;
    dispatch(deleteTodo(todo.id));
  }, []);

  const handleAdd = React.useCallback(() => {
    setAction(ACTIONS.ADD);
    setTodo({ title: "", description: "" });
  }, []);

  const handleEdit = React.useCallback(
    (selectedtodo: Todo) => {
      setAction(ACTIONS.EDIT);
      setTodo({ ...selectedtodo });
    },
    [action, todo]
  );

  const handleClose = React.useCallback(() => {
    if (!action) setAction(ACTIONS.NONE);
    if (!todo) setTodo(null);
  }, []);

  const handleAction = React.useCallback(
    ({ title, description }: any) => {
      if (!action || !todo) return;
      if (action === ACTIONS.ADD) return addNewTodo({ title, description });
      if (action === ACTIONS.EDIT)
        return editExistTodo({ id: todo.id, title, description });
    },
    [action, todo]
  );

  const ToDos = React.useMemo(
    () =>
      todos.map((todo: Todo) => (
        <Paper sx={{ m: 2 }}>
          <ListItem key={todo.id}>
            <ListItemText primary={todo.title} secondary={todo.description} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleEdit(todo)}
              >
                <Edit />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteExistTodo(todo)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Paper>
      )),
    [todos]
  );

  React.useEffect(() => {
    dispatch(getTodo());
  }, []);

  React.useEffect(() => {
    handleClose();
  }, [todos]);

  return (
    <Container component="main">
      {action && (
        <SingleTodo
          todo={todo}
          handleClose={handleClose}
          handleAction={handleAction}
        />
      )}
      <CssBaseline />
      <Box
        sx={{
          m: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box display="flex">
          <ListItemText primary={user?.name} secondary={user?.email} />
          <IconButton edge="end" aria-label="edit" onClick={() => handleAdd()}>
            <PlaylistAdd />
          </IconButton>
        </Box>

        <List>{ToDos}</List>
      </Box>
    </Container>
  );
}
