import { Autocomplete, Button, Pane, TextInput } from "evergreen-ui";
import { Fragment } from "react";

export const Artical = () => {
  return (
    <Fragment>
      <Pane
        border
        margin={16}
        elevation={1}
        padding={8}
        background="yellowTint"
      >
        <Button marginRight={16}>Default</Button>
        <Button marginRight={16} intent="success">
          Success
        </Button>
        <Button marginRight={16} intent="warning">
          Warning
        </Button>
        <Button marginRight={16} intent="danger">
          Danger
        </Button>
        <Pane marginY={8} float="right">
          <Autocomplete
            title="Fruits"
            onChange={(changedItem) => console.log(changedItem)}
            items={[
              "Apple",
              "Apricot",
              "Banana",
              "Cherry",
              "Cucumber",
              "Carrot",
            ]}
          >
            {(props) => {
              const { getInputProps, getRef, inputValue } = props;
              return (
                <TextInput
                  placeholder="Fruits"
                  value={inputValue}
                  ref={getRef}
                  {...getInputProps()}
                />
              );
            }}
          </Autocomplete>
        </Pane>
      </Pane>
    </Fragment>
  );
};

export default Artical;
