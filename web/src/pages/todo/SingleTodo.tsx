import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const SingleTodo = ({ todo, handleClose, handleAction }: any) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  return (
    <Dialog open={true}>
      <DialogTitle id="form-dialog-title">Todo Item</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter the title and description for your to-do item.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => handleAction({ title, description })}
          color="primary"
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SingleTodo;
